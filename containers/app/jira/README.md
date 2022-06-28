# JIRA

A CORS server (implemented with ExpressJS) to facilitate Jira API calls cross-domain.

Based on "Let’s Dockerize a Nodejs Express API" at https://itnext.io/lets-dockerize-a-nodejs-express-api-22700b4105e4

Based on "React CORS Guide: What It Is and How to Enable It" at https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it/

## Jira Server (not Cloud) REST API

For documentation on Jira REST API see below resources:

- https://developer.atlassian.com/server/jira/platform/jira-rest-api-examples/

NOTE: If your Jira Server version is 8.4 or later, look for 8.4 and later !!

**Examples**:

You can get a list of all the projects from the following endpoint (replace HOST by Jira fully qualified domain name, replace PORT by host port):

```
http://HOST:PORT/rest/api/2/project
```

## Basic Authentication

Example of getting all projects from Jira with a CURL command (replace JIRA_USERNAME by username for Jira and JIRA_PASSWORD by password of user for Jira, also known as Basic Authentication):

```
$ curl -D- -u JIRA_USERNAME:JIRA_PASSWORD -X GET -H "Content-Type: application/json" https://my-jira.my-company.com/rest/api/2/project   
```

Output

```
HTTP/1.1 200 
X-AREQUESTID: 828x8685051x7
X-ANODEID: xxxxxx
Referrer-Policy: strict-origin-when-cross-origin
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Content-Security-Policy: sandbox
Strict-Transport-Security: max-age=31536000
Set-Cookie: JSESSIONID=#######; Path=/; Secure; HttpOnly
X-Seraph-LoginReason: OK
Set-Cookie: atlassian.xsrf.token=########; Path=/; Secure; SameSite=None
X-RateLimit-Limit: 30
X-RateLimit-Remaining: 29
X-RateLimit-FillRate: 30
X-RateLimit-Interval-Seconds: 10
Retry-After: 0
X-ASESSIONID: c8g4t8
X-AUSERNAME: ##########
Cache-Control: no-cache, no-store, no-transform
Content-Type: application/json;charset=UTF-8
Transfer-Encoding: chunked
Date: Mon, 27 Jun 2022 11:48:23 GMT
Set-Cookie: ######; path=/; Httponly; Secure

=== data goes here
```

## Authentication with API Token

See also 

First, generate the Base64Encoded Username/API Token combination, as follows (replace JIRA_API_TOKEN with Jira API Token):

```
$ powershell
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Try the new cross-platform PowerShell https://aka.ms/pscore6

PS D:\git\requirements-management\containers\app\jira> $Text = 'wheemstr:JIRA_API_TOKEN'
PS D:\git\requirements-management\containers\app\jira> $Bytes = [System.Text.Encoding]::UTF8.GetBytes($Text)
PS D:\git\requirements-management\containers\app\jira> $EncodedText = [Convert]::ToBase64String($Bytes)
PS D:\git\requirements-management\containers\app\jira> $EncodedText
d2hlZW1zdHI6Y3pWcjFaVHRzMGZTUFZBcHlxbW1CNDY234
```

Next, using CURL to connect to Jira (note, exit PowerShell first):

```
$ curl -D- -X GET -H "Authorization: Basic d2hlZW1zdHI6Y3pWcjFaVHRzMGZTUFZBcHlxbW1CNDY234" -H "Content-Type: application/json" "https://my-jira.my-company.com/rest/api/2/project"
```

Output (Note, this instance of Jira does not support Basic Authentication with API Token):

```  
HTTP/1.1 403 
X-AREQUESTID: #####
X-ANODEID: #######
Referrer-Policy: strict-origin-when-cross-origin
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Content-Security-Policy: frame-ancestors 'self'
Strict-Transport-Security: max-age=31536000
X-Seraph-LoginReason: AUTHENTICATED_FAILED
Set-Cookie: JSESSIONID=#######; Path=/; Secure; HttpOnly
WWW-Authenticate: OAuth realm="https%3A%2F%2Fmy-jira.my-company.com"
X-ASESSIONID: svj9wc
X-Authentication-Denied-Reason: CAPTCHA_CHALLENGE; login-url=https://my-jira.my-company.com/login.jsp
Content-Type: text/html;charset=UTF-8
Transfer-Encoding: chunked
Date: Mon, 27 Jun 2022 12:35:30 GMT
Set-Cookie: ########; path=/; Httponly; Secure

<html>

<head>
    <title>Forbidden (403)</title>

<!--[if IE]><![endif]-->
<script type="text/javascript">
    (function() {
        var contextPath = '';

        function printDeprecatedMsg() {
            if (console && console.warn) {
                console.warn('DEPRECATED JS - contextPath global variable has been deprecated since 7.4.0. Use `wrm/context-path` module instead.');
            }
        }

        Object.defineProperty(window, 'contextPath', {
            get: function() {
                printDeprecatedMsg();
                return contextPath;
            },
            set: function(value) {
                printDeprecatedMsg();
                contextPath = value;
            }
        });
    })();

</script>
<script>

<script type="text/javascript" src="/rest/api/1.0/shortcuts/820008/2da07b286d30a635e8db98b9c03e9b1b/shortcuts.js"></script>


    <meta name="application-name" content="JIRA" data-name="jira" data-version="8.20.8">
</head>
<body id="jira" class="aui-layout aui-style-default page-type-message " data-version="8.20.8" >

<!-- HTTPError403 -->
    <div class="aui-page-panel" ><div class="aui-page-panel-inner">
            <main role="main" id="main" class="aui-page-panel-content" >
                    <div class="aui-page-header" ><div class="aui-page-header-inner">
                            <div class="aui-page-header-main" >
                                    <h1>Forbidden (403)</h1>
                                </div>
                        </div></div>
                    <div class="aui-message aui-message-warning warning">
                            <p>Encountered a <code>&quot;403 - Forbidden&quot;</code> error while loading this page.</p>
                            <p>Basic Authentication Failure - Reason : AUTHENTICATION_DENIED</p>
                            <p><a href="/secure/MyJiraHome.jspa">Go to Jira home</a></p>
                        </div>
                </main>
        </div></div>
</body>
</html>
```
