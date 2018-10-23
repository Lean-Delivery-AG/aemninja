import {Command, flags} from '@oclif/command'

export default class PkgUninstall extends Command {
  static description = 'Uninstall an AEM package. Default: localhost:4502'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(PkgUninstall)

    const name = flags.name || 'world'
    this.log(`hello ${name} from /Users/sf/Development/aemninja/src/commands/pkg/uninstall.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
