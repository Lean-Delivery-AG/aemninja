aemninja
===

The aemninja CLI let&#39;s you deploy Adobe Experience Manager packages in a very pleasant way.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/aemninja.svg)](https://npmjs.org/package/aemninja)
[![CircleCI](https://circleci.com/gh/sfawaz/aemninja/tree/master.svg?style=shield)](https://circleci.com/gh/sfawaz/aemninja/tree/master)
[![Codecov](https://codecov.io/gh/sfawaz/aemninja/branch/master/graph/badge.svg)](https://codecov.io/gh/sfawaz/aemninja)
[![Downloads/week](https://img.shields.io/npm/dw/aemninja.svg)](https://npmjs.org/package/aemninja)
[![License](https://img.shields.io/npm/l/aemninja.svg)](https://github.com/sfawaz/aemninja/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g aemninja
$ aemninja COMMAND
running command...
$ aemninja (-v|--version|version)
aemninja/0.0.0 darwin-x64 node-v10.12.0
$ aemninja --help [COMMAND]
USAGE
  $ aemninja COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`aemninja deploy [PACKAGE] [URL]`](#aemninja-deploy-package-url)
* [`aemninja help [COMMAND]`](#aemninja-help-command)
* [`aemninja pkg:install [FILE]`](#aemninja-pkginstall-file)
* [`aemninja pkg:list [FILE]`](#aemninja-pkglist-file)
* [`aemninja pkg:uninstall [FILE]`](#aemninja-pkguninstall-file)
* [`aemninja pkg:upload [PACKAGE] [URL]`](#aemninja-pkgupload-package-url)

## `aemninja deploy [PACKAGE] [URL]`

Deploys an AEM package

```
USAGE
  $ aemninja deploy [PACKAGE] [URL]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ aem deploy we.retail.all-3.0.0.zip
  'we.retail.all-3.0.0.zip' has been installed on 'localhost'
```

_See code: [src/commands/deploy.ts](https://github.com/sfawaz/aemninja/blob/v0.0.0/src/commands/deploy.ts)_

## `aemninja help [COMMAND]`

display help for aemninja

```
USAGE
  $ aemninja help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.2/src/commands/help.ts)_

## `aemninja pkg:install [FILE]`

describe the command here

```
USAGE
  $ aemninja pkg:install [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/pkg/install.ts](https://github.com/sfawaz/aemninja/blob/v0.0.0/src/commands/pkg/install.ts)_

## `aemninja pkg:list [FILE]`

describe the command here

```
USAGE
  $ aemninja pkg:list [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/pkg/list.ts](https://github.com/sfawaz/aemninja/blob/v0.0.0/src/commands/pkg/list.ts)_

## `aemninja pkg:uninstall [FILE]`

describe the command here

```
USAGE
  $ aemninja pkg:uninstall [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/pkg/uninstall.ts](https://github.com/sfawaz/aemninja/blob/v0.0.0/src/commands/pkg/uninstall.ts)_

## `aemninja pkg:upload [PACKAGE] [URL]`

Deploys an AEM package

```
USAGE
  $ aemninja pkg:upload [PACKAGE] [URL]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ aem deploy we.retail.all-3.0.0.zip
  'we.retail.all-3.0.0.zip' has been installed on 'localhost'
```

_See code: [src/commands/pkg/upload.ts](https://github.com/sfawaz/aemninja/blob/v0.0.0/src/commands/pkg/upload.ts)_
<!-- commandsstop -->
