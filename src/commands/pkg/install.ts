import {Command, flags} from '@oclif/command'
import * as FormData from 'form-data'
import * as fs from 'fs'
import * as http from 'http'
import * as notifier from 'node-notifier'

import * as MESSAGES from '../../lib/messages'
import * as write from '../../lib/write'

export default class PkgInstall extends Command {
  static description = 'Uploads & Installs an AEM package. Default: localhost:4502'
  static args = [
    {name: 'package'},
    {name: 'url'},
  ]

  static examples = [
    `# upload & install to local AEM author instance (Default: http://localhost:4502)
$ aem pkg:install we.retail.all-3.0.0.zip

# upload & install to local AEM publish instance
$ aem pkg:install we.retail.all-3.0.0.zip http://localhost:4503

# upload & install to remote AEM author instance running in the Azure Cloud
$ aem pkg:install we.retail.all-3.0.0.zip https://weretail-author-westeurope.cloudapp.azure.com:4503

# upload & install to remote AEM publish instance running in on Amazon EC2
$ aem pkg:install we.retail.all-3.0.0.zip https://ec2-52-204-122-132.compute-1.amazonaws.com:4503
`,
  ]

  static flags = {
    help: flags.help({char: 'h'})
  }

  async run() {
    const {args} = this.parse(PkgInstall)
    let url = args.url || 'localhost:4502'
    let pkg = args.package

    if (args.package) {
      write.info(`installing ${args.package} to '${url}'`)
      let form = new FormData()

      form.append('file', fs.createReadStream(pkg))
      form.append('install', 'true')

      let hostname
      let port
      if (url.indexOf(':') > -1) {
        let host_and_port = url.split(':')
        hostname = `${host_and_port[0]}`
        port = host_and_port[1]
      }

      const options = {
        auth: 'admin:admin',
        hostname,
        port,
        path: '/crx/packmgr/service.jsp',
        method: 'POST',
        headers: form.getHeaders(),
        name: 'core.wcm.components.all',
      }

      let query = http.request(options, (res: any) => {
        let data = ''
        res.on('data', (chunk: any) => {
          data += chunk.toString('utf8')
        })
        res.on('end', () => {
          write.success(data)
          notifier.notify({
            title: 'SUCCESS',
            message: `${args.package} installed on ${url}`
          })
        })
      })

      query.on('error', (e: any) => {
        switch (e.errno) {
        case 'ECONNREFUSED':
          write.error(MESSAGES.CONNECTION_REFUSED(url))
          break
        case 'EISDIR':
          write.error(`This is a directory. Is this really a package '${args.package}'?`)
          break
        default:
          write.error(e)
        }
      })

      form.pipe(query)

    } else {
      this.log('aemninja pkg:install [PACKAGE] [URL]')
    }
  }
}
