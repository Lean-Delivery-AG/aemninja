const signale = require('signale')
const chalk = require('chalk')

export default class Out {
  static info(message:string) {
    signale.info(chalk.blue(message))
  }

  static success(message:string) {
    signale.success(chalk.green(message))
  }

  static error(message:string) {
    signale.error(chalk.red(message))
  }

  static underline(message:string){
    return chalk.underline(message)
  }
}