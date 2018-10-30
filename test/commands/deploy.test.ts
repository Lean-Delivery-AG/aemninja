import {expect, test} from '@oclif/test'

describe('deploy', () => {
  test
    .stdout()
    .command(['deploy'])
    .it('runs deploy', ctx => {
      expect(ctx.stdout).to.contain('aemninja deploy package [url]')
    })

  // test
  //   .stdout()
  //   .command(['deploy', 'test/test-data/core.wcm.components.all-2.2.0.zip', 'localhost'])
  //   .it('runs deploy core.wcm.components.all-2.2.0.zip localhost', ctx => {
  //     expect(ctx.stdout).to.contain('success')
  //     expect(ctx.stdout).to.contain('core.wcm.components.all-2.2.0.zip')
  //     expect(ctx.stdout).to.contain('localhost')
  //   })
})
