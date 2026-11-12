# dsh-opc-ops · JOJO&Adam

An operations SOP for a one-person company inside DeepSeek Harness: an 8-field company profile, then a daily cycle from morning brief through two execution shifts to an evening report — ledger, quotes, contracts and reports all filed, with statutory actions limited to materials plus guidance.

## Install

```bash
dsh plugin --profile web add @jojonadam/dsh-opc-ops
dsh plugin --profile desktop add @jojonadam/dsh-opc-ops
```

## What's inside (5 skills)

`opc-ops` (entry point: profile, daily cycle, file conventions, role modes) + `opc-daycycle` + `opc-ledger` + `opc-redlines` + `opc-doc-shapes`, plus a company-profile template.

## Boundaries

- Statutory actions (tax filing, signing, invoicing, payment) are produced as materials and guidance only; the owner executes.
- Every outbound document goes to `ops/90-pending/` for approval — nothing is sent autonomously.
- No promises of deals, approvals or revenue; no fabricated ledger entries.

## License

MIT · JOJO & Adam · <https://jojo-adam.com>
