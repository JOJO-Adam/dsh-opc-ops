/**
 * Provider smoke test: run without DSH by faking `ctx.skills`.
 *   node test/provider.test.mjs
 */
import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { apply } from '../lib/index.js'

let registered
apply({
  skills: {
    registerProvider(factory) {
      registered = factory({})
    },
  },
})

const list = await registered.list()
assert.equal(list.length, 5, `expected 5 skills, got ${list.length}`)

const router = list.find((item) => item.name === 'opc-ops')
assert.ok(router, 'opc-ops not discovered')
assert.equal(router.provider, 'jojo-adam-opc-ops')
assert.ok(router.description.length > 20)

const loaded = await registered.get(router)
assert.ok(loaded.content.includes('一人公司运营 SOP'))
assert.ok(existsSync(join(router.resourceBase.path, 'templates/company-profile.md')))

const names = list.map((item) => item.name)
for (const n of ['opc-daycycle', 'opc-ledger', 'opc-redlines', 'opc-doc-shapes']) {
  assert.ok(names.includes(n), `${n} not discovered`)
}

console.log(`ok — ${list.length} skills: ${names.sort().join(', ')}`)
