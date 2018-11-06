import {Command, flags} from '@oclif/command'
import * as FormData from 'form-data'
import * as fs from 'fs'
import * as http from 'http'

import * as write from '../lib/write'

export default class Deploy extends Command {
  static description = 'deploy AEM package to a server'
  static args = [
    {name: 'package'},
    {name: 'url'},
  ]

  static examples = [
    `$ aem deploy we.retail.all-3.0.0.zip
'we.retail.all-3.0.0.zip' has been installed on 'localhost'
`,
  ]

  static flags = {
    help: flags.help({char: 'h'})
  }

  async run() {
    const {args} = this.parse(Deploy)
    let url = args.url || 'localhost:4502'
    let pkg = args.package

    if (args.package) {
      this.log(`installing ${args.package} on ${url}`)

      // Upload a package withouth installing
      let form = new FormData()

      form.append('file', fs.createReadStream(pkg))

      let hostname
      let port
      if (url.indexOf(':') > -1) {
        let host_and_port = url.split(':')
        hostname = `${host_and_port[0]}`
        port = host_and_port[1]
      }

      let query = http.request({
        auth: 'admin:admin',
        hostname,
        port,
        path: '/crx/packmgr/service.jsp',
        method: 'POST',
        headers: form.getHeaders()
      }, res => {
        let data = ''
        res.on('data', chunk => {
          data += chunk.toString('utf8')
        })
        res.on('end', () => {
          write.success(data)
        })
      })

      query.on('error', (e: any) => {
        write.error(e)
      })

      form.pipe(query)

    } else {
      this.log(`aemninja deploy ${write.underline('package')} [url]`)
    }
  }
}
