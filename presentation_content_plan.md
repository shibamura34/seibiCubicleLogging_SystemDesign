# Seibi Cubicle Logging System：プレゼンテーション記述内容

更新日：2026-10-13 JST

## 位置づけ

全19枚のゲートウェイ機種はRaspberry Pi Zero 2 Wを基準とする。P.1・P.2・P.4は公式写真、機器構成を省略した処理図は同機種を示す抽象ブロックを使用する。旧機種の注記を公開スライドに残さず、既存レビュー記録の系統別事実は改変しない。

前回の16テーマと視覚様式を踏襲し、MQTTまとめ送信・1NCE容量検討を追加した全19枚。以前との比較ではなく、独立した学術的な技術説明資料として目的・方式・仕様・実験結果・適用限界を記述する。数値を誇張せず、限定実績と設計目標を区別する。

1台のLoggerは外付けCT入力3ch（R/S/T）を測定する。図は単一キュービクルのR/S/TにCTを3個取り付け、すべて同じLoggerに接続する。環境センサーはLogger基板実装。機器写真は指定された `../loggerGatewayOverview/assets/logger_photos/logger_board_top_white.png` を使用する。

TIGERはMQTT broker（Mosquitto）・Telegraf・InfluxDB・Grafanaを包含するシステム全体の名称。decoder・/LB receiver・永続spoolは内部の補助要素であり、TIGER自体をdecoderの別名にしない。

## 基準と検証

LoggerApp HEAD 717e72a、FW0.12.12。GW1 b92daf0、GW2 d4bca5c、TIGER a819004。ローカルファイルを2026-10-13に確認。remote fetch・現在の実機状態の再確認は実施していない。

今回PC再実行：GW2 Python3.13・479件・82.348秒・OK、TIGER Python3.14・57件・12.107秒・OK。既存の模擬通信・一時SQLite試験であり実BLE/MQTT操作を含まない。最初のGW2 Python3.14はyaml/serial依存不足で440 tests・16 errors。依存が揃う既存Python3.13に切り替えた再実行結果を採用し、件数を加算しない。

## スライド本文と図示方針

### 01 システム構成図

単一キュービクルのR/S/T三相線にCTを各1個、計3個。3本とも同じ1台Loggerへ接続する。指定赤PCB写真に「基板実装：温度・湿度・気圧」と注記。Logger Flash→BLE→GW2（Pi Zero 2 W・SQLite）→MQTTでTIGER内のMosquittoへpublish。TIGERの大枠内はMosquitto（MQTT broker）→Telegraf（受信・処理）→InfluxDB（時系列保存）→Grafana（可視化）を配置し、decoder・/LB永続spoolも内部の補助構成要素として表示。MQTTは/L raw16と選択式/LB batch。GatewayはTIGER外。逆矢印は時刻同期・次回予定・COMMIT。60秒採取・通常300秒BLE・最大32件/接続。4台160件の一時batch経路は限定照合、恒久切替未完了。ゲートウェイの機種はRaspberry Pi Zero 2 Wに統一する。

P.1のTIGER外周はオレンジの破線による段差のない長方形とする。Mosquittoと全内部構成を囲み、Gatewayの見出しが枠線に重ならないよう改行する。GW2機器はP.2と同じPi Zero 2 Wの公式実機写真を使用し、抽象ブロックを置換する。写真の角度を維持し、BLE/MQTT/SQLiteの矢印を残す。

### 02 ロガー／ゲートウェイ諸元

2列比較ではなく機器仕様表。Logger列：CC2650MODA / BLE、RX8900 RTC、BME280基板実装、CT入力3ch（R/S/T）、1台で三相ADC RMS count、60秒採取、通常300秒BLE、32件/接続、AT45DB641E 460,800件、Deep Sleep、FW0.12.12。GW2列：Pi Zero 2 W/Python/BlueZ/Bleak、逐次BLE、SQLite schema13、network/BLE/MQTT別service、QoS1、/L raw16・/LB batch_v1選択、DB品質と再送監査。下部『共通：測定16B／Status20B／Command・Response8B』『電池％はVDDSからの暫定推定』。Logger機器画像は指定写真をそのまま配置。架空ケース・電池・アンテナを描かない。Gateway機器画像は [Raspberry Pi公式記事](https://www.raspberrypi.com/news/new-raspberry-pi-zero-2-w-2/) の実機写真を使用し、抽象ブロックを置換する。写真元ファイルは `assets/gateway_photos/raspberry_pi_zero_2_w_official.jpg`。P.2にGW1情報を載せない。

### 03 計測周期と16Bレコード構造

RTC時刻信頼検査、SMP計測とFlash保存、snapshot固定、必要時BLE、Flash後処理とUNSENT確定、次回起床予約とDeep Sleepの図。計測構成図はLoggerを左・R/S/TのCTを右に配置し、基板を反転せず右側コネクタから3本のCT配線を出す。RTC未信頼の起動はBLE時刻同期後も採取せずsleep。16B帯：時刻4B、温度1B、湿度1B、気圧1B、R/S/T6B、電源1B、CRC2B。timeSecは2026-01-01 UTC起点。ADCは校正済みcountでAへの換算は後段。電源0..100推定％、FE external、FF unknown。注『AUTO分類は電圧しきい値による。外部3.1Vでも電池側に分類され得る』。

### 04 保存確認を伴うBLE回収

Logger左、GW2右のシーケンス：16B Notify（左から右）、GW2の長さ・CRC・時刻品質・測定値範囲・SQLite保存確認、DONE件数照合、COMMIT_TRANSFER（右から左）、Logger RAM予約と応答（左から右）、BLE終了後に送信済みbitmapをFlash反映。重複受理で二重行を抑える。保存後COMMIT前停止は再送して照合。別枠『隔離保存も受理件数に含み得る。COMMITと正常データ公開は別の判定』。COMMITは即時消去ではない。矢印方向正確。

### 05 停止条件に基づく保存設計

4行の表。停止条件｜着想｜実装方式：Flash更新中の停止｜更新前ページを確保｜循環undo journal。通信断による滞留｜現在の状態から回収｜最新優先選択。Gateway保存後の停止｜保存確認後に確定｜SQLite transaction後COMMIT_TRANSFER。復元中の再停止｜復元元を保持｜pinned backup。同じ表の下に抽象ブロックのみ：Logger Flash→GW2 SQLite→MQTT→TIGER。注記『方式と限定試験の説明であり、任意の物理電源断を受入済みではない』。 TIGERはMQTT broker（Mosquitto）を含む。brokerをTIGER枠内に置き、GatewayからはMosquittoへpublishする。変換/Dも同じbrokerへ再publishし、Telegrafが購読してInfluxDBへ保存、Grafanaが可視化する。

### 06 256Bページで記録と管理を集約

左は1ページ16B header+16B×15record=256B。レコードは01,02,03,…,15の省略表記。header: sequence／CRC／15bit送信済みbitmap（1record＝1bit）。中央はレコード内容を保持してbitmapを更新する模式図。右表data30,720ページ×15=460,800件、毎分1件で320日容量換算。下部連続32件最大3page／疎な32件最大32page。注記『320日は保存容量の換算値。電池寿命・Flash寿命・送信対象期間とは別』。他のシステム図不要。

### 07 循環undo journalの更新手順

正確な順序の3段階横図：1 descriptorへ更新計画を記録（対象page・sequence・OLD/NEW fingerprint）→2 OLD target256Bをbackupへ退避してreadback照合→3 NEW target256Bを対象pageへ書込みreadback照合。descriptorは先、target更新は最後。データ30,720page／backup1,024page／metadata1,024pageの領域表（縮尺非対応）。descriptor256B＝本体250B＋末尾6B、末尾の用途は記載不要。保護対象：追記・ページ再使用・送信済みmark・管理情報。『電源断後はOLD/NEWとbackupを照合して採用状態を判定する』『物理page-program途中の遮断と全体0Vは未受入』。

### 08 起動時の復旧判定

中央フロー：metadata1,024個の16B header走査→最新descriptor完全検証→target fingerprint照合。NEW一致→COMMIT（更新後採用）、OLD一致→ROLLBACK（更新前採用）、どちらでもない＋backup有効→RESTORE。復元元backupを保持し復元中の再停止に備える。I/O異常／backup不正／曖昧な状態→安全停止、自動formatしない。結語『信頼できる状態だけで運転を再開』。注記『保存前のRAMデータまで救済する保証ではない』。保守PC設定機能など追加しない。

### 09 Flash更新予算と保守条件

3つの概念図：同一pageのbitmap更新を集約、journal/backup対を循環、data-sector更新数・異常debt・非常復元予算を永続管理。保守条件は使用可能対512未満／debt上限／単調counter上限。上限に達した信頼済み状態はGET_STATUS/PING限定、I/O異常・corruptは通常BLE停止。『期限切れだけを理由にdataページを消去しない』『摩耗予算は設計モデル。実機寿命保証は別確認』。計算されていない寿命数値は入れない。

### 10 最新優先回収と未送信の自己照合

回収モデル：新規5件＋滞留27件＝32件。毎枠32件成功なら滞留は理論上27件/5分減少。フロー：SMPで新規保存→snapshot固定→最新未送信選択→期待件数不一致ならbitmap再集計・System Info修復→一度再選択。『LOG| UNSENT n はBLE後Flash処理済みの確定値』。満杯時：最古15件を未送信も含めて破棄し新規1件保存。注記『無期限の全履歴保持は保証しない。長い転送済みgapを飛ばすcursor走査は未実装』。

### 11 品質検証・永続キュー・再送処理

GW2の受理・再送、TIGERの受信・変換・蓄積を別段階で管理する。
上段構成：Logger Flash → BLE → GW2 SQLite → MQTT → TIGERの大きな枠。TIGER枠内にMosquitto（MQTT broker）、/LB受信spool、データ変換、Telegraf、InfluxDB、Grafana。GatewayからMosquittoに/L・/LB入力。/LB受信部から/D JSONを同じMosquittoに再publishし、Telegrafが/Dを購読してInfluxDBへ保存、Grafanaで可視化。
下段3列：
GW2品質検証：CRC、時刻の信頼性、未来30秒、測定値範囲。SQLiteにtime/field品質を保存。futureを信頼時計で再評価・監査。unverifiedは自動昇格しない。
GW2再送：CONNACKで接続確認。PUBACK後のみpublished。失敗時60/120/240/480/900秒＋jitter。pending/failedを年齢だけで削除しない。
TIGER /LB永続化：spoolのSQLite commit後に受信ACK。/DのPUBACK後に完了。未完了は再起動後に再開。
注記：brokerのACKとInfluxDB永続化は別段階。

### 12 複数ロガーの通信時刻を管理

GW2→Logger1/2/3/4は単純な抽象ブロック。理想配置floor(300×i/n)、4台例0/75/150/225秒の1本のタイムライン。『実割当は採取境界・通信時間余裕を考慮して調整』実際の割当時刻の図は作らない。『4台限定実績。managed schedule設定は最大4台。登録allowlist上限32台とは別』。下部32台設計課題：16group・300秒/group＝4,800秒（80分）。1台80件/80分、1接続上限32件→48件不足→最低3接続/周期＋再試行余裕。『32台運用は設計目標、容量・5分BLE要件の整合を要検討』。 TIGERはMQTT broker（Mosquitto）を含む。brokerをTIGER枠内に置き、GatewayからはMosquittoへpublishする。変換/Dも同じbrokerへ再publishし、Telegrafが購読してInfluxDBへ保存、Grafanaが可視化する。

### 13 停止位置と入力条件を変えたPC検証

過去Logger host記録は独立表：更新中停止771条件、RESTORE中停止514条件、30,720page fixture、選択・COMMIT750条件、unittest70件（各群合算しない、保存済み記録）。771/514はページ数ではなく停止条件数。今回PC回帰：GW2 479tests OK Python3.13 2026-10-13／TIGER57tests OK 2026-10-13。抽象図のみ模擬BLE/MQTT＋一時SQLite。境界入力・CRC・未来30/31秒・再開・PUBACK・原子的更新。注記『PC試験は物理電源断を含まない。Logger過去試験は今回再実行していない』。 TIGERはMQTT broker（Mosquitto）を含む。brokerをTIGER枠内に置き、GatewayからはMosquittoへpublishする。変換/Dも同じbrokerへ再publishし、Telegrafが購読してInfluxDBへ保存、Grafanaが可視化する。

### 14 4 Logger・160 recordのE2E照合

2026-10-12一時batch_v1。表Logger L1..L4各expected40 actual40 matched40 不一致0 重複行0、合計160。検証段階はGW2元16B SHA・published→TIGER内spool・変換・/D PUBACK→TIGER内InfluxDB時刻・tags・7fields。TIGERは全システムMosquitto/Telegraf/InfluxDB/Grafana、InfluxをTIGER外部システムとして描かない。40分観測、78監視チェック、停止条件なし、raw16復帰。Influx証跡はユーザー実行Data Explorer結果。別注記『別の恒久切替試行はCUTOVER_STOP、原因未特定。限定データ経路合格と恒久運転・障害時・LTE実網の合格は別』。CUTOVER_STOPはコマンドではなく停止結果。 TIGERはMQTT broker（Mosquitto）を含む。brokerをTIGER枠内に置き、GatewayからはMosquittoへpublishする。変換/Dも同じbrokerへ再publishし、Telegrafが購読してInfluxDBへ保存、Grafanaが可視化する。

### 15 小型MCUの実行時間とメモリ余裕

過去計測2026-09-11 CUR-TIME32対象版、4独立カード：起動走査0.448870秒／32件選択0.140285秒／BLE後Flash1.546074秒／次分採取余裕28.700248秒。これらは別区間であり合計処理時間や1分中の時間線を作らない。stack2592B中2472B、残120B。heap peak1360B/span1564B、確保失敗0。ページcache・一括選択・workspace共有で20KB SRAMに実装。注記『特定版・条件の実測であり、現行全経路の最悪値や十分な余裕を保証しない』。

### 16 設計上の利点と適用限界

3柱：最新優先回収（最近の設備状態を優先）／Gateway SQLite保存後COMMIT_TRANSFER（受理確認）／曖昧なFlash状態で安全停止（無理な継続を避ける）。COMMITはCloudやTIGERの保存後に待って送るものではない。特長：循環undo journal、CRC・件数・品質照合、BLE/MQTT独立再送、TIGER内部の永続spool、個体別スケジュール。利点：通信断後の再開、異常段階の追跡、小型MCUで整合性判断。残る受入：物理page-program中遮断・全体0V／32台回収容量／0x3E根因／恒久batch運転。GatewayLTEは比較機でPi GW2と別。結語『設備状態を、保存と照合を重ねて届ける』。 TIGERはMQTT broker（Mosquitto）を含む。brokerをTIGER枠内に置き、GatewayからはMosquittoへpublishする。変換/Dも同じbrokerへ再publishし、Telegrafが購読してInfluxDBへ保存、Grafanaが可視化する。

### 17 16Bを保ったMQTTまとめ送信

/LB payload横帯 version1B count1B raw16B×N、通常N2..64（1件は/L）最大1026B。同一Loggerだけ、1件は/L、2..64件は/LB。15件242B、64件1026B。メリット『topic・MQTT制御・ACKを複数件で分担』。TIGER内の永続spoolから既存/D11項目を出力し、Telegraf・InfluxDBへ接続。CRCは各record既存CRC16、追加CRC32なし。『最大64件は梱包上限で、64件待ちの条件ではない』『160件一時運転合格、最後の確認はraw16へ復帰。恒久切替は準備段階』。 TIGERはMQTT broker（Mosquitto）を含む。brokerをTIGER枠内に置き、GatewayからはMosquittoへpublishする。変換/Dも同じbrokerへ再publishし、Telegrafが購読してInfluxDBへ保存、Grafanaが可視化する。

### 18 1NCEの10年500MBと収容台数

1SIMあたり500MB/10年。decimalMB、10年=3652.5日、日平均136.9kB。20％予備を引いた400MBなら109.5kB/日。毎分16B全送信なら1Logger84.15MB/10年、2台168.31、4台336.61、8台673.23。表は測定payloadだけと大きく明記。『毎分全件の8台/1SIMはpayloadだけで超過』『集約しても16B本体は減らない』。総量は上り下り/IP/TCP/MQTT/TLS/ACK/再送/接続/DNS/keepaliveを含む。出典1NCE公式2026-10-13、計算条件可視。

### 19 500MBへ収める通信条件

毎分採取を維持、同一Loggerの最大64件batch、接続確立とidle通信を減らし、1SIMの総量監視。概算例を表：2台/15分送信660.6MB、2台/60分送信291.4MB、4台/60分送信495.1MB。前提『10年3652.5日、各PUBLISHの付随200B、Gateway接続1回1000B、毎枠1接続、再送・常時通信等は別』。2台60分は400MB目標内の候補、4台60分は予備余裕不足。60分送信は設計例で現行実機設定を示さない、Loggerは毎分採取・BLE通常5分のまま。『TLSを省かず、接続再利用・送信周期・SIM分散を評価』『LTE IP両方向captureと1NCE Portal差分照合で条件を確定。実測10年保証なし』。2台60分・20％予備・PUBLISH付随200Bという条件では、Gatewayの接続付随平均は1回約2239B以下（他の常時通信等は未算入）。

## 証拠・出典

- [Logger絶対データ契約](../../tb_logger/tb_sensorData.h)
- [Logger仕様](../../designSpecification/specification_seibiCubicleLoggerApp.md)
- [保存・復旧の仕様](../../designSpecification/design/storage_recovery.md)
- [受入台帳](../../designSpecification/acceptance_test_matrix.md)
- [Gateway系統・再評価](../../../seibiCubicleGateway2/docs/135_MAINSTREAM1_MIGRATION_REASSESSMENT.md)
- [GW2 schema13の配備E2E](../../../seibiCubicleGateway2/docs/145_P4_SCHEMA_V13_PI_DEPLOYMENT_AND_E2E_RESULT.md)
- [まとめ送信の実装](../../../seibiCubicleGateway2/docs/mqtt_log_batch_v1.md)
- [一時batch実行記録](../../../seibiCubicleGateway2/docs/mqtt_log_batch_diagnostic_execution_20261012.md)
- [160点Influx照合](../../../seibiCubicleGateway2/docs/mqtt_log_batch_diagnostic_influx_readback_20261012.json)
- [恒久切替の実行記録](../../../seibiCubicleGateway2/docs/mqtt_log_batch_permanent_cutover_execution_20261012.md)
- [最新の恒久切替計画](../../../seibiCubicleGateway2/docs/mqtt_log_batch_permanent_cutover_plan_20261013.md)
- [TIGER構成・後段限定確認](../../../seibiCubicleTIGER/README.md)
- [TIGER /LB受信仕様](../../../seibiCubicleTIGER/docs/log_batch_receiver.md)
- [1NCE公式容量](https://www.1nce.com/ja-jp/1nce-connect/features/500-mb-data-volume)
- [1NCE公式計測対象](https://help.1nce.com/docs/connectivity-services/connectivity-services-data-services/data-services-data-volume/)

公式Web資料の確認日は2026-10-13。1NCEの容量試算は別紙 [通信量計算](one_nce_budget.md) に計算式と感度条件を記載する。スライド図は概念図であり製品配線図ではない。


レビュー詳細は [レビュー報告](review_report.md)。画像作成条件は [生成プロンプト](generation_prompts.md)。

