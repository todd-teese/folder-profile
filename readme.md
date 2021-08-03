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

<!-- tocstop -->
<!-- install -->

## Providing an easier way to manage profile changes through source control
A simple sfdx script to streamline the process of profile creation making use of folder structure, CSV and JSON files.

- The script takes a source folder with named subfolders. 
- These subfolders will be the the names of the created Profiles.
- CSV names provide the attribute type name + CSV data provides values.
- JSON is used for single attribute tags. i.e 'custom'

```
Profiles [SOURCE]
|---Admin
|   |   fieldPermission.csv
|   |   objectPermission.csv
|---Sales User
|   |   fieldPermission.csv
|   |   objectPermission.csv
|   |   layoutAssignment.csv
|---Marketing User
|   |   fieldPermission.csv
|   |   objectPermission.csv
|   |   otherAttributes.json
```

Transforms to

```
ProfilesOutput [TARGET]
|   Admin.profile-meta.xml
|   Sales User.profile-meta.xml
|   Marketing User.profile-meta.xml
```

## Warning
- Currently SOURCE and TARGET should both be absolute paths due to the early nature of this project.

<!-- usage -->
```sh-session
$ npm install -g folder-profile
$ sfdx COMMAND
running command...
$ sfdx (-v|--version|version)
folder-profile/0.0.10 win32-x64 node-v14.17.0
$ sfdx --help [COMMAND]
USAGE
  $ sfdx COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g folder-profile
$ sfdx COMMAND
running command...
$ sfdx (-v|--version|version)
folder-profile/0.0.5 win32-x64 node-v14.17.0
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

_See code: [lib/commands/folder/profile.js](https://github.com/ToddTeese/folder-profile/blob/v0.0.10/lib/commands/folder/profile.js)_
<!-- commandsstop -->
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

_See code: [lib/commands/folder/profile.js](https://github.com/ToddTeese/folder-profile/blob/v0.0.5/lib/commands/folder/profile.js)_
<!-- commandsstop -->
