# dsh-opc-ops · JOJO&Adam

一人公司在 DeepSeek Harness 里的运营 SOP：首启 8 字段建公司档案，按「晨报 → 上午档 → 下午档 → 晚报」跑日循环，台账、报价、合同、日报全部落档；法定动作只出材料与指引，对外件先入待发池等人确认。

不是「教你怎么开公司」，是让 agent 每天真的把运营这件事做下去，且每一步留痕。

## 安装

```bash
dsh plugin --profile web add @jojonadam/dsh-opc-ops        # Web 版
dsh plugin --profile desktop add @jojonadam/dsh-opc-ops    # 桌面版
```

## 30 秒上手

```
你：开工
Agent：先问 8 个字段（一次一组）→ 生成 ops/00-档案/公司档案.md → 出今日晨报
```

之后每天：晨报（昨日进展 / 今日三件事 / 账面快照）→ 上午档（客户跟进、文书）→ 下午档（记账、排期）→ 晚报（成果 / 明日计划 / 待确认）。

## 包含

| 技能 | 用途 |
|---|---|
| `opc-ops` | 总入口：8 字段建档、日循环、落盘约定、角色模式、路由 |
| `opc-daycycle` | 日循环 SOP：档位切换、人审闸门、抗漂移规则 |
| `opc-ledger` | 台账 CSV 口径、对平判据、现金流快照、票据清单 |
| `opc-redlines` | 六条红线与禁词表、危险回退、中性改写 |
| `opc-doc-shapes` | 报价单/合同/晨晚报/线索表/合规清单的统一形状 + 4+1 行业预填 |

随包模板：`opc-ops/templates/company-profile.md`（公司档案）。

## 边界（写在前面）

- 法定动作只出材料与指引，执行人是用户本人；不代办注册/报税/签约/开票/付款。
- 对外件一律进 `ops/90-待发池/` 等确认，不自行发出。
- 不承诺成交、过审、收益；税务与法律终局判断以持证专业人士为准。
- 缺数据停下问，不编造、不代填台账。

## 落档

所有产物在用户工作区 `ops/` 下：00-档案 / 10-排期 / 20-台账 / 30-客户 / 40-文书 / 50-日报 / 90-待发池。
插件更新不覆盖 `ops/`。

## 验证

```bash
node test/provider.test.mjs
```

## 品牌

JOJO & Adam · <https://jojo-adam.com>

## License

MIT
