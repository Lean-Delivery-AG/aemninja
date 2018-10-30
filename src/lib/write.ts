import chalk from 'chalk'
import * as signale from 'signale'

export function info(message: string) {
  signale.info(chalk.blue(message))
}

export function success(message: string) {
  signale.success(chalk.green(message))
}

export function error(message: string) {
  signale.error(chalk.red(message))
}

export function underline(message: string) {
  return chalk.underline(message)
}
