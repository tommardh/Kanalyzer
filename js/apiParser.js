/*jslint bitwise: true, plusplus: true, white: true, sub: true, nomen: true*/
/*global timeUtil, console, self:true, _, parseHistory*/

var DEBUG_COLUMNHISTORY = false;

/**
 * Narrows down raw api board design data.
 */
function parseBoardDesign(apiBoardDesignRaw){
    "use strict";

    /** @namespace apiBoardDesignRaw.columnsData */
    return apiBoardDesignRaw.columnsData;
}

/**
 * Create a new board design.
 */
function createBoardDesign(apiBoardDesign){
    var boardDesign;

    boardDesign = new BoardDesign(apiBoardDesign);

    return boardDesign;
}

/**
* Current board structure with columns and their underlying statuses.
*/
function BoardDesign(apiColumnsData) {
    "use strict";

    var self = _.cloneDeep(apiColumnsData);

    self.getColumnNames = function () {
        var columnNames = [];
        _.forEach(self.columns, function (column) {
            columnNames.push(column.name);
        });
        return columnNames;
    };

    self.getColumnMatchingStatus = function (status) {
        var columnName = null;
        _.forEach(self.columns, function (column) {
            if (_.contains(column.statusIds, status)) {
                columnName = column.name;
                return false;
            }
        });
        return columnName;
    };

    /**
     * Try to guess initial values of the column categories based on the column name.
     */
    self.createColumnCategories = function () {
        var hasCategories;

        hasCategories = (self.columns[0].category === null);

        if(!hasCategories) {
            _.forEach(self.columns, function (column) {
                if (column.name.toLowerCase().indexOf("ready") >= 0) {
                    column.category = "Delay";
                } else if (column.name.toLowerCase().indexOf("backlog") >= 0) {
                    column.category = "Ignore";
                } else if (column.name.toLowerCase().indexOf("to do") >= 0) {
                    column.category = "Ignore";
                } else if (column.name.toLowerCase().indexOf("todo") >= 0) {
                    column.category = "Ignore";
                } else {
                    column.category = "Execution";
                }
            });

            _.first(self.columns).category = "Ignore";
            _.last(self.columns).category = "Done";
        }

        return self.columns;
    };

    self.getColumnCategory = function (columnName) {
        var category = "";
        _.forEach(self.columns, function (column) {
            if (column.name === columnName) {
                category = column.category;
                return false;
            }
        });
        return category;
    };

    self.isIgnoreColumm = function (columnName) {
        return self.getColumnCategory(columnName) === "Ignore";
    };

    self.isExecutionColumn = function (columnName) {
        return self.getColumnCategory(columnName) === "Execution";
    };

    self.isDelayColumn = function (columnName) {
        return self.getColumnCategory(columnName) === "Delay";
    };

    self.isDoneColumn = function (columnName) {
        return self.getColumnCategory(columnName) === "Done";
    };

    self.createColumnCategories();

    return self;
}

function Moves(histories, boardDesign){
    "use strict";

    var moves = [];

    _.forEach(histories, function(event){
        var moveTime = event.created.substr(0, event.created.indexOf('.'));
        _.forEach(event.items, function(eventItem){
            if(eventItem.field === "status"){
                var fromColumn = boardDesign.getColumnMatchingStatus(eventItem.from),
                    toColumn = boardDesign.getColumnMatchingStatus(eventItem.to);
                moves.push(new MoveItem(fromColumn, toColumn, moveTime));
            }
        });
    });

    return moves;
}

function MoveItem(fromColumn, toColumn, moveTime){
    "use strict";

    var self = this;
    self.fromColumn = fromColumn;
    self.toColumn = toColumn;
    self.moveTime = moveTime;
    return self;
}

function ColumnHistoryItem(columnName, enterTime, exitTime){
    "use strict";

    var self = this;
    self.columnName = columnName;
    self.enterTime = enterTime;
    self.exitTime = exitTime;

    self.timeSpentInColumn = function(){
        return Date.parse(self.exitTime) - Date.parse(self.enterTime);
    };

    return self;
}

/**
 * Narrows down raw api issues data to only the issues as objects in a json array.
 */
function parseMultipleApiIssues(apiIssuesRaw){
    "use strict";

    return apiIssuesRaw.issues;
}

/**
 * Constructs new issues from an array of issue data.
 */
function createIssuesFromArray(apiIssues, boardDesign){
    var issues = [];

    _.forEach(apiIssues, function(issue){
        issues.push(new Issue(issue, boardDesign));
    });

    return issues;
}

/**
* Create new issue object containing ID, summary, key, column history.
*/
function Issue(apiIssue, boardDesign, time){
    "use strict";

    var self = {},
        isAlreadyParsed = apiIssue.changelog == null;

    if(!time){
        time = timeUtil.getTimestamp();
    }

    function parseCurrentStatus(currentStatus){
      var status = {};
      status.id = currentStatus.id;
      status.name = currentStatus.name;
      return status;
    }

    function parseApiIssueHistories(apiIssueHistories){
        return new Moves(apiIssueHistories, boardDesign);
    }

    function startColumn(apiIssue){
        return new ColumnHistoryItem(boardDesign.getColumnMatchingStatus(apiIssue.fields.status.id), self.created, time);
    }

    function createColumnHistoryAlreadyParsed(parsedIssue){
        var columnHistory = [];

        _.forEach(parsedIssue.columnHistory, function(item){
           columnHistory.push(new ColumnHistoryItem(item.columnName, item.enterTime, item.exitTime));
        });

        return columnHistory;
    }

    function createColumnHistory(apiIssue){
        var columnHistory = [];

        if(apiIssue.changelog.histories.length === 0){
            columnHistory.push(startColumn(apiIssue));
        } else {
            columnHistory = parseMoves(parseApiIssueHistories(apiIssue.changelog.histories));
        }

        return columnHistory;
    }

    /**
    * Format the parsed history into [COLUMN, ENTER, EXIT].
    * Example: [{"columnName":"Ready to Refine", "enterTime":"2015-09-01T14:42:01", "exitTime":"2015-09-01T14:42:23"}]
    */
    function parseMoves(columnHistory){
        var i,
            createdTime = apiIssue.fields.created.substr(0, apiIssue.fields.created.indexOf('.')),
            columnsWithEnterExit = [];

        // First item is a special case because we need to set the time which the issue was created as enter time.
        columnsWithEnterExit.push(new ColumnHistoryItem(columnHistory[0].fromColumn, createdTime, columnHistory[0].moveTime));
        if(DEBUG_COLUMNHISTORY){console.log("ITERATION: 0 - " + columnHistory[0].fromColumn + " | " + createdTime + " | " + columnHistory[0].moveTime);}

        // Events in the middle.
        for(i = 1; i < columnHistory.length; i++){
            columnsWithEnterExit.push(new ColumnHistoryItem(columnHistory[i].fromColumn, columnHistory[i-1].moveTime, columnHistory[i].moveTime));
            if(DEBUG_COLUMNHISTORY){console.log("ITERATION: " + i + " - " + columnHistory[i].fromColumn + " | " + columnHistory[i-1].moveTime + " | " + columnHistory[i].moveTime);}
        }

        // Last item is a special case because toColumn must become its own object and has no real exit time.
        columnsWithEnterExit.push(new ColumnHistoryItem(columnHistory[columnHistory.length-1].toColumn, columnHistory[columnHistory.length-1].moveTime, time));
        if(DEBUG_COLUMNHISTORY){console.log("ITERATION: " + columnHistory.length + " - " + columnHistory[columnHistory.length-1].toColumn + " | " + columnHistory[columnHistory.length-1].moveTime + " | " + time);}

        return columnsWithEnterExit;
    }

    function isExecutionColumn (columnName) {
        return boardDesign.isExecutionColumn(columnName);
    }

    function isDelayColumn (columnName) {
        return boardDesign.isDelayColumn(columnName);
    }

    /**
     * Check if issue is in a column which is Done category.
     */
    self.isDone = function(){
        var columnName = _.last(self.columnHistory).columnName;
        return boardDesign.isDoneColumn(columnName);
    };

    /**
     * Check if issue is in a column which should be ignored in calculations.
     */
    self.isIgnored = function(columnName){
        return boardDesign.isIgnoreColumm(columnName);
    };

    /**
     * Calculate Cycle Time for the issue.
     */
    function getCycleTime(){
        var cycleTime = 0,
            columnHistory = _.cloneDeep(self.columnHistory);

        if(self.isDone()){
            columnHistory.pop();
            _.forEach(columnHistory, function(item){
                if(!self.isIgnored(item.columnName)){
                    cycleTime += item.timeSpentInColumn();
                }
            });
            return cycleTime;
        } else {
            return null;
        }
    }

    function getExecutionTime(){
        var executionTime = 0,
            columnHistory = _.cloneDeep(self.columnHistory);

        if(self.isDone()) {
            columnHistory.pop();
        }

        _.forEach(columnHistory, function (item) {
            if (isExecutionColumn(item.columnName)) {
                executionTime += item.timeSpentInColumn();
            }
        });

        return executionTime;
    }

    function getDelayTime(){
        var delayTime = 0,
            columnHistory = _.cloneDeep(self.columnHistory);

        if(self.isDone()) {
            columnHistory.pop();
        }

        _.forEach(columnHistory, function(item){
            if(isDelayColumn(item.columnName)) {
                delayTime += item.timeSpentInColumn();
            }
        });
        return delayTime;
    }

    function getProcessEfficiency(executionTime, cycleTime){
        if(cycleTime) {
            return executionTime / cycleTime;
        } else {
            return 0;
        }
    }

    self.isInBetween = function (x, startValue, endValue) {
        return x >= startValue && x <= endValue;
    };

    self.id = apiIssue.id;
    self.key = apiIssue.key;

    if(!isAlreadyParsed){
        self.summary = apiIssue.fields.summary;
        self.created = apiIssue.fields.created.substr(0, apiIssue.fields.created.indexOf('.'));
        self.currentStatus = parseCurrentStatus(apiIssue.fields.status);
        self.columnHistory = createColumnHistory(apiIssue);
    } else {
        self.summary = apiIssue.summary;
        self.created = apiIssue.created;
        self.currentStatus = apiIssue.currentStatus;
        self.columnHistory = createColumnHistoryAlreadyParsed(apiIssue);
    }

    /**
     * Checks which column this issue was in at a given time.
     */
    self.wasInColumn = function (time, column) {
        return self.isInBetween(time, Date.parse(column.enterTime), Date.parse(column.exitTime));
    };

    self.cycleTime = getCycleTime();
    self.executionTime = getExecutionTime();
    self.delayTime = getDelayTime();
    self.processEfficiency = getProcessEfficiency(self.executionTime, self.cycleTime);
    return self;
  }
