import {Command, flags} from '@oclif/command'

export default class PkgList extends Command {
  static description = 'List all AEM packages'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(PkgList)

    const name = flags.name || 'world'
    this.log(`hello ${name} from /Users/sf/Development/aemninja/src/commands/pkg/list.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}