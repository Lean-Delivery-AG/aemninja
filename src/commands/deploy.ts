import {Command, flags} from '@oclif/command'
import {COMMAND_OUTPUT_PREFIX_SUCCESS} from '../variables'

export default class Deploy extends Command {
  static description = 'Deploys an AEM package'
  static args = [
    {name: 'package'},
    {name: 'host'},
  ]

  static examples = [
    `$ aem deploy we.retail.all-3.0.0.zip
${COMMAND_OUTPUT_PREFIX_SUCCESS} 'we.retail.all-3.0.0.zip' has been installed on 'localhost'
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}), 
  }

  async run() {
    const {args, flags} = this.parse(Deploy)

    this.log(`${COMMAND_OUTPUT_PREFIX_SUCCESS} ${args.package} has been installed on ${args.host}`)
  }
}