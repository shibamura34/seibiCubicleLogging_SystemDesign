# Seibi Cubicle Logging System

19枚の学術的な説明スライド。前回の16テーマを踏襲し、MQTTまとめ送信と1NCEの条件付き容量試算を補完した。以前との比較ページは設けていない。

- [全スライド一覧・発表表示](index.html)：ブラウザで開き、「スライド表示」で左右キー、Escで一覧へ戻る。
- `slide_images/`：選定した19枚のPNG。
- [記述内容と出典](presentation_content_plan.md)
- [ドキュメント・コードレビュー](review_report.md)
- [1NCE計算根拠](one_nce_budget.md)と [再現計算](capacity_model.mjs)
- [画像生成条件](generation_prompts.md)
- [スライド目録](slides_manifest.json)
- [Raspberry Pi Zero 2 W公式写真と出典](assets/gateway_photos/ATTRIBUTION.md)。全19枚の機種表記を確認し、P.1・P.2・P.4に公式写真を使用。公開スライドから旧機種の注記を除いた。

1 Logger＝CT入力3ch（R/S/T）。スライド3は右側コネクタからCT配線を出す。環境センサーは基板実装。指定写真を `assets/logger_photos/logger_board_top_white.png` にコピーした。図中の写真はAI合成による概念表示であり、部品位置・配線を確認する製造図ではない。

TIGERはMQTT broker（Mosquitto）・Telegraf・InfluxDB・Grafanaを包含する。decoder・/LB受信spoolは補助構成要素。MosquittoをTIGER外部の別システムとして描かない。

PNGは画像形式であり、文字・図形の個別編集用PowerPointではない。既存コード、実機、通信周期、TIGER設定は変更していない。実績は記録上の条件・日付に限定し、恒久batch運転・32台回収・物理page-program中断・LTE課金量を受入済みとしない。1NCE試算は通信付随量を仮定した概算であり、実量確認は別途必要。

