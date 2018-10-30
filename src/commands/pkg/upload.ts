import {Command, flags} from '@oclif/command'
import * as FormData from 'form-data'
import * as fs from 'fs'
import * as http from 'http'
import out from '../../lib/out'
import MESSAGES from '../../lib/messages'

import chalk from 'chalk'

export default class PkgUpload extends Command {
  static description = 'Upload an AEM package. Default: localhost:4502'
  static args = [
    {name: 'package'},
    {name: 'url'},
  ]

  static examples = [
    `# upload to local AEM author instance (Default: http://localhost:4502)
$ aem pkg:upload we.retail.all-3.0.0.zip

# upload to local AEM publish instance
$ aem pkg:upload we.retail.all-3.0.0.zip http://localhost:4503

# upload to remote AEM author instance running in the Azure Cloud
$ aem pkg:upload we.retail.all-3.0.0.zip https://weretail-author-westeurope.cloudapp.azure.com:4503

# upload to remote AEM publish instance running in on Amazon EC2
$ aem pkg:upload we.retail.all-3.0.0.zip https://ec2-52-204-122-132.compute-1.amazonaws.com:4503
`,
  ]

  static flags = {
    help: flags.help({char: 'h'})
  }

  async run() {
    const {args} = this.parse(PkgUpload)
    let url = args.url || 'localhost:4502'
    let pkg = args.package

    if (args.package) {
      out.info(`uploading ${args.package} to '${url}'`)
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
          out.success(data)
        })
      })

      query.on('error', e => {
        switch (e.errno) {
          case 'ECONNREFUSED':
          out.error(MESSAGES.CONNECTION_REFUSED(url))
          break
        
          default:
          out.error(e)
        }
      })

      form.pipe(query)













    } else {
      this.log(`aemninja pkg:upload ${out.underline('package')} [url]`)
    }
  }
}
