var columnsData = {
    "rapidViewId": 2,
    "columns": [
        {
            "id": 11,
            "name": "Ready to Refine",
            "statusIds": [
                "10000"
            ],
            "statisticsFieldValue": 1.0
        },
        {
            "id": 21,
            "name": "Refine Backlog",
            "statusIds": [
                "10010"
            ],
            "statisticsFieldValue": 1.0
        },
        {
            "id": 22,
            "name": "Ready to Analyze",
            "statusIds": [
                "10012"
            ],
            "statisticsFieldValue": 2.0
        },
        {
            "id": 12,
            "name": "Analyze",
            "statusIds": [
                "10002"
            ],
            "statisticsFieldValue": 0.0
        },
        {
            "id": 13,
            "name": "Ready for Development",
            "statusIds": [
                "10003"
            ],
            "statisticsFieldValue": 0.0
        },
        {
            "id": 14,
            "name": "In Progress",
            "statusIds": [
                "3",
                "10004"
            ],
            "statisticsFieldValue": 2.0
        },
        {
            "id": 15,
            "name": "Under Review",
            "statusIds": [
                "10005"
            ],
            "statisticsFieldValue": 0.0
        },
        {
            "id": 16,
            "name": "Ready for Test",
            "statusIds": [
                "10006"
            ],
            "statisticsFieldValue": 0.0
        },
        {
            "id": 17,
            "name": "Under Test",
            "statusIds": [
                "10007"
            ],
            "statisticsFieldValue": 0.0
        },
        {
            "id": 18,
            "name": "Ready to Accept",
            "statusIds": [
                "10008"
            ],
            "statisticsFieldValue": 0.0
        },
        {
            "id": 19,
            "name": "Accept",
            "statusIds": [
                "10009"
            ],
            "statisticsFieldValue": 1.0
        },
        {
            "id": 20,
            "name": "Ready for Release",
            "statusIds": [
                "10001"
            ],
            "statisticsFieldValue": 6.0
        }
    ]
};

var apiIssueWithHistoryAndNotDone = {
    "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
    "id": "10000",
    "self": "https://kanalyzer.atlassian.net/rest/api/2/issue/10000",
    "key": "KTD-1",
    "fields": {
        "issuetype": {
            "self": "https://kanalyzer.atlassian.net/rest/api/2/issuetype/10000",
            "id": "10000",
            "description": "A task that needs to be done.",
            "iconUrl": "https://kanalyzer.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10500&avatarType=issuetype",
            "name": "Task",
            "subtask": false,
            "avatarId": 10500
        },
        "timespent": null,
        "project": {
            "self": "https://kanalyzer.atlassian.net/rest/api/2/project/10000",
            "id": "10000",
            "key": "KTD",
            "name": "Kanalyzer Test Data",
            "avatarUrls": {
                "48x48": "https://kanalyzer.atlassian.net/secure/projectavatar?pid=10000&avatarId=10325",
                "24x24": "https://kanalyzer.atlassian.net/secure/projectavatar?size=small&pid=10000&avatarId=10325",
                "16x16": "https://kanalyzer.atlassian.net/secure/projectavatar?size=xsmall&pid=10000&avatarId=10325",
                "32x32": "https://kanalyzer.atlassian.net/secure/projectavatar?size=medium&pid=10000&avatarId=10325"
            }
        },
        "fixVersions": [

        ],
        "aggregatetimespent": null,
        "resolution": null,
        "resolutiondate": null,
        "workratio": -1,
        "lastViewed": "2015-09-09T16:35:12.898+0200",
        "watches": {
            "self": "https://kanalyzer.atlassian.net/rest/api/2/issue/KTD-1/watchers",
            "watchCount": 1,
            "isWatching": true
        },
        "created": "2015-09-01T14:42:01.000+0200",
        "customfield_10020": null,
        "customfield_10021": null,
        "customfield_10022": null,
        "priority": {
            "self": "https://kanalyzer.atlassian.net/rest/api/2/priority/3",
            "iconUrl": "https://kanalyzer.atlassian.net/images/icons/priorities/medium.png",
            "name": "Medium",
            "id": "3"
        },
        "customfield_10023": "Not Started",
        "customfield_10024": null,
        "labels": [

        ],
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "timeestimate": null,
        "aggregatetimeoriginalestimate": null,
        "versions": [

        ],
        "issuelinks": [

        ],
        "assignee": {
            "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
            "name": "martin.w.greer",
            "key": "martin.w.greer",
            "emailAddress": "martin.w.greer@gmail.com",
            "avatarUrls": {
                "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
            },
            "displayName": "Martin Greer",
            "active": true,
            "timeZone": "Europe/Berlin"
        },
        "updated": "2015-09-09T16:35:12.000+0200",
        "status": {
            "self": "https://kanalyzer.atlassian.net/rest/api/2/status/10009",
            "description": "This status is managed internally by JIRA Agile",
            "iconUrl": "https://kanalyzer.atlassian.net/",
            "name": "Accept",
            "id": "10009",
            "statusCategory": {
                "self": "https://kanalyzer.atlassian.net/rest/api/2/statuscategory/4",
                "id": 4,
                "key": "indeterminate",
                "colorName": "yellow",
                "name": "In Progress"
            }
        },
        "components": [

        ],
        "timeoriginalestimate": null,
        "description": "Write and hand in planning report.",
        "customfield_10012": "0|hzzzzz:",
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_10007": null,
        "customfield_10009": null,
        "aggregatetimeestimate": null,
        "summary": "Write planning report",
        "creator": {
            "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
            "name": "martin.w.greer",
            "key": "martin.w.greer",
            "emailAddress": "martin.w.greer@gmail.com",
            "avatarUrls": {
                "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
            },
            "displayName": "Martin Greer",
            "active": true,
            "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
            "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
            "name": "martin.w.greer",
            "key": "martin.w.greer",
            "emailAddress": "martin.w.greer@gmail.com",
            "avatarUrls": {
                "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
            },
            "displayName": "Martin Greer",
            "active": true,
            "timeZone": "Europe/Berlin"
        },
        "customfield_10000": null,
        "aggregateprogress": {
            "progress": 0,
            "total": 0
        },
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "environment": null,
        "duedate": null,
        "progress": {
            "progress": 0,
            "total": 0
        },
        "votes": {
            "self": "https://kanalyzer.atlassian.net/rest/api/2/issue/KTD-1/votes",
            "votes": 0,
            "hasVoted": false
        }
    },
    "changelog": {
        "startAt": 0,
        "maxResults": 6,
        "total": 6,
        "histories": [
            {
                "id": "10000",
                "author": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
                    "name": "martin.w.greer",
                    "key": "martin.w.greer",
                    "emailAddress": "martin.w.greer@gmail.com",
                    "avatarUrls": {
                        "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                        "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                        "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                        "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
                    },
                    "displayName": "Martin Greer",
                    "active": true,
                    "timeZone": "Europe/Berlin"
                },
                "created": "2015-09-01T14:42:23.667+0200",
                "items": [
                    {
                        "field": "status",
                        "fieldtype": "jira",
                        "from": "10000",
                        "fromString": "To Do",
                        "to": "3",
                        "toString": "In Progress"
                    }
                ]
            },
            {
                "id": "10002",
                "author": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
                    "name": "martin.w.greer",
                    "key": "martin.w.greer",
                    "emailAddress": "martin.w.greer@gmail.com",
                    "avatarUrls": {
                        "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                        "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                        "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                        "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
                    },
                    "displayName": "Martin Greer",
                    "active": true,
                    "timeZone": "Europe/Berlin"
                },
                "created": "2015-09-02T10:40:22.627+0200",
                "items": [
                    {
                        "field": "status",
                        "fieldtype": "jira",
                        "from": "3",
                        "fromString": "In Progress",
                        "to": "10005",
                        "toString": "Under Review"
                    }
                ]
            },
            {
                "id": "10003",
                "author": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
                    "name": "martin.w.greer",
                    "key": "martin.w.greer",
                    "emailAddress": "martin.w.greer@gmail.com",
                    "avatarUrls": {
                        "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                        "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                        "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                        "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
                    },
                    "displayName": "Martin Greer",
                    "active": true,
                    "timeZone": "Europe/Berlin"
                },
                "created": "2015-09-02T10:43:50.955+0200",
                "items": [
                    {
                        "field": "assignee",
                        "fieldtype": "jira",
                        "from": null,
                        "fromString": null,
                        "to": "martin.w.greer",
                        "toString": "Martin Greer"
                    }
                ]
            },
            {
                "id": "10019",
                "author": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
                    "name": "martin.w.greer",
                    "key": "martin.w.greer",
                    "emailAddress": "martin.w.greer@gmail.com",
                    "avatarUrls": {
                        "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                        "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                        "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                        "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
                    },
                    "displayName": "Martin Greer",
                    "active": true,
                    "timeZone": "Europe/Berlin"
                },
                "created": "2015-09-02T11:18:39.546+0200",
                "items": [
                    {
                        "field": "issuetype",
                        "fieldtype": "jira",
                        "from": "10003",
                        "fromString": "Story",
                        "to": "10000",
                        "toString": "Task"
                    }
                ]
            },
            {
                "id": "10021",
                "author": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
                    "name": "martin.w.greer",
                    "key": "martin.w.greer",
                    "emailAddress": "martin.w.greer@gmail.com",
                    "avatarUrls": {
                        "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                        "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                        "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                        "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
                    },
                    "displayName": "Martin Greer",
                    "active": true,
                    "timeZone": "Europe/Berlin"
                },
                "created": "2015-09-02T11:21:36.098+0200",
                "items": [
                    {
                        "field": "summary",
                        "fieldtype": "jira",
                        "from": null,
                        "fromString": "Planning report",
                        "to": null,
                        "toString": "Write planning report"
                    }
                ]
            },
            {
                "id": "10111",
                "author": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
                    "name": "martin.w.greer",
                    "key": "martin.w.greer",
                    "emailAddress": "martin.w.greer@gmail.com",
                    "avatarUrls": {
                        "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                        "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                        "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                        "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
                    },
                    "displayName": "Martin Greer",
                    "active": true,
                    "timeZone": "Europe/Berlin"
                },
                "created": "2015-09-09T16:35:12.918+0200",
                "items": [
                    {
                        "field": "status",
                        "fieldtype": "jira",
                        "from": "10005",
                        "fromString": "Under Review",
                        "to": "10009",
                        "toString": "Accept"
                    }
                ]
            }
        ]
    }
};

var apiIssueWithoutHistory =
{
    "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
    "id": "10303",
    "self": "https://kanalyzer.atlassian.net/rest/api/2/issue/10303",
    "key": "KTD-33",
    "fields": {
        "issuetype": {
            "self": "https://kanalyzer.atlassian.net/rest/api/2/issuetype/10000",
            "id": "10000",
            "description": "A task that needs to be done.",
            "iconUrl": "https://kanalyzer.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10500&avatarType=issuetype",
            "name": "Task",
            "subtask": false,
            "avatarId": 10500
        },
        "timespent": null,
        "project": {
            "self": "https://kanalyzer.atlassian.net/rest/api/2/project/10000",
            "id": "10000",
            "key": "KTD",
            "name": "Kanalyzer Test Data",
            "avatarUrls": {
                "48x48": "https://kanalyzer.atlassian.net/secure/projectavatar?pid=10000&avatarId=10325",
                "24x24": "https://kanalyzer.atlassian.net/secure/projectavatar?size=small&pid=10000&avatarId=10325",
                "16x16": "https://kanalyzer.atlassian.net/secure/projectavatar?size=xsmall&pid=10000&avatarId=10325",
                "32x32": "https://kanalyzer.atlassian.net/secure/projectavatar?size=medium&pid=10000&avatarId=10325"
            }
        },
        "fixVersions": [

        ],
        "aggregatetimespent": null,
        "resolution": null,
        "resolutiondate": null,
        "workratio": -1,
        "lastViewed": "2015-09-22T10:39:28.402+0200",
        "watches": {
            "self": "https://kanalyzer.atlassian.net/rest/api/2/issue/KTD-33/watchers",
            "watchCount": 1,
            "isWatching": true
        },
        "created": "2015-09-22T10:39:28.000+0200",
        "customfield_10020": null,
        "customfield_10021": null,
        "customfield_10022": null,
        "priority": {
            "self": "https://kanalyzer.atlassian.net/rest/api/2/priority/3",
            "iconUrl": "https://kanalyzer.atlassian.net/images/icons/priorities/medium.svg",
            "name": "Medium",
            "id": "3"
        },
        "customfield_10023": "Not Started",
        "customfield_10024": null,
        "labels": [

        ],
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "timeestimate": null,
        "aggregatetimeoriginalestimate": null,
        "versions": [

        ],
        "issuelinks": [

        ],
        "assignee": null,
        "updated": "2015-09-22T10:39:28.000+0200",
        "status": {
            "self": "https://kanalyzer.atlassian.net/rest/api/2/status/10000",
            "description": "",
            "iconUrl": "https://kanalyzer.atlassian.net/images/icons/statuses/open.png",
            "name": "To Do",
            "id": "10000",
            "statusCategory": {
                "self": "https://kanalyzer.atlassian.net/rest/api/2/statuscategory/2",
                "id": 2,
                "key": "new",
                "colorName": "blue-gray",
                "name": "To Do"
            }
        },
        "components": [

        ],
        "timeoriginalestimate": null,
        "description": null,
        "customfield_10012": "0|i0007b:",
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_10007": null,
        "customfield_10009": null,
        "aggregatetimeestimate": null,
        "summary": "Testing testing",
        "creator": {
            "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
            "name": "martin.w.greer",
            "key": "martin.w.greer",
            "emailAddress": "martin.w.greer@gmail.com",
            "avatarUrls": {
                "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
            },
            "displayName": "Martin Greer",
            "active": true,
            "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
            "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
            "name": "martin.w.greer",
            "key": "martin.w.greer",
            "emailAddress": "martin.w.greer@gmail.com",
            "avatarUrls": {
                "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
            },
            "displayName": "Martin Greer",
            "active": true,
            "timeZone": "Europe/Berlin"
        },
        "customfield_10000": null,
        "aggregateprogress": {
            "progress": 0,
            "total": 0
        },
        "customfield_10001": null,
        "customfield_10002": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "environment": null,
        "duedate": null,
        "progress": {
            "progress": 0,
            "total": 0
        },
        "votes": {
            "self": "https://kanalyzer.atlassian.net/rest/api/2/issue/KTD-33/votes",
            "votes": 0,
            "hasVoted": false
        }
    },
    "changelog": {
        "startAt": 0,
        "maxResults": 0,
        "total": 0,
        "histories": [

        ]
    }
};

var apiIssueIsDone =
{
    "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
    "id": "10006",
    "self": "https://kanalyzer.atlassian.net/rest/api/2/issue/10006",
    "key": "KTD-7",
    "fields": {
        "issuetype": {
            "self": "https://kanalyzer.atlassian.net/rest/api/2/issuetype/10001",
            "id": "10001",
            "description": "The sub-task of the issue",
            "iconUrl": "https://kanalyzer.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10501&avatarType=issuetype",
            "name": "Sub-task",
            "subtask": true,
            "avatarId": 10501
        },
        "parent": {
            "id": "10109",
            "key": "KTD-19",
            "self": "https://kanalyzer.atlassian.net/rest/api/2/issue/10109",
            "fields": {
                "summary": "As a user, I want to download data from my JIRA project to the app",
                "status": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/status/10001",
                    "description": "",
                    "iconUrl": "https://kanalyzer.atlassian.net/images/icons/statuses/closed.png",
                    "name": "Done",
                    "id": "10001",
                    "statusCategory": {
                        "self": "https://kanalyzer.atlassian.net/rest/api/2/statuscategory/3",
                        "id": 3,
                        "key": "done",
                        "colorName": "green",
                        "name": "Done"
                    }
                },
                "priority": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/priority/3",
                    "iconUrl": "https://kanalyzer.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "issuetype": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/issuetype/10003",
                    "id": "10003",
                    "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
                    "iconUrl": "https://kanalyzer.atlassian.net/images/icons/issuetypes/story.png",
                    "name": "Story",
                    "subtask": false
                }
            }
        },
        "timespent": null,
        "project": {
            "self": "https://kanalyzer.atlassian.net/rest/api/2/project/10000",
            "id": "10000",
            "key": "KTD",
            "name": "Kanalyzer Test Data",
            "avatarUrls": {
                "48x48": "https://kanalyzer.atlassian.net/secure/projectavatar?pid=10000&avatarId=10325",
                "24x24": "https://kanalyzer.atlassian.net/secure/projectavatar?size=small&pid=10000&avatarId=10325",
                "16x16": "https://kanalyzer.atlassian.net/secure/projectavatar?size=xsmall&pid=10000&avatarId=10325",
                "32x32": "https://kanalyzer.atlassian.net/secure/projectavatar?size=medium&pid=10000&avatarId=10325"
            }
        },
        "fixVersions": [

        ],
        "aggregatetimespent": null,
        "resolution": {
            "self": "https://kanalyzer.atlassian.net/rest/api/2/resolution/10000",
            "id": "10000",
            "description": "Work has been completed on this issue.",
            "name": "Done"
        },
        "resolutiondate": "2015-09-15T11:02:23.000+0200",
        "workratio": -1,
        "lastViewed": "2015-09-30T13:28:49.873+0200",
        "watches": {
            "self": "https://kanalyzer.atlassian.net/rest/api/2/issue/KTD-7/watchers",
            "watchCount": 1,
            "isWatching": true
        },
        "created": "2015-09-02T11:11:30.000+0200",
        "customfield_10020": null,
        "customfield_10021": null,
        "customfield_10022": null,
        "priority": {
            "self": "https://kanalyzer.atlassian.net/rest/api/2/priority/3",
            "iconUrl": "https://kanalyzer.atlassian.net/images/icons/priorities/medium.svg",
            "name": "Medium",
            "id": "3"
        },
        "customfield_10023": "Not started",
        "customfield_10024": null,
        "labels": [

        ],
        "customfield_10016": null,
        "customfield_10017": null,
        "customfield_10018": null,
        "customfield_10019": null,
        "timeestimate": null,
        "aggregatetimeoriginalestimate": null,
        "versions": [

        ],
        "issuelinks": [

        ],
        "assignee": {
            "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
            "name": "martin.w.greer",
            "key": "martin.w.greer",
            "emailAddress": "martin.w.greer@gmail.com",
            "avatarUrls": {
                "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
            },
            "displayName": "Martin Greer",
            "active": true,
            "timeZone": "Europe/Berlin"
        },
        "updated": "2015-09-15T11:02:23.000+0200",
        "status": {
            "self": "https://kanalyzer.atlassian.net/rest/api/2/status/10001",
            "description": "",
            "iconUrl": "https://kanalyzer.atlassian.net/images/icons/statuses/closed.png",
            "name": "Done",
            "id": "10001",
            "statusCategory": {
                "self": "https://kanalyzer.atlassian.net/rest/api/2/statuscategory/3",
                "id": 3,
                "key": "done",
                "colorName": "green",
                "name": "Done"
            }
        },
        "components": [

        ],
        "timeoriginalestimate": null,
        "description": null,
        "customfield_10012": "0|i0004f:",
        "customfield_10013": null,
        "customfield_10014": null,
        "customfield_10015": null,
        "customfield_10007": null,
        "customfield_10009": null,
        "aggregatetimeestimate": null,
        "summary": "Download data to app via API",
        "creator": {
            "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
            "name": "martin.w.greer",
            "key": "martin.w.greer",
            "emailAddress": "martin.w.greer@gmail.com",
            "avatarUrls": {
                "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
            },
            "displayName": "Martin Greer",
            "active": true,
            "timeZone": "Europe/Berlin"
        },
        "subtasks": [

        ],
        "reporter": {
            "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
            "name": "martin.w.greer",
            "key": "martin.w.greer",
            "emailAddress": "martin.w.greer@gmail.com",
            "avatarUrls": {
                "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
            },
            "displayName": "Martin Greer",
            "active": true,
            "timeZone": "Europe/Berlin"
        },
        "customfield_10000": null,
        "aggregateprogress": {
            "progress": 0,
            "total": 0
        },
        "customfield_10001": "10000_*:*_1_*:*_364349_*|*_10010_*:*_1_*:*_1057415515_*|*_10012_*:*_1_*:*_64843615_*|*_10001_*:*_1_*:*_0_*|*_10004_*:*_1_*:*_29386",
        "customfield_10002": null,
        "customfield_10003": null,
        "customfield_10004": null,
        "environment": null,
        "duedate": null,
        "progress": {
            "progress": 0,
            "total": 0
        },
        "votes": {
            "self": "https://kanalyzer.atlassian.net/rest/api/2/issue/KTD-7/votes",
            "votes": 0,
            "hasVoted": false
        }
    },
    "changelog": {
        "startAt": 0,
        "maxResults": 8,
        "total": 8,
        "histories": [
            {
                "id": "10011",
                "author": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
                    "name": "martin.w.greer",
                    "key": "martin.w.greer",
                    "emailAddress": "martin.w.greer@gmail.com",
                    "avatarUrls": {
                        "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                        "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                        "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                        "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
                    },
                    "displayName": "Martin Greer",
                    "active": true,
                    "timeZone": "Europe/Berlin"
                },
                "created": "2015-09-02T11:12:10.736+0200",
                "items": [
                    {
                        "field": "assignee",
                        "fieldtype": "jira",
                        "from": null,
                        "fromString": null,
                        "to": "martin.w.greer",
                        "toString": "Martin Greer"
                    }
                ]
            },
            {
                "id": "10017",
                "author": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
                    "name": "martin.w.greer",
                    "key": "martin.w.greer",
                    "emailAddress": "martin.w.greer@gmail.com",
                    "avatarUrls": {
                        "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                        "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                        "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                        "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
                    },
                    "displayName": "Martin Greer",
                    "active": true,
                    "timeZone": "Europe/Berlin"
                },
                "created": "2015-09-02T11:17:34.765+0200",
                "items": [
                    {
                        "field": "status",
                        "fieldtype": "jira",
                        "from": "10000",
                        "fromString": "To Do",
                        "to": "10010",
                        "toString": "Refine Backlog"
                    }
                ]
            },
            {
                "id": "10116",
                "author": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
                    "name": "martin.w.greer",
                    "key": "martin.w.greer",
                    "emailAddress": "martin.w.greer@gmail.com",
                    "avatarUrls": {
                        "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                        "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                        "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                        "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
                    },
                    "displayName": "Martin Greer",
                    "active": true,
                    "timeZone": "Europe/Berlin"
                },
                "created": "2015-09-10T10:13:15.061+0200",
                "items": [
                    {
                        "field": "summary",
                        "fieldtype": "jira",
                        "from": null,
                        "fromString": "Use JIRA-data in CFD",
                        "to": null,
                        "toString": "Download data to app via API"
                    }
                ]
            },
            {
                "id": "10139",
                "author": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
                    "name": "martin.w.greer",
                    "key": "martin.w.greer",
                    "emailAddress": "martin.w.greer@gmail.com",
                    "avatarUrls": {
                        "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                        "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                        "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                        "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
                    },
                    "displayName": "Martin Greer",
                    "active": true,
                    "timeZone": "Europe/Berlin"
                },
                "created": "2015-09-11T14:13:13.731+0200",
                "items": [
                    {
                        "field": "Parent Issue",
                        "fieldtype": "custom",
                        "from": "KTD-4",
                        "fromString": "KTD-4",
                        "to": "KTD-19",
                        "toString": "KTD-19"
                    }
                ]
            },
            {
                "id": "10144",
                "author": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
                    "name": "martin.w.greer",
                    "key": "martin.w.greer",
                    "emailAddress": "martin.w.greer@gmail.com",
                    "avatarUrls": {
                        "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                        "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                        "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                        "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
                    },
                    "displayName": "Martin Greer",
                    "active": true,
                    "timeZone": "Europe/Berlin"
                },
                "created": "2015-09-11T14:17:23.136+0200",
                "items": [
                    {
                        "field": "Rank",
                        "fieldtype": "custom",
                        "from": "",
                        "fromString": "",
                        "to": "",
                        "toString": "Ranked lower"
                    }
                ]
            },
            {
                "id": "10204",
                "author": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
                    "name": "martin.w.greer",
                    "key": "martin.w.greer",
                    "emailAddress": "martin.w.greer@gmail.com",
                    "avatarUrls": {
                        "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                        "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                        "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                        "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
                    },
                    "displayName": "Martin Greer",
                    "active": true,
                    "timeZone": "Europe/Berlin"
                },
                "created": "2015-09-14T17:01:10.280+0200",
                "items": [
                    {
                        "field": "status",
                        "fieldtype": "jira",
                        "from": "10010",
                        "fromString": "Refine Backlog",
                        "to": "10012",
                        "toString": "Ready to Analyze"
                    }
                ]
            },
            {
                "id": "10213",
                "author": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
                    "name": "martin.w.greer",
                    "key": "martin.w.greer",
                    "emailAddress": "martin.w.greer@gmail.com",
                    "avatarUrls": {
                        "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                        "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                        "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                        "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
                    },
                    "displayName": "Martin Greer",
                    "active": true,
                    "timeZone": "Europe/Berlin"
                },
                "created": "2015-09-15T11:01:53.895+0200",
                "items": [
                    {
                        "field": "status",
                        "fieldtype": "jira",
                        "from": "10012",
                        "fromString": "Ready to Analyze",
                        "to": "10004",
                        "toString": "Develop"
                    }
                ]
            },
            {
                "id": "10214",
                "author": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
                    "name": "martin.w.greer",
                    "key": "martin.w.greer",
                    "emailAddress": "martin.w.greer@gmail.com",
                    "avatarUrls": {
                        "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                        "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                        "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                        "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
                    },
                    "displayName": "Martin Greer",
                    "active": true,
                    "timeZone": "Europe/Berlin"
                },
                "created": "2015-09-15T11:02:23.281+0200",
                "items": [
                    {
                        "field": "resolution",
                        "fieldtype": "jira",
                        "from": null,
                        "fromString": null,
                        "to": "10000",
                        "toString": "Done"
                    },
                    {
                        "field": "status",
                        "fieldtype": "jira",
                        "from": "10004",
                        "fromString": "Develop",
                        "to": "10001",
                        "toString": "Done"
                    }
                ]
            }
        ]
    }
};

var apiTwoIssues = {
    "expand": "schema,names",
    "startAt": 0,
    "maxResults": 1000,
    "total": 2,
    "issues": [
        {
            "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
            "id": "10409",
            "self": "https://kanalyzer.atlassian.net/rest/api/2/issue/10409",
            "key": "KTD-43",
            "fields": {
                "issuetype": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/issuetype/10001",
                    "id": "10001",
                    "description": "The sub-task of the issue",
                    "iconUrl": "https://kanalyzer.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10501&avatarType=issuetype",
                    "name": "Sub-task",
                    "subtask": true,
                    "avatarId": 10501
                },
                "parent": {
                    "id": "10402",
                    "key": "KTD-36",
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/issue/10402",
                    "fields": {
                        "summary": "Calculate Process Efficiency and display it on webapp",
                        "status": {
                            "self": "https://kanalyzer.atlassian.net/rest/api/2/status/10004",
                            "description": "This status is managed internally by JIRA Agile",
                            "iconUrl": "https://kanalyzer.atlassian.net/",
                            "name": "Develop",
                            "id": "10004",
                            "statusCategory": {
                                "self": "https://kanalyzer.atlassian.net/rest/api/2/statuscategory/4",
                                "id": 4,
                                "key": "indeterminate",
                                "colorName": "yellow",
                                "name": "In Progress"
                            }
                        },
                        "priority": {
                            "self": "https://kanalyzer.atlassian.net/rest/api/2/priority/3",
                            "iconUrl": "https://kanalyzer.atlassian.net/images/icons/priorities/medium.svg",
                            "name": "Medium",
                            "id": "3"
                        },
                        "issuetype": {
                            "self": "https://kanalyzer.atlassian.net/rest/api/2/issuetype/10003",
                            "id": "10003",
                            "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
                            "iconUrl": "https://kanalyzer.atlassian.net/images/icons/issuetypes/story.png",
                            "name": "Story",
                            "subtask": false
                        }
                    }
                },
                "timespent": null,
                "project": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/project/10000",
                    "id": "10000",
                    "key": "KTD",
                    "name": "Kanalyzer Test Data",
                    "avatarUrls": {
                        "48x48": "https://kanalyzer.atlassian.net/secure/projectavatar?pid=10000&avatarId=10325",
                        "24x24": "https://kanalyzer.atlassian.net/secure/projectavatar?size=small&pid=10000&avatarId=10325",
                        "16x16": "https://kanalyzer.atlassian.net/secure/projectavatar?size=xsmall&pid=10000&avatarId=10325",
                        "32x32": "https://kanalyzer.atlassian.net/secure/projectavatar?size=medium&pid=10000&avatarId=10325"
                    }
                },
                "fixVersions": [],
                "aggregatetimespent": null,
                "resolution": null,
                "resolutiondate": null,
                "workratio": -1,
                "lastViewed": "2015-10-06T10:26:09.854+0200",
                "watches": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/issue/KTD-43/watchers",
                    "watchCount": 1,
                    "isWatching": true
                },
                "created": "2015-10-06T10:25:55.000+0200",
                "customfield_10020": null,
                "customfield_10021": null,
                "customfield_10022": null,
                "priority": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/priority/3",
                    "iconUrl": "https://kanalyzer.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10023": "Not started",
                "customfield_10024": null,
                "labels": [],
                "customfield_10016": null,
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": null,
                "timeestimate": null,
                "aggregatetimeoriginalestimate": null,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
                    "name": "martin.w.greer",
                    "key": "martin.w.greer",
                    "emailAddress": "martin.w.greer@gmail.com",
                    "avatarUrls": {
                        "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                        "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                        "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                        "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
                    },
                    "displayName": "Martin Greer",
                    "active": true,
                    "timeZone": "Europe/Berlin"
                },
                "updated": "2015-10-06T10:26:09.000+0200",
                "status": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/status/10004",
                    "description": "This status is managed internally by JIRA Agile",
                    "iconUrl": "https://kanalyzer.atlassian.net/",
                    "name": "Develop",
                    "id": "10004",
                    "statusCategory": {
                        "self": "https://kanalyzer.atlassian.net/rest/api/2/statuscategory/4",
                        "id": 4,
                        "key": "indeterminate",
                        "colorName": "yellow",
                        "name": "In Progress"
                    }
                },
                "components": [],
                "timeoriginalestimate": null,
                "description": null,
                "customfield_10012": "0|i0009b:",
                "customfield_10013": null,
                "customfield_10014": null,
                "customfield_10015": null,
                "customfield_10007": null,
                "customfield_10009": null,
                "aggregatetimeestimate": null,
                "summary": "Calculate Cycle Time for many issues and display them in a table",
                "creator": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
                    "name": "martin.w.greer",
                    "key": "martin.w.greer",
                    "emailAddress": "martin.w.greer@gmail.com",
                    "avatarUrls": {
                        "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                        "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                        "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                        "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
                    },
                    "displayName": "Martin Greer",
                    "active": true,
                    "timeZone": "Europe/Berlin"
                },
                "subtasks": [],
                "reporter": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
                    "name": "martin.w.greer",
                    "key": "martin.w.greer",
                    "emailAddress": "martin.w.greer@gmail.com",
                    "avatarUrls": {
                        "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                        "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                        "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                        "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
                    },
                    "displayName": "Martin Greer",
                    "active": true,
                    "timeZone": "Europe/Berlin"
                },
                "customfield_10000": null,
                "aggregateprogress": {
                    "progress": 0,
                    "total": 0
                },
                "customfield_10001": null,
                "customfield_10002": null,
                "customfield_10003": null,
                "customfield_10004": null,
                "environment": null,
                "duedate": null,
                "progress": {
                    "progress": 0,
                    "total": 0
                },
                "votes": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/issue/KTD-43/votes",
                    "votes": 0,
                    "hasVoted": false
                }
            },
            "changelog": {
                "startAt": 0,
                "maxResults": 2,
                "total": 2,
                "histories": [
                    {
                        "id": "10430",
                        "author": {
                            "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
                            "name": "martin.w.greer",
                            "key": "martin.w.greer",
                            "emailAddress": "martin.w.greer@gmail.com",
                            "avatarUrls": {
                                "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                                "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                                "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                                "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
                            },
                            "displayName": "Martin Greer",
                            "active": true,
                            "timeZone": "Europe/Berlin"
                        },
                        "created": "2015-10-06T10:26:03.814+0200",
                        "items": [
                            {
                                "field": "assignee",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "martin.w.greer",
                                "toString": "Martin Greer"
                            }
                        ]
                    },
                    {
                        "id": "10431",
                        "author": {
                            "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
                            "name": "martin.w.greer",
                            "key": "martin.w.greer",
                            "emailAddress": "martin.w.greer@gmail.com",
                            "avatarUrls": {
                                "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                                "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                                "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                                "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
                            },
                            "displayName": "Martin Greer",
                            "active": true,
                            "timeZone": "Europe/Berlin"
                        },
                        "created": "2015-10-06T10:26:09.877+0200",
                        "items": [
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "10000",
                                "fromString": "To Do",
                                "to": "10004",
                                "toString": "Develop"
                            }
                        ]
                    }
                ]
            }
        },
        {
            "expand": "operations,versionedRepresentations,editmeta,changelog,transitions,renderedFields",
            "id": "10408",
            "self": "https://kanalyzer.atlassian.net/rest/api/2/issue/10408",
            "key": "KTD-42",
            "fields": {
                "issuetype": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/issuetype/10001",
                    "id": "10001",
                    "description": "The sub-task of the issue",
                    "iconUrl": "https://kanalyzer.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10501&avatarType=issuetype",
                    "name": "Sub-task",
                    "subtask": true,
                    "avatarId": 10501
                },
                "parent": {
                    "id": "10402",
                    "key": "KTD-36",
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/issue/10402",
                    "fields": {
                        "summary": "Calculate Process Efficiency and display it on webapp",
                        "status": {
                            "self": "https://kanalyzer.atlassian.net/rest/api/2/status/10004",
                            "description": "This status is managed internally by JIRA Agile",
                            "iconUrl": "https://kanalyzer.atlassian.net/",
                            "name": "Develop",
                            "id": "10004",
                            "statusCategory": {
                                "self": "https://kanalyzer.atlassian.net/rest/api/2/statuscategory/4",
                                "id": 4,
                                "key": "indeterminate",
                                "colorName": "yellow",
                                "name": "In Progress"
                            }
                        },
                        "priority": {
                            "self": "https://kanalyzer.atlassian.net/rest/api/2/priority/3",
                            "iconUrl": "https://kanalyzer.atlassian.net/images/icons/priorities/medium.svg",
                            "name": "Medium",
                            "id": "3"
                        },
                        "issuetype": {
                            "self": "https://kanalyzer.atlassian.net/rest/api/2/issuetype/10003",
                            "id": "10003",
                            "description": "Created by JIRA Agile - do not edit or delete. Issue type for a user story.",
                            "iconUrl": "https://kanalyzer.atlassian.net/images/icons/issuetypes/story.png",
                            "name": "Story",
                            "subtask": false
                        }
                    }
                },
                "timespent": null,
                "project": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/project/10000",
                    "id": "10000",
                    "key": "KTD",
                    "name": "Kanalyzer Test Data",
                    "avatarUrls": {
                        "48x48": "https://kanalyzer.atlassian.net/secure/projectavatar?pid=10000&avatarId=10325",
                        "24x24": "https://kanalyzer.atlassian.net/secure/projectavatar?size=small&pid=10000&avatarId=10325",
                        "16x16": "https://kanalyzer.atlassian.net/secure/projectavatar?size=xsmall&pid=10000&avatarId=10325",
                        "32x32": "https://kanalyzer.atlassian.net/secure/projectavatar?size=medium&pid=10000&avatarId=10325"
                    }
                },
                "fixVersions": [],
                "aggregatetimespent": null,
                "resolution": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/resolution/10000",
                    "id": "10000",
                    "description": "Work has been completed on this issue.",
                    "name": "Done"
                },
                "resolutiondate": "2015-10-02T16:22:55.000+0200",
                "workratio": -1,
                "lastViewed": "2015-10-02T16:22:55.683+0200",
                "watches": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/issue/KTD-42/watchers",
                    "watchCount": 1,
                    "isWatching": true
                },
                "created": "2015-10-01T15:20:38.000+0200",
                "customfield_10020": null,
                "customfield_10021": null,
                "customfield_10022": null,
                "priority": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/priority/3",
                    "iconUrl": "https://kanalyzer.atlassian.net/images/icons/priorities/medium.svg",
                    "name": "Medium",
                    "id": "3"
                },
                "customfield_10023": "Not started",
                "customfield_10024": null,
                "labels": [],
                "customfield_10016": null,
                "customfield_10017": null,
                "customfield_10018": null,
                "customfield_10019": null,
                "timeestimate": null,
                "aggregatetimeoriginalestimate": null,
                "versions": [],
                "issuelinks": [],
                "assignee": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
                    "name": "martin.w.greer",
                    "key": "martin.w.greer",
                    "emailAddress": "martin.w.greer@gmail.com",
                    "avatarUrls": {
                        "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                        "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                        "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                        "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
                    },
                    "displayName": "Martin Greer",
                    "active": true,
                    "timeZone": "Europe/Berlin"
                },
                "updated": "2015-10-02T16:22:55.000+0200",
                "status": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/status/10001",
                    "description": "",
                    "iconUrl": "https://kanalyzer.atlassian.net/images/icons/statuses/closed.png",
                    "name": "Done",
                    "id": "10001",
                    "statusCategory": {
                        "self": "https://kanalyzer.atlassian.net/rest/api/2/statuscategory/3",
                        "id": 3,
                        "key": "done",
                        "colorName": "green",
                        "name": "Done"
                    }
                },
                "components": [],
                "timeoriginalestimate": null,
                "description": null,
                "customfield_10012": "0|i00093:",
                "customfield_10013": null,
                "customfield_10014": null,
                "customfield_10015": null,
                "customfield_10007": null,
                "customfield_10009": null,
                "aggregatetimeestimate": null,
                "summary": "Display Cycle Time result in PE tab",
                "creator": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
                    "name": "martin.w.greer",
                    "key": "martin.w.greer",
                    "emailAddress": "martin.w.greer@gmail.com",
                    "avatarUrls": {
                        "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                        "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                        "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                        "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
                    },
                    "displayName": "Martin Greer",
                    "active": true,
                    "timeZone": "Europe/Berlin"
                },
                "subtasks": [],
                "reporter": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
                    "name": "martin.w.greer",
                    "key": "martin.w.greer",
                    "emailAddress": "martin.w.greer@gmail.com",
                    "avatarUrls": {
                        "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                        "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                        "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                        "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
                    },
                    "displayName": "Martin Greer",
                    "active": true,
                    "timeZone": "Europe/Berlin"
                },
                "customfield_10000": null,
                "aggregateprogress": {
                    "progress": 0,
                    "total": 0
                },
                "customfield_10001": "10000_*:*_1_*:*_4621_*|*_10001_*:*_1_*:*_0_*|*_10004_*:*_1_*:*_90132361",
                "customfield_10002": null,
                "customfield_10003": null,
                "customfield_10004": null,
                "environment": null,
                "duedate": null,
                "progress": {
                    "progress": 0,
                    "total": 0
                },
                "votes": {
                    "self": "https://kanalyzer.atlassian.net/rest/api/2/issue/KTD-42/votes",
                    "votes": 0,
                    "hasVoted": false
                }
            },
            "changelog": {
                "startAt": 0,
                "maxResults": 3,
                "total": 3,
                "histories": [
                    {
                        "id": "10423",
                        "author": {
                            "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
                            "name": "martin.w.greer",
                            "key": "martin.w.greer",
                            "emailAddress": "martin.w.greer@gmail.com",
                            "avatarUrls": {
                                "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                                "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                                "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                                "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
                            },
                            "displayName": "Martin Greer",
                            "active": true,
                            "timeZone": "Europe/Berlin"
                        },
                        "created": "2015-10-01T15:20:43.344+0200",
                        "items": [
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "10000",
                                "fromString": "To Do",
                                "to": "10004",
                                "toString": "Develop"
                            }
                        ]
                    },
                    {
                        "id": "10424",
                        "author": {
                            "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
                            "name": "martin.w.greer",
                            "key": "martin.w.greer",
                            "emailAddress": "martin.w.greer@gmail.com",
                            "avatarUrls": {
                                "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                                "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                                "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                                "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
                            },
                            "displayName": "Martin Greer",
                            "active": true,
                            "timeZone": "Europe/Berlin"
                        },
                        "created": "2015-10-01T15:21:02.798+0200",
                        "items": [
                            {
                                "field": "assignee",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "martin.w.greer",
                                "toString": "Martin Greer"
                            }
                        ]
                    },
                    {
                        "id": "10429",
                        "author": {
                            "self": "https://kanalyzer.atlassian.net/rest/api/2/user?username=martin.w.greer",
                            "name": "martin.w.greer",
                            "key": "martin.w.greer",
                            "emailAddress": "martin.w.greer@gmail.com",
                            "avatarUrls": {
                                "48x48": "https://kanalyzer.atlassian.net/secure/useravatar?avatarId=10346",
                                "24x24": "https://kanalyzer.atlassian.net/secure/useravatar?size=small&avatarId=10346",
                                "16x16": "https://kanalyzer.atlassian.net/secure/useravatar?size=xsmall&avatarId=10346",
                                "32x32": "https://kanalyzer.atlassian.net/secure/useravatar?size=medium&avatarId=10346"
                            },
                            "displayName": "Martin Greer",
                            "active": true,
                            "timeZone": "Europe/Berlin"
                        },
                        "created": "2015-10-02T16:22:55.705+0200",
                        "items": [
                            {
                                "field": "resolution",
                                "fieldtype": "jira",
                                "from": null,
                                "fromString": null,
                                "to": "10000",
                                "toString": "Done"
                            },
                            {
                                "field": "status",
                                "fieldtype": "jira",
                                "from": "10004",
                                "fromString": "Develop",
                                "to": "10001",
                                "toString": "Done"
                            }
                        ]
                    }
                ]
            }
        }
    ]
};

var twoDoneIssues = [
    {
        "id": "11932",
        "key": "KTD-60",
        "summary": "Create separate functions for localStorage get/set.",
        "created": "2015-10-24T10:15:49",
        "currentStatus": {
            "id": "10001",
            "name": "Done"
        },
        "columnHistory": [
            {
                "columnName": "Ready to Refine",
                "enterTime": "2015-10-24T10:15:49",
                "exitTime": "2015-10-24T10:16:05"
            },
            {
                "columnName": "Refine Backlog",
                "enterTime": "2015-10-24T10:16:05",
                "exitTime": "2015-10-24T10:16:32"
            },
            {
                "columnName": "Ready for Development",
                "enterTime": "2015-10-24T10:16:32",
                "exitTime": "2015-10-24T11:06:38"
            },
            {
                "columnName": "In Progress",
                "enterTime": "2015-10-24T11:06:38",
                "exitTime": "2015-10-24T11:31:37"
            },
            {
                "columnName": "Ready for Test",
                "enterTime": "2015-10-24T11:31:37",
                "exitTime": "2015-10-24T13:34:07"
            },
            {
                "columnName": "Accept",
                "enterTime": "2015-10-24T13:34:07",
                "exitTime": "2015-10-24T13:52:38"
            },
            {
                "columnName": "Ready for Release",
                "enterTime": "2015-10-24T13:52:38",
                "exitTime": "2015-10-24T15:56:07"
            }
        ],
        "cycleTime": 12966000,
        "executionTime": 2610000,
        "delayTime": 10356000,
        "processEfficiency": 0.2012956964368348
    },
    {
        "id": "11931",
        "key": "KTD-59",
        "summary": "Split up angular code.",
        "created": "2015-10-23T10:15:24",
        "currentStatus": {
            "id": "10001",
            "name": "Done"
        },
        "columnHistory": [
            {
                "columnName": "Ready to Refine",
                "enterTime": "2015-10-23T10:15:24",
                "exitTime": "2015-10-23T10:16:02"
            },
            {
                "columnName": "Refine Backlog",
                "enterTime": "2015-10-23T10:16:02",
                "exitTime": "2015-10-23T10:16:29"
            },
            {
                "columnName": "In Progress",
                "enterTime": "2015-10-23T10:16:29",
                "exitTime": "2015-10-23T10:47:27"
            },
            {
                "columnName": "Ready for Development",
                "enterTime": "2015-10-23T10:47:27",
                "exitTime": "2015-10-23T11:06:17"
            },
            {
                "columnName": "Ready to Accept",
                "enterTime": "2015-10-23T11:06:17",
                "exitTime": "2015-10-23T11:31:31"
            },
            {
                "columnName": "Ready for Release",
                "enterTime": "2015-10-23T11:31:31",
                "exitTime": "2015-10-23T15:56:07"
            }
        ],
        "cycleTime": 4502000,
        "executionTime": 1858000,
        "delayTime": 2644000,
        "processEfficiency": 0.4127054642381164
    }
];
