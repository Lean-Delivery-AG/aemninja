import {expect, test} from '@oclif/test'

describe('deploy', () => {
  test
    .stdout()
    .command(['deploy'])
    .it('runs deploy', ctx => {
      expect(ctx.stdout).to.contain('USAGE')
    })

  test
    .stdout()
    .command(['deploy', 'we.retail.all-3.0.0', 'localhost'])
    .it('runs deploy we.retail.all-3.0.0 localhost', ctx => {
      expect(ctx.stdout).to.contain('SUCCESS')
      expect(ctx.stdout).to.contain('we.retail.all-3.0.0')
      expect(ctx.stdout).to.contain('localhost')
    })
})
