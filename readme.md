folder-profile
==============



[![Version](https://img.shields.io/npm/v/folder-profile.svg)](https://npmjs.org/package/folder-profile)
[![CircleCI](https://circleci.com/gh/ToddTeese/folder-profile/tree/master.svg?style=shield)](https://circleci.com/gh/ToddTeese/folder-profile/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/ToddTeese/folder-profile?branch=master&svg=true)](https://ci.appveyor.com/project/heroku/folder-profile/branch/master)
[![Codecov](https://codecov.io/gh/ToddTeese/folder-profile/branch/master/graph/badge.svg)](https://codecov.io/gh/ToddTeese/folder-profile)
[![Greenkeeper](https://badges.greenkeeper.io/ToddTeese/folder-profile.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/github/ToddTeese/folder-profile/badge.svg)](https://snyk.io/test/github/ToddTeese/folder-profile)
[![Downloads/week](https://img.shields.io/npm/dw/folder-profile.svg)](https://npmjs.org/package/folder-profile)
[![License](https://img.shields.io/npm/l/folder-profile.svg)](https://github.com/ToddTeese/folder-profile/blob/master/package.json)

<!-- toc -->

<!-- tocstop -->
<!-- install -->
<!-- usage -->
```sh-session
$ npm install -g folder-profile
$ sfdx COMMAND
running command...
$ sfdx (-v|--version|version)
folder-profile/0.0.4 win32-x64 node-v14.17.0
$ sfdx --help [COMMAND]
USAGE
  $ sfdx COMMAND
...
```
<!-- usagestop -->
<!-- commands -->
* [`sfdx folder:profile -s <string> -t <string> [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-folderprofile--s-string--t-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)

## `sfdx folder:profile -s <string> -t <string> [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

Convert Folder Structure to XML

```
Convert Folder Structure to XML

USAGE
  $ sfdx folder:profile -s <string> -t <string> [--json] [--loglevel 
  trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -s, --source=source                                                               (required) Source of Profile
                                                                                    Attributes

  -t, --target=target                                                               (required) Target Folder for
                                                                                    Generated Profiles

  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation
```

_See code: [lib/commands/folder/profile.js](https://github.com/ToddTeese/folder-profile/blob/v0.0.4/lib/commands/folder/profile.js)_
<!-- commandsstop -->
