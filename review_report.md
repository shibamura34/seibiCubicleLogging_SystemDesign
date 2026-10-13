# ドキュメント・コード再レビュー

確認日：2026-10-13 JST。対象：LoggerApp、GW1、GW2、TIGERの現行ソース・仕様・日付付き検証記録。既存コード／実機設定は変更していない。退役フォルダを仕様判断の根拠としていない。

## 結論

公開資料はGW2経路を中心に説明する。GW1・GW2・GatewayLTEを区別する。TIGERはMQTT broker（Mosquitto）／Telegraf／InfluxDB／Grafanaを包含するシステム全体の名称。brokerをTIGER外部の別システムとして描かない。1 LoggerでCT3ch（R/S/T）を測定し、環境センサーは基板実装とする。

## 指摘と修正方針

|ID|指摘と根拠|影響・修正案|
|---|---|---|
|R01|[GW1実装](../../../seibiCubicleGateway/gateway_log_store.py)第14/18行はschema9・未来24h。[GW1仕様](../../designSpecification/specification_seibiCubicleGateway.md)第66行はschema12・未来30秒のGW2側契約を記載。|実装系統を分けて仕様を訂正する。GW1コードをGW2仕様へ無断変更しない。公開諸元はGW2 schema13を採用。|
|R02|[TIGER README](../../../seibiCubicleTIGER/README.md)と[receiver仕様](../../../seibiCubicleTIGER/docs/log_batch_receiver.md)の初期未配備／未受入記述と、後続の日付付き限定配備・照合記録が混在。|冒頭に日付・経路別の最新状況表を置く。資料は2026-10-12の160件限定照合を記載し、恒久合格に拡大しない。|
|R03|[GW2設定](../../../seibiCubicleGateway2/src/seibi_cubicle_gateway2/config.py)第296行はmanaged schedule >4台を拒否。allowlist32台とは異なる。|登録上限・予定配信の実装上限・受入台数を別欄に記載。32台実運用済みとはしない。|
|R04|[残作業](../../designSpecification/backlog/remaining_work.md)：32台・80分superframeは1台80件発生、1接続32件では48件不足。|最低3接続／周期と再試行余裕が必要。通常5分BLE要件との整合も要検討。容量モデルを運用済み仕様にしない。|
|R05|[電源分類](../../tb_bsp/tb_bat.c)はBATMON VDDS閾値判定。AUTO3200mV以下CR2032／3250mV以上external。3.1V外部給電でも電池判定を取り得る。|百分率は暫定推定と明示。実負荷電圧・分類境界を別途評価し、平滑化や換算曲線を無断変更しない。|
|R06|[現行記録仕様](../../designSpecification/design/storage_recovery.md)はlayout-v3循環undo journal。旧bank構造は現行レイアウトの根拠にできない。|30,720data／1,024backup／1,024metadata、256B・15件を資料の基準にする。歴史的耐久推計値は一次根拠を再照合できるまで非掲載。|
|R07|[受入台帳](../../designSpecification/acceptance_test_matrix.md)はhost停止条件・実機完了境界遮断を区別。物理page-program途中遮断とDUT全体0Vは未受入。|「任意の電源断でも完全復旧」「欠落ゼロ」と断定せず、機構と試験条件を併記する。|
|R08|[0.12.12ビルド記録](../../designSpecification/verification/unsent_uart_marker_20260921.md)：主FLASH残6B、最終ページ270B、SRAM2712B。stack／heapは別版実測。|追加機能前に配置余裕と現行最悪high-waterを再評価。異なる領域を合算しない。今回ビルドしたとは記載しない。|
|R09|[コンパイル設定](../../tb_logger/config.h)はproduction60/300/32に対しtracked development60/180。|諸元はproduction条件を明記。通常運用確認はchecked build／manifestでprofileを確定する。|
|R10|[恒久切替記録](../../../seibiCubicleGateway2/docs/mqtt_log_batch_permanent_cutover_execution_20261012.md)はCUTOVER_STOP・RECOVERY_INCOMPLETE、その後raw16復帰。[翌日計画](../../../seibiCubicleGateway2/docs/mqtt_log_batch_permanent_cutover_plan_20261013.md)はPC準備。|一時160件照合・恒久試行停止・復帰を別々に表示。今回、現在の実機状態を再確認していない。|
|R11|同時刻・同tagの異なるpayloadはInfluxDB同一点へ重なる懸念が残る。CRC・SQLite重複判定だけでは解決しない。|同時刻異値レコードを独立受入項目にする。PUBACKとInfluxDB保存を同一視しない。|
|R12|1NCE500MBはSIM全体のUL/DL通信量。/LBは16B本体を圧縮せず、付随通信を分担。実LTE計測・Portal照合は未受入。|計算式・台数・接続/TLS/再送前提を提示し容量保証と呼ばない。8台毎分全件ではpayloadだけで500MB超過。|

## 今回の検証

GW2：PYTHONPATH=.;src、py -3.13 -B -m unittest discover -s tests -q、479件・82.348秒・OK。

TIGER：python -B -m unittest discover -q、57件・12.107秒・OK。

最初のGW2 Python3.14試験は依存yaml/serial不足で440件・16errors。既存Python3.13の479件結果を採用。模擬BLE/MQTT・一時SQLiteであり、Pi・COM・電源・broker・LTEの実操作は行っていない。Logger host70件は過去記録を参照し、今回再実行していない。

## 証拠の読み分け

[160件照合JSON](../../../seibiCubicleGateway2/docs/mqtt_log_batch_diagnostic_influx_readback_20261012.json)のInflux根拠はユーザー実行Data Explorer結果。4台各40件・40分観測・78監視の条件であり、Grafana画面・24時間・恒久切替・LTE課金実測の合格と読み替えない。

上記は本報告と新規資料への反映であり、R01/R02等の既存仕様書やコードを修正済みとしていない。

