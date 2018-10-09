aem
===

The aem CLI let&#39;s you deploy Adobe Experience Manager packages in a very pleasant way.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/aem.svg)](https://npmjs.org/package/aem)
[![CircleCI](https://circleci.com/gh/sfawaz/aem/tree/master.svg?style=shield)](https://circleci.com/gh/sfawaz/aem/tree/master)
[![Codecov](https://codecov.io/gh/sfawaz/aem/branch/master/graph/badge.svg)](https://codecov.io/gh/sfawaz/aem)
[![Downloads/week](https://img.shields.io/npm/dw/aem.svg)](https://npmjs.org/package/aem)
[![License](https://img.shields.io/npm/l/aem.svg)](https://github.com/sfawaz/aem/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g aem
$ aem COMMAND
running command...
$ aem (-v|--version|version)
aem/0.0.0 darwin-x64 node-v10.10.0
$ aem --help [COMMAND]
USAGE
  $ aem COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`aem deploy [PACKAGE] [HOST]`](#aem-deploy-package-host)
* [`aem help [COMMAND]`](#aem-help-command)

## `aem deploy [PACKAGE] [HOST]`

Deploys an AEM package

```
USAGE
  $ aem deploy [PACKAGE] [HOST]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ aem deploy we.retail.all-3.0.0.zip
  SUCCESS | 'we.retail.all-3.0.0.zip' has been installed on 'localhost'
```

_See code: [src/commands/deploy.ts](https://github.com/sfawaz/aem/blob/v0.0.0/src/commands/deploy.ts)_

## `aem help [COMMAND]`

display help for aem

```
USAGE
  $ aem help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.2/src/commands/help.ts)_
<!-- commandsstop -->
