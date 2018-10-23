import {expect, test} from '@oclif/test'

describe('pkg:install', () => {
  test
    .stdout()
    .command(['pkg:install'])
    .it('runs hello', ctx => {
      expect(ctx.stdout).to.contain('hello world')
    })

  test
    .stdout()
    .command(['pkg:install', '--name', 'jeff'])
    .it('runs hello --name jeff', ctx => {
      expect(ctx.stdout).to.contain('hello jeff')
    })
})
