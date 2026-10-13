# 画像生成・編集プロンプト

内蔵画像生成ツールを使用。旧16枚の視覚様式を基準に新規19枚を作成し、技術的な誤解を招く図・文言を再編集した。選定成果物はslide_images/、非選定候補は本フォルダへコピーしていない。

指定写真を参照し、TIGERはMosquitto・Telegraf・InfluxDB・Grafanaを包含する。各ページはフラットな技術説明図。機器の個別部品配置や実網運用を保証する配線図ではない。

## 01 システム構成図

```text
Create ONE finished widescreen Japanese technical presentation slide, approximately 16:9, high resolution, crisp readable typography. Match the existing Seibi presentation: warm-white background, navy headings, teal diagrams, muted orange for conditions. Running English title exact 'Seibi Cubicle Logging System', top-right page NN / 19, Japanese topic headline. Dense but legible, aligned flat editorial composition, useful technical diagrams. All technical diagrams are conceptual illustrations, not fabricated product photos or claims of observed events. Logger is white rounded rectangular case based on the supplied product, environmental sensor mounted INSIDE red PCB, CT external. No invented antenna. Write only the expressly requested facts; no extra assertions, fake matrix, made-up dates or stages. Diagrams can use arrows where technically useful; communication arrows correct. Full opaque slide. Footer 'loggerGatewayOverview2／2026-10-13'. Render Japanese text exactly. Do not render English prompt instructions.
If a Logger product picture is needed, use the exact supplied real red-PCB top-down photo as product identity. Never invent a different Logger case or antenna. For purely abstract data/Flash diagrams, use abstract symbols, not fake product photographs.
STRICT: no invented SEIBI brand logos, no slogans, no extra product housings. No more text than requested. Do not portray GW2 as a fictional commercial box. Gateway is conceptual Pi Zero2W board or simple labeled block. Logger appears only as supplied red-PCB source photo or abstract block labeled Logger. Do not confuse snapshot with packing: save the new record first, then freeze snapshot. Reproduce only actual protocol identifiers and counts.
Use case: compositing and text-localization. Image1 is old slide edit target, Image2 is exact Logger product photo supporting insert. Preserve original Image1 sparse composition, diagram flow, colors and type style, but replace all content with updated verified Japanese content below. Remove all old dated validation statements. Page 1/19. Japanese headline 'システム構成図'.
元スライドと同じ単一キュービクル、R/S/T三相線にCTを各1個＝計3個。3本とも同じ1台Loggerへ接続。LoggerはImage2の指定された赤PCB写真を使い、実装位置を偽らず『基板実装：温度・湿度・気圧』を基板全体の注記で示す。Logger→BLE→GW2 Raspberry Pi Zero2W（SQLite保存）→MQTT broker→TIGERの大きな枠。TIGER枠内はTelegraf（受信・処理）→InfluxDB（時系列保存）→Grafana（可視化）。decoderと/LB永続spoolは補助構成要素。TIGERをdecode単独と書かない。MQTTは/L raw16、選択式/LB batch。Loggerへの逆矢印は時刻同期・次回予定・COMMIT。底部：1 Logger＝CT3ch（R/S/T）、60秒採取、通常300秒BLE、最大32件/接続。『4台160件の一時batch経路を限定照合。恒久切替未完了』。GW1 Pi4Bは別実装。
Very strict: only ONE cubicle with exactly THREE CT rings on R/S/T, SAME single Logger receives all3 channels. All product illustrations of Logger use Image2 exact red PCB; environment sensor is on PCB not external. Do not draw CT where not needed on slides2-4. No invented SEIBI logo, slogans, battery, housing or gateway antenna. TIGER whole box contains core Telegraf/InfluxDB/Grafana, NOT decoder-only. For slide3 explicit SMP includes measurement then Flash save then snapshot BEFORE BLE; after BLE apply marks then UNSENT before SLP. For slide4 depict Gateway as simple abstract labeled block, no router antenna. Quote only requested text.
```

```text
Change ONLY the gateway motherboard picture. It currently falsely looks like a Pi4B with Ethernet+stacked full-size USB ports. Replace it with a simple flat abstract block labeled 'GW2' and 'Pi Zero 2 W', with NO connectors/antenna/brand logo. Preserve Logger red PCB photo, ALL text/tables/cubicle three CTs, layout, TIGER, and footer unchanged.
```

```text
Edit this finished Japanese slide, preserve style/unalteredtext. Precise technical correction: Keep complete Logger/Cubicle/GW2 left area and alltext bottom. Change right system boundary: expand TIGER dotted orange enclosing rectangle LEFTWARD to enclose the existing MQTT broker server as well as Telegraf/InfluxDB/Grafana. MQTT broker label change to 'MQTT broker' with '(Mosquitto)' below. Put TIGER title centered across expanded boundary. Gateway remains OUTSIDE TIGER. Its MQTT arrow enters Mosquitto then data-processing/Telegraf thenInfluxDB thenGrafana. Keep decoder and /LBspool insideTIGER. Do not put broker outsideTIGER anymore.. NeverrenderEnglishinstructions. TIGER=whole Mosquitto+Telegraf+InfluxDB+Grafana system. Mosquitto is IN the system boundary. Noothernewnumbers.
```

```text
Edit ONLY TIGER internal orange arrow: currently Mosquitto points directly to InfluxDB, which is incorrect. Move/reroute orange arrow to end at Telegraf topbox (受信・処理), then existing Telegraf→InfluxDB→Grafana arrows unchanged. Keep enclosingTIGERboundaryincludesMosquitto. Allrest unchanged including3CTloggerphotoandtables.
```

## 02 ロガー／ゲートウェイ諸元

```text
Create ONE finished widescreen Japanese technical presentation slide, approximately 16:9, high resolution, crisp readable typography. Match the existing Seibi presentation: warm-white background, navy headings, teal diagrams, muted orange for conditions. Running English title exact 'Seibi Cubicle Logging System', top-right page NN / 19, Japanese topic headline. Dense but legible, aligned flat editorial composition, useful technical diagrams. All technical diagrams are conceptual illustrations, not fabricated product photos or claims of observed events. Logger is white rounded rectangular case based on the supplied product, environmental sensor mounted INSIDE red PCB, CT external. No invented antenna. Write only the expressly requested facts; no extra assertions, fake matrix, made-up dates or stages. Diagrams can use arrows where technically useful; communication arrows correct. Full opaque slide. Footer 'loggerGatewayOverview2／2026-10-13'. Render Japanese text exactly. Do not render English prompt instructions.
If a Logger product picture is needed, use the exact supplied real red-PCB top-down photo as product identity. Never invent a different Logger case or antenna. For purely abstract data/Flash diagrams, use abstract symbols, not fake product photographs.
STRICT: no invented SEIBI brand logos, no slogans, no extra product housings. No more text than requested. Do not portray GW2 as a fictional commercial box. Gateway is conceptual Pi Zero2W board or simple labeled block. Logger appears only as supplied red-PCB source photo or abstract block labeled Logger. Do not confuse snapshot with packing: save the new record first, then freeze snapshot. Reproduce only actual protocol identifiers and counts.
Use case: compositing and text-localization. Image1 is old slide edit target, Image2 is exact Logger product photo supporting insert. Preserve original Image1 sparse composition, diagram flow, colors and type style, but replace all content with updated verified Japanese content below. Remove all old dated validation statements. Page 2/19. Japanese headline 'ロガー／ゲートウェイ諸元'.
2列比較ではなく機器仕様表。Logger列：CC2650MODA / BLE、RX8900 RTC、BME280基板実装、CT入力3ch（R/S/T）、1台で三相ADC RMS count、60秒採取、通常300秒BLE、32件/接続、AT45DB641E 460,800件、Deep Sleep、FW0.12.12。GW2列：Pi Zero 2 W/Python/BlueZ/Bleak、逐次BLE、SQLite schema13、network/BLE/MQTT別service、QoS1、/L raw16・/LB batch_v1選択、DB品質と再送監査。下部『共通：測定16B／Status20B／Command・Response8B』『GW1 Pi4B/schema9とGW2を区別』『電池％はVDDSからの暫定推定』。Logger機器画像は指定写真をそのまま配置。架空ケース・電池・アンテナを描かない。
Very strict: only ONE cubicle with exactly THREE CT rings on R/S/T, SAME single Logger receives all3 channels. All product illustrations of Logger use Image2 exact red PCB; environment sensor is on PCB not external. Do not draw CT where not needed on slides2-4. No invented SEIBI logo, slogans, battery, housing or gateway antenna. TIGER whole box contains core Telegraf/InfluxDB/Grafana, NOT decoder-only. For slide3 explicit SMP includes measurement then Flash save then snapshot BEFORE BLE; after BLE apply marks then UNSENT before SLP. For slide4 depict Gateway as simple abstract labeled block, no router antenna. Quote only requested text.
```

```text
Change ONLY the gateway motherboard picture. It currently falsely looks like a Pi4B with Ethernet+stacked full-size USB ports. Replace it with a simple flat abstract block labeled 'GW2' and 'Pi Zero 2 W', with NO connectors/antenna/brand logo. Preserve Logger red PCB photo, ALL text/tables/cubicle three CTs, layout, TIGER, and footer unchanged.
```

```text
Edit this finished Japanese slide, preserve style/unalteredtext. Precise technical correction: Keep allLoggerphoto/tables andGW2specs. ONLY update lower-right TIGER box to list 'Mosquitto / Telegraf / InfluxDB / Grafana'. Expand thisbox ifneededwithoutoverlap. MQTTarrow fromGW2 entersTIGER box. Do not addextraexternalbroker. Removeprevious three-onlydefinition.. NeverrenderEnglishinstructions. TIGER=whole Mosquitto+Telegraf+InfluxDB+Grafana system. Mosquitto is IN the system boundary. Noothernewnumbers.
```

## 03 計測周期と16Bレコード構造

```text
Create ONE finished widescreen Japanese technical presentation slide, approximately 16:9, high resolution, crisp readable typography. Match the existing Seibi presentation: warm-white background, navy headings, teal diagrams, muted orange for conditions. Running English title exact 'Seibi Cubicle Logging System', top-right page NN / 19, Japanese topic headline. Dense but legible, aligned flat editorial composition, useful technical diagrams. All technical diagrams are conceptual illustrations, not fabricated product photos or claims of observed events. Logger is white rounded rectangular case based on the supplied product, environmental sensor mounted INSIDE red PCB, CT external. No invented antenna. Write only the expressly requested facts; no extra assertions, fake matrix, made-up dates or stages. Diagrams can use arrows where technically useful; communication arrows correct. Full opaque slide. Footer 'loggerGatewayOverview2／2026-10-13'. Render Japanese text exactly. Do not render English prompt instructions.
If a Logger product picture is needed, use the exact supplied real red-PCB top-down photo as product identity. Never invent a different Logger case or antenna. For purely abstract data/Flash diagrams, use abstract symbols, not fake product photographs.
STRICT: no invented SEIBI brand logos, no slogans, no extra product housings. No more text than requested. Do not portray GW2 as a fictional commercial box. Gateway is conceptual Pi Zero2W board or simple labeled block. Logger appears only as supplied red-PCB source photo or abstract block labeled Logger. Do not confuse snapshot with packing: save the new record first, then freeze snapshot. Reproduce only actual protocol identifiers and counts.
Use case: compositing and text-localization. Image1 is old slide edit target, Image2 is exact Logger product photo supporting insert. Preserve original Image1 sparse composition, diagram flow, colors and type style, but replace all content with updated verified Japanese content below. Remove all old dated validation statements. Page 3/19. Japanese headline '計測周期と16Bレコード構造'.
RTC時刻信頼検査、SMP計測とFlash保存、snapshot固定、必要時BLE、Flash後処理とUNSENT確定、次回起床予約とDeep Sleepの図。RTC未信頼の起動はBLE時刻同期後も採取せずsleep。16B帯：時刻4B、温度1B、湿度1B、気圧1B、R/S/T6B、電源1B、CRC2B。timeSecは2026-01-01 UTC起点。ADCは校正済みcountでAへの換算は後段。電源0..100推定％、FE external、FF unknown。注『AUTO分類は電圧しきい値による。外部3.1Vでも電池側に分類され得る』。
Very strict: only ONE cubicle with exactly THREE CT rings on R/S/T, SAME single Logger receives all3 channels. All product illustrations of Logger use Image2 exact red PCB; environment sensor is on PCB not external. Do not draw CT where not needed on slides2-4. No invented SEIBI logo, slogans, battery, housing or gateway antenna. TIGER whole box contains core Telegraf/InfluxDB/Grafana, NOT decoder-only. For slide3 explicit SMP includes measurement then Flash save then snapshot BEFORE BLE; after BLE apply marks then UNSENT before SLP. For slide4 depict Gateway as simple abstract labeled block, no router antenna. Quote only requested text.
```

```text
Change ONLY lower-center UARTログ例 panel to exact actual example text 'SMP| START → SMP| SAVED → BLE| DONE → LOG| UNSENT n → SLP| ENTER'. No SNAP marker, no standalone LOG→UNSENT invented markers. If arrows don't fit put on two lines. All other content unchanged.
```

```text
Edit ONLY lower-right 計測構成 diagram in this slide3. Move exact red-PCB Logger picture to LEFT side of this panel without mirroring it; its 3 white connectors physically remain on RIGHT edge of board. Place R/S/T three vertical conductors with one CT ring EACH to RIGHT of Logger. Draw exactly3 CT cables leaving Logger RIGHT-side connector toward RIGHT and connect each tooneCT. Each CT measuresdifferentphaseR/S/T, same1Logger. Photo mustnot be horizontallyflipped or rotated. Keep alloutsidepanel text/layout/bytearray/RTC→SMP→BLE→Flash→SLP flowandUARTexample pixel-equivalent. Diagram label 'Logger（環境センサー内蔵）' underboard; 'CT（外付け）' underrings. No extraTIGER ornewassertions.
```

## 04 保存確認を伴うBLE回収

```text
Create ONE finished widescreen Japanese technical presentation slide, approximately 16:9, high resolution, crisp readable typography. Match the existing Seibi presentation: warm-white background, navy headings, teal diagrams, muted orange for conditions. Running English title exact 'Seibi Cubicle Logging System', top-right page NN / 19, Japanese topic headline. Dense but legible, aligned flat editorial composition, useful technical diagrams. All technical diagrams are conceptual illustrations, not fabricated product photos or claims of observed events. Logger is white rounded rectangular case based on the supplied product, environmental sensor mounted INSIDE red PCB, CT external. No invented antenna. Write only the expressly requested facts; no extra assertions, fake matrix, made-up dates or stages. Diagrams can use arrows where technically useful; communication arrows correct. Full opaque slide. Footer 'loggerGatewayOverview2／2026-10-13'. Render Japanese text exactly. Do not render English prompt instructions.
If a Logger product picture is needed, use the exact supplied real red-PCB top-down photo as product identity. Never invent a different Logger case or antenna. For purely abstract data/Flash diagrams, use abstract symbols, not fake product photographs.
STRICT: no invented SEIBI brand logos, no slogans, no extra product housings. No more text than requested. Do not portray GW2 as a fictional commercial box. Gateway is conceptual Pi Zero2W board or simple labeled block. Logger appears only as supplied red-PCB source photo or abstract block labeled Logger. Do not confuse snapshot with packing: save the new record first, then freeze snapshot. Reproduce only actual protocol identifiers and counts.
Use case: compositing and text-localization. Image1 is old slide edit target, Image2 is exact Logger product photo supporting insert. Preserve original Image1 sparse composition, diagram flow, colors and type style, but replace all content with updated verified Japanese content below. Remove all old dated validation statements. Page 4/19. Japanese headline '保存確認を伴うBLE回収'.
Logger左、GW2右のシーケンス：16B Notify（左から右）、GW2の長さ・CRC・時刻品質・測定値範囲・SQLite保存確認、DONE件数照合、COMMIT_TRANSFER（右から左）、Logger RAM予約と応答（左から右）、BLE終了後に送信済みbitmapをFlash反映。重複受理で二重行を抑える。保存後COMMIT前停止は再送して照合。別枠『隔離保存も受理件数に含み得る。COMMITと正常データ公開は別の判定』。COMMITは即時消去ではない。矢印方向正確。
Very strict: only ONE cubicle with exactly THREE CT rings on R/S/T, SAME single Logger receives all3 channels. All product illustrations of Logger use Image2 exact red PCB; environment sensor is on PCB not external. Do not draw CT where not needed on slides2-4. No invented SEIBI logo, slogans, battery, housing or gateway antenna. TIGER whole box contains core Telegraf/InfluxDB/Grafana, NOT decoder-only. For slide3 explicit SMP includes measurement then Flash save then snapshot BEFORE BLE; after BLE apply marks then UNSENT before SLP. For slide4 depict Gateway as simple abstract labeled block, no router antenna. Quote only requested text.
```

## 05 停止条件に基づく保存設計

```text
Create ONE finished widescreen Japanese technical presentation slide, approximately 16:9, high resolution, crisp readable typography. Match the existing Seibi presentation: warm-white background, navy headings, teal diagrams, muted orange for conditions. Running English title exact 'Seibi Cubicle Logging System', top-right page NN / 19, Japanese topic headline. Dense but legible, aligned flat editorial composition, useful technical diagrams. All technical diagrams are conceptual illustrations, not fabricated product photos or claims of observed events. Logger is white rounded rectangular case based on the supplied product, environmental sensor mounted INSIDE red PCB, CT external. No invented antenna. Write only the expressly requested facts; no extra assertions, fake matrix, made-up dates or stages. Diagrams can use arrows where technically useful; communication arrows correct. Full opaque slide. Footer 'loggerGatewayOverview2／2026-10-13'. Render Japanese text exactly. Do not render English prompt instructions.
If a Logger product picture is needed, use the exact supplied real red-PCB top-down photo as product identity. Never invent a different Logger case or antenna. For purely abstract data/Flash diagrams, use abstract symbols, not fake product photographs.
STRICT: no invented SEIBI brand logos, no slogans, no extra product housings. No more text than requested. Do not portray GW2 as a fictional commercial box. Gateway is conceptual Pi Zero2W board or simple labeled block. Logger appears only as supplied red-PCB source photo or abstract block labeled Logger. Do not confuse snapshot with packing: save the new record first, then freeze snapshot. Reproduce only actual protocol identifiers and counts.
Create page 5/19 with headline '停止条件に基づく保存設計'. Use clean academic flat technical layout, abstract data blocks/tables ONLY. NO Logger photo, NO CT/device illustration, NO fake logo, NO Seibi company slogan. Render only audience-facing facts below, not instructions. Leave out instructions such as '追加しない' and '掲載しない'.
4行の表。停止条件｜着想｜実装方式：Flash更新中の停止｜更新前ページを確保｜循環undo journal。通信断による滞留｜現在の状態から回収｜最新優先選択。Gateway保存後の停止｜保存確認後に確定｜SQLite transaction後COMMIT_TRANSFER。復元中の再停止｜復元元を保持｜pinned backup。同じ表の下に抽象ブロックのみ：Logger Flash→GW2 SQLite→MQTT→TIGER。注記『方式と限定試験の説明であり、任意の物理電源断を受入済みではない』。
```

```text
Edit this finished Japanese slide, preserve style/unalteredtext. Precise technical correction: Keep entire table andfootnote. Replace bottom flow with Logger Flash→GW2SQLite→TIGER containing Mosquitto（MQTT broker）→データ処理→Telegraf→InfluxDB→Grafana. Make TIGER encompassing rightmostsystem block,broker inside. NoindependentMQTT component outsideTIGER.. NeverrenderEnglishinstructions. TIGER=whole Mosquitto+Telegraf+InfluxDB+Grafana system. Mosquitto is IN the system boundary. Noothernewnumbers.
```

## 06 256Bページで記録と管理を集約

```text
Create ONE finished widescreen Japanese technical presentation slide, approximately 16:9, high resolution, crisp readable typography. Match the existing Seibi presentation: warm-white background, navy headings, teal diagrams, muted orange for conditions. Running English title exact 'Seibi Cubicle Logging System', top-right page NN / 19, Japanese topic headline. Dense but legible, aligned flat editorial composition, useful technical diagrams. All technical diagrams are conceptual illustrations, not fabricated product photos or claims of observed events. Logger is white rounded rectangular case based on the supplied product, environmental sensor mounted INSIDE red PCB, CT external. No invented antenna. Write only the expressly requested facts; no extra assertions, fake matrix, made-up dates or stages. Diagrams can use arrows where technically useful; communication arrows correct. Full opaque slide. Footer 'loggerGatewayOverview2／2026-10-13'. Render Japanese text exactly. Do not render English prompt instructions.
If a Logger product picture is needed, use the exact supplied real red-PCB top-down photo as product identity. Never invent a different Logger case or antenna. For purely abstract data/Flash diagrams, use abstract symbols, not fake product photographs.
STRICT: no invented SEIBI brand logos, no slogans, no extra product housings. No more text than requested. Do not portray GW2 as a fictional commercial box. Gateway is conceptual Pi Zero2W board or simple labeled block. Logger appears only as supplied red-PCB source photo or abstract block labeled Logger. Do not confuse snapshot with packing: save the new record first, then freeze snapshot. Reproduce only actual protocol identifiers and counts.
Create page 6/19 with headline '256Bページで記録と管理を集約'. Use clean academic flat technical layout, abstract data blocks/tables ONLY. NO Logger photo, NO CT/device illustration, NO fake logo, NO Seibi company slogan. Render only audience-facing facts below, not instructions. Leave out instructions such as '追加しない' and '掲載しない'.
左は1ページ16B header+16B×15record=256B。レコードは01,02,03,…,15の省略表記。header: sequence／CRC／15bit送信済みbitmap（1record＝1bit）。中央はレコード内容を保持してbitmapを更新する模式図。右表data30,720ページ×15=460,800件、毎分1件で320日容量換算。下部連続32件最大3page／疎な32件最大32page。注記『320日は保存容量の換算値。電池寿命・Flash寿命・送信対象期間とは別』。他のシステム図不要。
```

## 07 循環undo journalの更新手順

```text
Create ONE finished widescreen Japanese technical presentation slide, approximately 16:9, high resolution, crisp readable typography. Match the existing Seibi presentation: warm-white background, navy headings, teal diagrams, muted orange for conditions. Running English title exact 'Seibi Cubicle Logging System', top-right page NN / 19, Japanese topic headline. Dense but legible, aligned flat editorial composition, useful technical diagrams. All technical diagrams are conceptual illustrations, not fabricated product photos or claims of observed events. Logger is white rounded rectangular case based on the supplied product, environmental sensor mounted INSIDE red PCB, CT external. No invented antenna. Write only the expressly requested facts; no extra assertions, fake matrix, made-up dates or stages. Diagrams can use arrows where technically useful; communication arrows correct. Full opaque slide. Footer 'loggerGatewayOverview2／2026-10-13'. Render Japanese text exactly. Do not render English prompt instructions.
If a Logger product picture is needed, use the exact supplied real red-PCB top-down photo as product identity. Never invent a different Logger case or antenna. For purely abstract data/Flash diagrams, use abstract symbols, not fake product photographs.
STRICT: no invented SEIBI brand logos, no slogans, no extra product housings. No more text than requested. Do not portray GW2 as a fictional commercial box. Gateway is conceptual Pi Zero2W board or simple labeled block. Logger appears only as supplied red-PCB source photo or abstract block labeled Logger. Do not confuse snapshot with packing: save the new record first, then freeze snapshot. Reproduce only actual protocol identifiers and counts.
Create page 7/19 with headline '循環undo journalの更新手順'. Use clean academic flat technical layout, abstract data blocks/tables ONLY. NO Logger photo, NO CT/device illustration, NO fake logo, NO Seibi company slogan. Render only audience-facing facts below, not instructions. Leave out instructions such as '追加しない' and '掲載しない'.
正確な順序の3段階横図：1 descriptorへ更新計画を記録（対象page・sequence・OLD/NEW fingerprint）→2 OLD target256Bをbackupへ退避してreadback照合→3 NEW target256Bを対象pageへ書込みreadback照合。descriptorは先、target更新は最後。データ30,720page／backup1,024page／metadata1,024pageの領域表（縮尺非対応）。descriptor256B＝本体250B＋末尾6B、末尾の用途は記載不要。保護対象：追記・ページ再使用・送信済みmark・管理情報。『電源断後はOLD/NEWとbackupを照合して採用状態を判定する』『物理page-program途中の遮断と全体0Vは未受入』。
```

## 08 起動時の復旧判定

```text
Create ONE finished widescreen Japanese technical presentation slide, approximately 16:9, high resolution, crisp readable typography. Match the existing Seibi presentation: warm-white background, navy headings, teal diagrams, muted orange for conditions. Running English title exact 'Seibi Cubicle Logging System', top-right page NN / 19, Japanese topic headline. Dense but legible, aligned flat editorial composition, useful technical diagrams. All technical diagrams are conceptual illustrations, not fabricated product photos or claims of observed events. Logger is white rounded rectangular case based on the supplied product, environmental sensor mounted INSIDE red PCB, CT external. No invented antenna. Write only the expressly requested facts; no extra assertions, fake matrix, made-up dates or stages. Diagrams can use arrows where technically useful; communication arrows correct. Full opaque slide. Footer 'loggerGatewayOverview2／2026-10-13'. Render Japanese text exactly. Do not render English prompt instructions.
If a Logger product picture is needed, use the exact supplied real red-PCB top-down photo as product identity. Never invent a different Logger case or antenna. For purely abstract data/Flash diagrams, use abstract symbols, not fake product photographs.
STRICT: no invented SEIBI brand logos, no slogans, no extra product housings. No more text than requested. Do not portray GW2 as a fictional commercial box. Gateway is conceptual Pi Zero2W board or simple labeled block. Logger appears only as supplied red-PCB source photo or abstract block labeled Logger. Do not confuse snapshot with packing: save the new record first, then freeze snapshot. Reproduce only actual protocol identifiers and counts.
Create page 8/19 with headline '起動時の復旧判定'. Use clean academic flat technical layout, abstract data blocks/tables ONLY. NO Logger photo, NO CT/device illustration, NO fake logo, NO Seibi company slogan. Render only audience-facing facts below, not instructions. Leave out instructions such as '追加しない' and '掲載しない'.
中央フロー：metadata1,024個の16B header走査→最新descriptor完全検証→target fingerprint照合。NEW一致→COMMIT（更新後採用）、OLD一致→ROLLBACK（更新前採用）、どちらでもない＋backup有効→RESTORE。復元元backupを保持し復元中の再停止に備える。I/O異常／backup不正／曖昧な状態→安全停止、自動formatしない。結語『信頼できる状態だけで運転を再開』。注記『保存前のRAMデータまで救済する保証ではない』。保守PC設定機能など追加しない。
```

## 09 Flash更新予算と保守条件

```text
Create ONE finished widescreen Japanese technical presentation slide, approximately 16:9, high resolution, crisp readable typography. Match the existing Seibi presentation: warm-white background, navy headings, teal diagrams, muted orange for conditions. Running English title exact 'Seibi Cubicle Logging System', top-right page NN / 19, Japanese topic headline. Dense but legible, aligned flat editorial composition, useful technical diagrams. All technical diagrams are conceptual illustrations, not fabricated product photos or claims of observed events. Logger is white rounded rectangular case based on the supplied product, environmental sensor mounted INSIDE red PCB, CT external. No invented antenna. Write only the expressly requested facts; no extra assertions, fake matrix, made-up dates or stages. Diagrams can use arrows where technically useful; communication arrows correct. Full opaque slide. Footer 'loggerGatewayOverview2／2026-10-13'. Render Japanese text exactly. Do not render English prompt instructions.
If a Logger product picture is needed, use the exact supplied real red-PCB top-down photo as product identity. Never invent a different Logger case or antenna. For purely abstract data/Flash diagrams, use abstract symbols, not fake product photographs.
STRICT: no invented SEIBI brand logos, no slogans, no extra product housings. No more text than requested. Do not portray GW2 as a fictional commercial box. Gateway is conceptual Pi Zero2W board or simple labeled block. Logger appears only as supplied red-PCB source photo or abstract block labeled Logger. Do not confuse snapshot with packing: save the new record first, then freeze snapshot. Reproduce only actual protocol identifiers and counts.
Create page 9/19 with headline 'Flash更新予算と保守条件'. Use clean academic flat technical layout, abstract data blocks/tables ONLY. NO Logger photo, NO CT/device illustration, NO fake logo, NO Seibi company slogan. Render only audience-facing facts below, not instructions. Leave out instructions such as '追加しない' and '掲載しない'.
3つの概念図：同一pageのbitmap更新を集約、journal/backup対を循環、data-sector更新数・異常debt・非常復元予算を永続管理。保守条件は使用可能対512未満／debt上限／単調counter上限。上限に達した信頼済み状態はGET_STATUS/PING限定、I/O異常・corruptは通常BLE停止。『期限切れだけを理由にdataページを消去しない』『摩耗予算は設計モデル。実機寿命保証は別確認』。計算されていない寿命数値は入れない。
```

```text
Edit ONLY technical mistakes, keep typography/colors/footer. Replace whole center journal/backup pictorial panel with a simple circular chain of PAIRS labeled 'pair0','pair1','…','pair1023', subtitle '1,024組のmetadata／backup対を循環' (pairs are not alternating just2pages). Each pair contains descriptor metadata + backup of old DATA page, never label them Data(bitmap). Replace LEFT page picture labels with 'Header 16B（送信済みbitmap）' and 'Records（内容保持）', no CRC footer outsideheader. Top subtitle replace '同一ページの更新を集約し、循環運用と保守条件で更新予算を管理します'. Preserve512maintenancecondition andGET_STATUS/PING/safety wording. No fake logos.
```

## 10 最新優先回収と未送信の自己照合

```text
Create ONE finished widescreen Japanese technical presentation slide, approximately 16:9, high resolution, crisp readable typography. Match the existing Seibi presentation: warm-white background, navy headings, teal diagrams, muted orange for conditions. Running English title exact 'Seibi Cubicle Logging System', top-right page NN / 19, Japanese topic headline. Dense but legible, aligned flat editorial composition, useful technical diagrams. All technical diagrams are conceptual illustrations, not fabricated product photos or claims of observed events. Logger is white rounded rectangular case based on the supplied product, environmental sensor mounted INSIDE red PCB, CT external. No invented antenna. Write only the expressly requested facts; no extra assertions, fake matrix, made-up dates or stages. Diagrams can use arrows where technically useful; communication arrows correct. Full opaque slide. Footer 'loggerGatewayOverview2／2026-10-13'. Render Japanese text exactly. Do not render English prompt instructions.
If a Logger product picture is needed, use the exact supplied real red-PCB top-down photo as product identity. Never invent a different Logger case or antenna. For purely abstract data/Flash diagrams, use abstract symbols, not fake product photographs.
STRICT: no invented SEIBI brand logos, no slogans, no extra product housings. No more text than requested. Do not portray GW2 as a fictional commercial box. Gateway is conceptual Pi Zero2W board or simple labeled block. Logger appears only as supplied red-PCB source photo or abstract block labeled Logger. Do not confuse snapshot with packing: save the new record first, then freeze snapshot. Reproduce only actual protocol identifiers and counts.
Create page 10/19 with headline '最新優先回収と未送信の自己照合'. Use clean academic flat technical layout, abstract data blocks/tables ONLY. NO Logger photo, NO CT/device illustration, NO fake logo, NO Seibi company slogan. Render only audience-facing facts below, not instructions. Leave out instructions such as '追加しない' and '掲載しない'.
回収モデル：新規5件＋滞留27件＝32件。毎枠32件成功なら滞留は理論上27件/5分減少。フロー：SMPで新規保存→snapshot固定→最新未送信選択→期待件数不一致ならbitmap再集計・System Info修復→一度再選択。『LOG| UNSENT n はBLE後Flash処理済みの確定値』。満杯時：最古15件を未送信も含めて破棄し新規1件保存。注記『無期限の全履歴保持は保証しない。長い転送済みgapを飛ばすcursor走査は未実装』。
```

```text
Edit ONLY middle 回収フロー. On decision '期待件数と一致?' yes branch MUST go straight to existing final '送信処理へ' block. no branch remains bitmap再集計/SystemInfo修復 then '一度再選択' then送信処理へ. Route lines clearly without crossing. Change '(新規5件)' in firstSMP box to '(新規レコード)' because SMP saves1 not5. Preserve left5minutes model and allothertext.
```

## 11 品質検証・永続キュー・再送処理

```text
Create one Japanese academic widescreen16:9 slide white/navy/teal/orange style matching preceding Seibi technicalslides. Page11/19, topSeibi Cubicle Logging System. Headline '品質検証・永続キュー・再送処理'. FooterloggerGatewayOverview2/2026-10-13. Abstract blockdiagram and flat threecolumntext. No device pictures. Only audiencefacingcontentbelow. Routingexact: Logger NEVERMQTT, itBLEtoGW. TIGERentirecontainerincludesMosquittoandcore. Visualarrowscorrect. Noinventedqualitylabels.
GW2の受理・再送、TIGERの受信・変換・蓄積を別段階で管理する。
上段構成：Logger Flash → BLE → GW2 SQLite → MQTT → TIGERの大きな枠。TIGER枠内にMosquitto（MQTT broker）、/LB受信spool、データ変換、Telegraf、InfluxDB、Grafana。GatewayからMosquittoに/L・/LB入力。/LB受信部から/D JSONを同じMosquittoに再publishし、Telegrafが/Dを購読してInfluxDBへ保存、Grafanaで可視化。
下段3列：
GW2品質検証：CRC、時刻の信頼性、未来30秒、測定値範囲。SQLiteにtime/field品質を保存。futureを信頼時計で再評価・監査。unverifiedは自動昇格しない。
GW2再送：CONNACKで接続確認。PUBACK後のみpublished。失敗時60/120/240/480/900秒＋jitter。pending/failedを年齢だけで削除しない。
TIGER /LB永続化：spoolのSQLite commit後に受信ACK。/DのPUBACK後に完了。未完了は再起動後に再開。
注記：brokerのACKとInfluxDB永続化は別段階。
```

```text
Edit ONLY topTIGERrouting and future thresholdrow. Change title'TIGER（コンテナ環境）' to'TIGER（全システム）'. Change orange/LB受信spoolbox to '/LB受信・変換／spool（SQLite）'. Change nextデータ変換block to 'Mosquitto／D（同じbroker）', so visualsequenceMosquitto input→spool/変換→sameMosquitto/D→Telegraf(/D購読)→InfluxDB→Grafana. Remove oldspool→inputMosquitto reverse/Darrow ifitconflicts, onlyforwardexactsequence with samebroker noted. Replace未来30秒のデータは保留 with '信頼時刻より30秒を超える未来データを保留'. Allbottompolicy/stats/colors unchanged.
```

## 12 複数ロガーの通信時刻を管理

```text
Create ONE finished widescreen Japanese technical presentation slide, approximately 16:9, high resolution, crisp readable typography. Match the existing Seibi presentation: warm-white background, navy headings, teal diagrams, muted orange for conditions. Running English title exact 'Seibi Cubicle Logging System', top-right page NN / 19, Japanese topic headline. Dense but legible, aligned flat editorial composition, useful technical diagrams. All technical diagrams are conceptual illustrations, not fabricated product photos or claims of observed events. Logger is white rounded rectangular case based on the supplied product, environmental sensor mounted INSIDE red PCB, CT external. No invented antenna. Write only the expressly requested facts; no extra assertions, fake matrix, made-up dates or stages. Diagrams can use arrows where technically useful; communication arrows correct. Full opaque slide. Footer 'loggerGatewayOverview2／2026-10-13'. Render Japanese text exactly. Do not render English prompt instructions.
If a Logger product picture is needed, use the exact supplied real red-PCB top-down photo as product identity. Never invent a different Logger case or antenna. For purely abstract data/Flash diagrams, use abstract symbols, not fake product photographs.
STRICT: no invented SEIBI brand logos, no slogans, no extra product housings. No more text than requested. Do not portray GW2 as a fictional commercial box. Gateway is conceptual Pi Zero2W board or simple labeled block. Logger appears only as supplied red-PCB source photo or abstract block labeled Logger. Do not confuse snapshot with packing: save the new record first, then freeze snapshot. Reproduce only actual protocol identifiers and counts.
Create page 12/19 with headline '複数ロガーの通信時刻を管理'. Clean academic flat technical layout, abstract data blocks/tables ONLY. NO device photos, NO CT/device illustration, NO logos or Seibi slogans. Show only audience-facing facts, never render prompt directions. TIGER whole system contains core Telegraf+InfluxDB+Grafana. Use listed data precisely. No invented sums or timelines.
GW2→Logger1/2/3/4は単純な抽象ブロック。理想配置floor(300×i/n)、4台例0/75/150/225秒の1本のタイムライン。『実割当は採取境界・通信時間余裕を考慮して調整』実際の割当時刻の図は作らない。『4台限定実績。managed schedule設定は最大4台。登録allowlist上限32台とは別』。下部32台設計課題：16group・300秒/group＝4,800秒（80分）。1台80件/80分、1接続上限32件→48件不足→最低3接続/周期＋再試行余裕。『32台運用は設計目標、容量・5分BLE要件の整合を要検討』。
```

```text
Edit this finished Japanese slide, preserve style/unalteredtext. Precise technical correction: Keep all upper schedulingdiagram and32table. In bottom-left TIGERdiagram add Mosquitto（MQTT broker）INSIDE TIGER beforeTelegraf→InfluxDB→Grafana. MQTTarrow fromGW2 entersMosquitto. Rename timeline heading '4台の理想配置例（周期300秒）', notactualassignment. Keep tablefuture32boundaries. Noexternalbroker.. NeverrenderEnglishinstructions. TIGER=whole Mosquitto+Telegraf+InfluxDB+Grafana system. Mosquitto is IN the system boundary. Noothernewnumbers.
```

## 13 停止位置と入力条件を変えたPC検証

```text
Create ONE finished widescreen Japanese technical presentation slide, approximately 16:9, high resolution, crisp readable typography. Match the existing Seibi presentation: warm-white background, navy headings, teal diagrams, muted orange for conditions. Running English title exact 'Seibi Cubicle Logging System', top-right page NN / 19, Japanese topic headline. Dense but legible, aligned flat editorial composition, useful technical diagrams. All technical diagrams are conceptual illustrations, not fabricated product photos or claims of observed events. Logger is white rounded rectangular case based on the supplied product, environmental sensor mounted INSIDE red PCB, CT external. No invented antenna. Write only the expressly requested facts; no extra assertions, fake matrix, made-up dates or stages. Diagrams can use arrows where technically useful; communication arrows correct. Full opaque slide. Footer 'loggerGatewayOverview2／2026-10-13'. Render Japanese text exactly. Do not render English prompt instructions.
If a Logger product picture is needed, use the exact supplied real red-PCB top-down photo as product identity. Never invent a different Logger case or antenna. For purely abstract data/Flash diagrams, use abstract symbols, not fake product photographs.
STRICT: no invented SEIBI brand logos, no slogans, no extra product housings. No more text than requested. Do not portray GW2 as a fictional commercial box. Gateway is conceptual Pi Zero2W board or simple labeled block. Logger appears only as supplied red-PCB source photo or abstract block labeled Logger. Do not confuse snapshot with packing: save the new record first, then freeze snapshot. Reproduce only actual protocol identifiers and counts.
Create page 13/19 with headline '停止位置と入力条件を変えたPC検証'. Clean academic flat technical layout, abstract data blocks/tables ONLY. NO device photos, NO CT/device illustration, NO logos or Seibi slogans. Show only audience-facing facts, never render prompt directions. TIGER whole system contains core Telegraf+InfluxDB+Grafana. Use listed data precisely. No invented sums or timelines.
過去Logger host記録は独立表：更新中停止771条件、RESTORE中停止514条件、30,720page fixture、選択・COMMIT750条件、unittest70件（各群合算しない、保存済み記録）。771/514はページ数ではなく停止条件数。今回PC回帰：GW2 479tests OK Python3.13 2026-10-13／TIGER57tests OK 2026-10-13。抽象図のみ模擬BLE/MQTT＋一時SQLite。境界入力・CRC・未来30/31秒・再開・PUBACK・原子的更新。注記『PC試験は物理電源断を含まない。Logger過去試験は今回再実行していない』。
```

```text
Edit this finished Japanese slide, preserve style/unalteredtext. Precise technical correction: Keep all test result numbersand historicaltable. Simplify left PC検証環境 diagram to mockLogger↔mockBLE↔GW2ソフトウェア＋一時SQLite↔mockMQTT↔TIGERソフトウェアテスト. Do NOT depict actual runningPi/Grafana/Influxservices as test setup. Under TIGER softwaretest box include definition '対象システム：Mosquitto・Telegraf・InfluxDB・Grafana'. Right result labelTIGER likewise addMosquitto into parentheticdefinition. Retain57tests,479testsanddate. All communication captions模擬.. NeverrenderEnglishinstructions. TIGER=whole Mosquitto+Telegraf+InfluxDB+Grafana system. Mosquitto is IN the system boundary. Noothernewnumbers.
```

## 14 4 Logger・160 recordのE2E照合

```text
Create ONE finished widescreen Japanese technical presentation slide, approximately 16:9, high resolution, crisp readable typography. Match the existing Seibi presentation: warm-white background, navy headings, teal diagrams, muted orange for conditions. Running English title exact 'Seibi Cubicle Logging System', top-right page NN / 19, Japanese topic headline. Dense but legible, aligned flat editorial composition, useful technical diagrams. All technical diagrams are conceptual illustrations, not fabricated product photos or claims of observed events. Logger is white rounded rectangular case based on the supplied product, environmental sensor mounted INSIDE red PCB, CT external. No invented antenna. Write only the expressly requested facts; no extra assertions, fake matrix, made-up dates or stages. Diagrams can use arrows where technically useful; communication arrows correct. Full opaque slide. Footer 'loggerGatewayOverview2／2026-10-13'. Render Japanese text exactly. Do not render English prompt instructions.
If a Logger product picture is needed, use the exact supplied real red-PCB top-down photo as product identity. Never invent a different Logger case or antenna. For purely abstract data/Flash diagrams, use abstract symbols, not fake product photographs.
STRICT: no invented SEIBI brand logos, no slogans, no extra product housings. No more text than requested. Do not portray GW2 as a fictional commercial box. Gateway is conceptual Pi Zero2W board or simple labeled block. Logger appears only as supplied red-PCB source photo or abstract block labeled Logger. Do not confuse snapshot with packing: save the new record first, then freeze snapshot. Reproduce only actual protocol identifiers and counts.
Create page 14/19 with headline '4 Logger・160 recordのE2E照合'. Clean academic flat technical layout, abstract data blocks/tables ONLY. NO device photos, NO CT/device illustration, NO logos or Seibi slogans. Show only audience-facing facts, never render prompt directions. TIGER whole system contains core Telegraf+InfluxDB+Grafana. Use listed data precisely. No invented sums or timelines.
2026-10-12一時batch_v1。表Logger L1..L4各expected40 actual40 matched40 不一致0 重複行0、合計160。検証段階はGW2元16B SHA・published→TIGER内spool・変換・/D PUBACK→TIGER内InfluxDB時刻・tags・7fields。TIGERは全システムTelegraf/InfluxDB/Grafana、InfluxをTIGER外部システムとして描かない。40分観測、78監視チェック、停止条件なし、raw16復帰。Influx証跡はユーザー実行Data Explorer結果。別注記『別の恒久切替試行はCUTOVER_STOP、原因未特定。限定データ経路合格と恒久運転・障害時・LTE実網の合格は別』。CUTOVER_STOPはコマンドではなく停止結果。
```

```text
Edit this finished Japanese slide, preserve style/unalteredtext. Precise technical correction: Keep entire160records matchingtable, 40minutes78checksandcaveats. Topdiagram TIGERouterbox mustcontain Mosquitto（MQTT broker）→データ処理（spool／変換）→Telegraf→InfluxDB→Grafana. Remove'/D PUBACK'caption onGW2-toTIGER link; put 'MQTT /LB' instead. /D PUBACK belongs to TIGERspool→Mosquittointernalpublishing, alreadyrightverificationboxes correct. Update topintroTIGERdefinition toincludeMosquitto. Nooutsidebroker.. NeverrenderEnglishinstructions. TIGER=whole Mosquitto+Telegraf+InfluxDB+Grafana system. Mosquitto is IN the system boundary. Noothernewnumbers.
```

## 15 小型MCUの実行時間とメモリ余裕

```text
Create ONE finished widescreen Japanese technical presentation slide, approximately 16:9, high resolution, crisp readable typography. Match the existing Seibi presentation: warm-white background, navy headings, teal diagrams, muted orange for conditions. Running English title exact 'Seibi Cubicle Logging System', top-right page NN / 19, Japanese topic headline. Dense but legible, aligned flat editorial composition, useful technical diagrams. All technical diagrams are conceptual illustrations, not fabricated product photos or claims of observed events. Logger is white rounded rectangular case based on the supplied product, environmental sensor mounted INSIDE red PCB, CT external. No invented antenna. Write only the expressly requested facts; no extra assertions, fake matrix, made-up dates or stages. Diagrams can use arrows where technically useful; communication arrows correct. Full opaque slide. Footer 'loggerGatewayOverview2／2026-10-13'. Render Japanese text exactly. Do not render English prompt instructions.
If a Logger product picture is needed, use the exact supplied real red-PCB top-down photo as product identity. Never invent a different Logger case or antenna. For purely abstract data/Flash diagrams, use abstract symbols, not fake product photographs.
STRICT: no invented SEIBI brand logos, no slogans, no extra product housings. No more text than requested. Do not portray GW2 as a fictional commercial box. Gateway is conceptual Pi Zero2W board or simple labeled block. Logger appears only as supplied red-PCB source photo or abstract block labeled Logger. Do not confuse snapshot with packing: save the new record first, then freeze snapshot. Reproduce only actual protocol identifiers and counts.
Create page 15/19 with headline '小型MCUの実行時間とメモリ余裕'. Clean academic flat technical layout, abstract data blocks/tables ONLY. NO device photos, NO CT/device illustration, NO logos or Seibi slogans. Show only audience-facing facts, never render prompt directions. TIGER whole system contains core Telegraf+InfluxDB+Grafana. Use listed data precisely. No invented sums or timelines.
過去計測2026-09-11 CUR-TIME32対象版、4独立カード：起動走査0.448870秒／32件選択0.140285秒／BLE後Flash1.546074秒／次分採取余裕28.700248秒。これらは別区間であり合計処理時間や1分中の時間線を作らない。stack2592B中2472B、残120B。heap peak1360B/span1564B、確保失敗0。ページcache・一括選択・workspace共有で20KB SRAMに実装。注記『特定版・条件の実測であり、現行全経路の最悪値や十分な余裕を保証しない』。
```

```text
Precise minimal edit of this technicalslide. In upperleft条件table replace row '対象構成｜4独立カード' with '対象件数｜32件'. Replace the instruction-like footnote below main時間table with '各値は別区間の実測。BLE通信等を含む全起動時間とは別'. Delete bottomleft repeated processing flow entirely and replace with explanation '起動走査と一括選択の実行時間を計測。ページcacheとworkspace共有を用いて実装。BLE後Flash処理と次分採取余裕を別に確認'. Do not create a sequence implying sumtiming, andnoextra unsupportedfigures. Retain main4timevaluesandstackheap,native20KBSRAMconceptwithlabel縮尺非対応 andfooter.
```

## 16 設計上の利点と適用限界

```text
Create ONE finished widescreen Japanese technical presentation slide, approximately 16:9, high resolution, crisp readable typography. Match the existing Seibi presentation: warm-white background, navy headings, teal diagrams, muted orange for conditions. Running English title exact 'Seibi Cubicle Logging System', top-right page NN / 19, Japanese topic headline. Dense but legible, aligned flat editorial composition, useful technical diagrams. All technical diagrams are conceptual illustrations, not fabricated product photos or claims of observed events. Logger is white rounded rectangular case based on the supplied product, environmental sensor mounted INSIDE red PCB, CT external. No invented antenna. Write only the expressly requested facts; no extra assertions, fake matrix, made-up dates or stages. Diagrams can use arrows where technically useful; communication arrows correct. Full opaque slide. Footer 'loggerGatewayOverview2／2026-10-13'. Render Japanese text exactly. Do not render English prompt instructions.
If a Logger product picture is needed, use the exact supplied real red-PCB top-down photo as product identity. Never invent a different Logger case or antenna. For purely abstract data/Flash diagrams, use abstract symbols, not fake product photographs.
STRICT: no invented SEIBI brand logos, no slogans, no extra product housings. No more text than requested. Do not portray GW2 as a fictional commercial box. Gateway is conceptual Pi Zero2W board or simple labeled block. Logger appears only as supplied red-PCB source photo or abstract block labeled Logger. Do not confuse snapshot with packing: save the new record first, then freeze snapshot. Reproduce only actual protocol identifiers and counts.
Create page 16/19 with headline '設計上の利点と適用限界'. Clean academic flat technical layout, abstract data blocks/tables ONLY. NO device photos, NO CT/device illustration, NO logos or Seibi slogans. Show only audience-facing facts, never render prompt directions. TIGER whole system contains core Telegraf+InfluxDB+Grafana. Use listed data precisely. No invented sums or timelines.
3柱：最新優先回収（最近の設備状態を優先）／Gateway SQLite保存後COMMIT_TRANSFER（受理確認）／曖昧なFlash状態で安全停止（無理な継続を避ける）。COMMITはCloudやTIGERの保存後に待って送るものではない。特長：循環undo journal、CRC・件数・品質照合、BLE/MQTT独立再送、TIGER内部の永続spool、個体別スケジュール。利点：通信断後の再開、異常段階の追跡、小型MCUで整合性判断。残る受入：物理page-program中遮断・全体0V／32台回収容量／0x3E根因／恒久batch運転。GatewayLTEは比較機でPi GW2と別。結語『設備状態を、保存と照合を重ねて届ける』。
```

```text
Edit this finished Japanese slide, preserve style/unalteredtext. Precise technical correction: Keep threeprinciples,benefitsandlimitations. Bottom-right wholeTIGERboxaddMosquitto（MQTT broker）INSIDE beforeTelegraf→InfluxDB→Grafana. MQTTbetweenGatewayandTIGER, but Logger↔Gateway communication is BLE ONLY, change both mistaken BLE/MQTT captions to BLE. Do not change SQLite-beforeCOMMIT policy. Preservefooter.. NeverrenderEnglishinstructions. TIGER=whole Mosquitto+Telegraf+InfluxDB+Grafana system. Mosquitto is IN the system boundary. Noothernewnumbers.
```

```text
Edit ONLY upperleft latestpriority diagram. VerticalstackolddataatTOP,newlatestatBOTTOM stays. Existing largearrowpointingUP to olddata is misleading. Change thatarrow to point DOWN toward bottom '最新データ', text '最新を優先して回収'. Allothertext/TIGERsystemincludesMosquitto and BLEonly labels anddate unchanged.
```

## 17 16Bを保ったMQTTまとめ送信

```text
Create one widescreen16:9 Japanese academic technical slide, matching original Seibi clean white, navy titles, teal schematic diagrams, orange conditions. Top 'Seibi Cubicle Logging System', page 17/19. Footer 'loggerGatewayOverview2 / 2026-10-13'. Headline '16Bを保ったMQTTまとめ送信'. Make useful flat editorial typesetting, tables and simple labeled blocks. STRICT NO product illustrations, NO photos of Logger/CT/Pi/cabinet, NO fictional logos. Text content is EXACT below, only this text. Preserve mathematics and units; conceptual block diagram only if asked in content. No extra field headers/sizes/figures. No sensor diagram or drawing of radio tower. Compose legibly.
GW2 → MQTT broker → TIGER（Telegraf・InfluxDB・Grafana）。経路は概念図。GW2が同一Loggerのレコードをまとめる。
/LB payload：version 1B ＋ count 1B ＋ raw 16B×N。N＝2..64、最大1026B。
1件：/L、payload16B。15件：/LB、242B。60件：/LB、962B。64件：/LB、1026B。
最大64件は梱包上限であり、64件が溜まるまで待つ条件ではない。
各レコードのCRC16を維持。追加CRC32なし。
TIGERの/LB受信部：永続spool保存後ACK → /D出力 → Telegraf → InfluxDB → Grafana。
利点：MQTT topic・制御・ACKの付随通信を複数件で分担。
確認範囲：4台160件の一時運転を限定照合。記録上はraw16へ復帰。恒久切替は未完了。
```

```text
Precise TIGERscope edit. Keep allLBpacketmath/rulesandlimits unchanged. In topGW2→MQTTbroker→TIGER path, move MQTTbroker Mosquitto INSIDE the enclosing TIGERsystembox andlabelit 'Mosquitto（MQTT broker）'. The Telegraf/InfluxDB/Grafana and /LBspool/decoder allalsoinsideTIGER. If TIGERdefinition currentlyshows3componentsaddMosquitto. /DoutputisMQTTpublishedviaMosquitto, notdirectInfluxDBwrite.. Replace subtitle 'GW2→MQTTbroker→TIGER...' with 'GW2→TIGER内のMosquitto→データ処理→Telegraf→InfluxDB→Grafana'. On right '/LB受信部' sequence '/D出力' annotate 'Mosquittoへpublish'. All packet mathandtable remain pixel-equivalent. Do not put externalbrokeroutsideTIGER.
```

## 18 1NCEの10年500MBと収容台数

```text
Create one widescreen16:9 Japanese academic technical slide, matching original Seibi clean white, navy titles, teal schematic diagrams, orange conditions. Top 'Seibi Cubicle Logging System', page 18/19. Footer 'loggerGatewayOverview2 / 2026-10-13'. Headline '1NCEの10年500MBと収容台数'. Make useful flat editorial typesetting, tables and simple labeled blocks. STRICT NO product illustrations, NO photos of Logger/CT/Pi/cabinet, NO fictional logos. Text content is EXACT below, only this text. Preserve mathematics and units; conceptual block diagram only if asked in content. No extra field headers/sizes/figures. No sensor diagram or drawing of radio tower. Compose legibly.
500MBは1枚のSIM全体の通信枠。配下の全Loggerの上り・下りを合算する。
計算条件：10年＝3652.5日、1MB＝1,000,000B、毎分1件16Bを全送信。
表『測定payloadのみの10年通信量』：1台84.15MB、2台168.31MB、4台336.61MB、8台673.23MB。
500MB予算：日平均136.9kB。20％予備を引いた400MB目標：日平均109.5kB。
8台の毎分全件送信は、測定payloadだけで500MBを超過。
まとめ送信は付随分を削減するが、16B測定本体は減らさない。
実通信はIP・TCP・MQTT・TLS・ACK・再送・接続・DNS・keepalive等も加算。
出典：1NCE公式、確認2026-10-13。試算であり実LTE計測値ではない。
```

## 19 500MBへ収める通信条件

```text
Create one widescreen16:9 Japanese academic technical slide, matching original Seibi clean white, navy titles, teal schematic diagrams, orange conditions. Top 'Seibi Cubicle Logging System', page 19/19. Footer 'loggerGatewayOverview2 / 2026-10-13'. Headline '500MBへ収める通信条件'. Make useful flat editorial typesetting, tables and simple labeled blocks. STRICT NO product illustrations, NO photos of Logger/CT/Pi/cabinet, NO fictional logos. Text content is EXACT below, only this text. Preserve mathematics and units; conceptual block diagram only if asked in content. No extra field headers/sizes/figures. No sensor diagram or drawing of radio tower. Compose legibly.
毎分採取・通常5分BLEを維持し、GatewayでMQTT送信を集約する設計例。
表『1SIM全体の10年概算』：2台／15分送信／660.6MB／超過、2台／60分送信／291.4MB／400MB目標内の候補、4台／60分送信／495.1MB／予備余裕不足。
モデル条件：10年3652.5日、各PUBLISH付随200B、Gateway接続1000B／回、毎枠1接続。再送・常時通信等は未算入。これは仮定値で実測ではない。
60分では1 Loggerあたり60レコード、/LB payload962B（2＋16×60）。
2台60分・400MB目標・PUBLISH付随200B・その他通信未算入なら、接続付随平均2239B／回以下が条件。
TLSを維持し、接続再利用・送信周期・SIM分散を評価する。
LTE IPの両方向captureと1NCE Portal差分照合で実条件を確定。
60分送信は設計シナリオであり、現行設定や10年保証を示さない。
```

## P.1・P.2の個別修正（2026-10-13）

## 全ページのGateway機種統一（2026-10-13）

全19枚を目視確認し、公開ページから旧機種注記を除去。正式名称はRaspberry Pi Zero 2 W。P.1・P.2・P.4の実機画像は同じ公式写真を参照。P.12・P.14・P.16は概念図の機種表記を修正。その他の13枚には旧機種の表記・写真がないため保持した。過去の編集プロンプトに旧名が残っていても現行スライドの仕様として扱わない。

index.htmlのタイトルと上部見出しはInside Seibi Cubicle Logging System。スライド本文のタイトルは変更していない。

### P.1

```text
Precise minimal edit of a finished Japanese presentation. Image1 edit target, Image2 exact official Pi Zero 2 W photograph supporting insert. In the bottom-right numbered item5, REPLACE all 'GW1 Pi4Bは別実装' text with exactly 'ゲートウェイ' on firstline and 'Raspberry Pi Zero 2 W' on secondline. Fit naturally atsameposition withoutoverlap. No GW1 or4B mention remains anywhere. In main gateway heading use spaced 'Raspberry Pi Zero 2 W' ifnotalready. Preserve actual diagonalPiZero2Wphoto and entireTIGERorange RECTANGLE, allotherwords/numbers/3CT/Loggerphoto andarrows unchanged. Fullopaque1672x941. Keep all unrequested content unchanged.
```

### P.2

```text
Precise minimal edit of a finished Japanese presentation. Image1 edit target, Image2 exact official Pi Zero 2 W photograph supporting insert. Change ONLY small bottom-right GW2flowbox's compact 'Pi Zero2 W' caption to exactly 'Pi Zero 2 W', withspaces. Topphoto and mainname 'Raspberry Pi Zero 2 W' and tables stayunchanged. Do notaddGW1/4B. Nootheredits. Fullopaque1672x941. Keep all unrequested content unchanged.
```

### P.4

```text
Precise minimal edit of a finished Japanese presentation. Image1 edit target, Image2 exact official Pi Zero 2 W photograph supporting insert. Replace ONLY Gateway green top-down motherboard illustration in right-side lane with cropped ORIGINAL Image2 Pi Zero 2 W OFFICIALPHOTOGRAPH, retaining original diagonal threequarterangle/componenttexture/boardshape/aspectratio. No inventedports, nofullsizeUSB orEthernet; itisnotPi4B. Fit its existingphoto slot withoutoverlapwithlaneheaderor'GW2'caption, preserve all protocol arrows/captions/SQLiteicon andleftLoggerphoto. Nootherwordsortablesedited. Fullopaque1672x941. Keep all unrequested content unchanged.
```

### P.12

```text
Precise text-localization edit of finished Japanese slide. ONLY standardize model lettering in BOTH existingGW2block captions. They must read 'Raspberry Pi' on oneline and 'Zero 2 W' on nextline, spacesbetweenZero,2,W. The upperleft and bottomleftdiagram blocks bothrefer tosameactualRaspberry Pi Zero 2 W. Keepabstractblockshapes,ALLnumbers0/75/150/225/300, capacity80/32/48,3connections andconditions, arrows/TIGERboundaries unchanged. No hardwarepicture needed in conceptualflow. Sameopaque1672x941size. Absolutelynoothernewtextornumbers.
```

### P.14

```text
Precise text-localization edit of finished Japanese slide. ONLY standardize the smallGW2caption in topdataflow block from 'Pi Zero2W' to 'Pi Zero 2 W'. No4B. Preserve ALL160record table40each,stageboundariesandMosquittoinsideTIGER,40min78checks, limitationsdateandwordingunchanged. Sameopaque1672x941size. Absolutelynoothernewtextornumbers.
```

### P.16

```text
Precise text-localization edit of finished Japanese slide. ONLY standardize bottom-right Gateway block's '(Pi Zero2W)' caption to '(Pi Zero 2 W)'. Fullmodel is Raspberry Pi Zero 2 W. KeepBLEonly betweenLoggerGateway, MQTTtoTIGER,MosquittoinsideTIGER,andallpolicies/conditions/diagrampositions unchanged. Sameopaque1672x941size. Absolutelynoothernewtextornumbers.
```

```text
Precise text-only edit of this slide14. In top-left dataflow diagram, the GW2 rectangular block still contains compact '(Pi Zero2W)' which mustbe replaced. Re-typeset INSIDE THIS ONE BLOCK as exactly THREE centered lines: 'GW2' / 'Raspberry Pi' / 'Zero 2 W'. Line1largerbold,line2and3small enough tofit. Clearly include spacesbetweenZero,2,W. Remove previousparentheticalcompactmodeltext entirely. Preserve blocksize/location, allarrows, wholeTIGER/Mosquittodiagram, everytable value160/40/78 and all Japanese paragraphs/date/footer unchanged. No additionsoutsideblock.
```


### P.1 GW2の公式写真への置換

内蔵画像生成ツールでP.2と同じ公式製品写真を合成。元写真はassets/gateway_photos/raspberry_pi_zero_2_w_official.jpg。TIGER枠と既存データ経路の意味を維持する。

```text
Use case: compositing. Image1 is slide01/19 edit target. Image2 is the real official Raspberry Pi Zero 2 W photograph to insert. ONLY replace teal rectangular block 'GW2 / Pi Zero 2 W' (roughly x892..1060,y341..442 in1672x941image) with a neat crop of exact Image2 green PCB product photograph, scaled into that same space on white background. Keep board shape and its actual ports, RF shield and photographic texture, not an invented motherboard, no full-sizeUSB or Ethernet. Crop empty gray background and preserve board proportions. Do NOT shift or redraw surrounding arrows: BLE rightarrowends atphoto, reverse dashed time/COMMIT arrow remains, MQTT arrowstarts afterphoto and entersMosquitto. Downarrow toGatewaySQLite remains. Existing3line gatewayheading above photo unchanged. IMPORTANT: preserve orange TIGER outer border as a perfect axis-aligned RECTANGLE fourstraightedges four90degreecorners (no jog/rounding). Mosquitto remainsinsideTIGER, GW2outside. Preserve ALL remaining objects/text/Loggerphoto/3CT/RST/values/page/date/footer exactly. No new labels or changes anywhere else. Opaque1672x941slide.
```

```text
Precise photo-preserving edit. Image1 slide is edit target; Image2 is the exact official Pi Zero 2 W photo. ONLY replace the smallGW2boardpicture with a scaled crop of Image2. KEEP original Image2 DIAGONAL three-quarter photograph perspective, original lighting andactual components, just like photograph in previouspage2. Do NOT rotate/straighten it into top-downPCB drawing. Composite exact photograph region, remove blankbackground, fitwithinroughly x880..1064 y310..444. Itisokay boardstandsdiagonallyinthisspace. Keep boardunmirrored. Preserve ALL surrounding Japanese text, title, 3CTLogger, BLE/MQTT/SQLitearrows, completeTIGERrectangularorangeoutline, data/dateandfooter unchanged. Noillustrationornew inventedhardware.
```

```text
Minimal text repair ONLY on this finished slide. Under the dashed Gateway→Logger return arrow, the Japanese caption has inadvertently duplicated fragments. Remove BOTH currentcaption lines ('時刻同期・次回予定・' and duplicated '時刻予定・COMMIT'). Replace with exactly two centered lines: '時刻同期・次回予定' and 'COMMIT'. Use small navy font in blankspace just below dashed arrow, roughly x742..948,y470..496; nooverlapwithPi photograph or Gateway downarrow. This is ONE caption, no extra repeatedcharacters. Preserve the PiZero2W DIAGONAL actualphotograph unchanged, TIGER perfectorangeRECTANGLE, all remainingtext/numbers/Logger/cubicle/photos/cables and all arrowdirections unchanged. Do not edit any other part.
```

内蔵画像生成ツールで編集。P.1はオレンジ破線枠を長方形化、P.2は公式実機写真の合成とGW1注記の削除のみ。元写真と出典はassets/gateway_photos/に保存。

```text
Use case: precise-object-edit. Edit attached Japanese slide 01/19. ONLY change orange dotted outline surrounding TIGER. Current orange border has a stair-step/jog on upper-left edge. Remove entire irregular outline and replace with a clean single axis-aligned RECTANGLE with four straight edges, four square 90-degree corners (no rounded corners), same thin orange dashed stroke. Coordinates roughly left x1070, right1641, top163, bottom602 in1672x941source; move TOPLEFT leftward to align with bottomleft so continuous straight vertical left edge. Rectangle must enclose Mosquitto, Telegraf, InfluxDB, Grafana, decoder, /LBspool, andTIGER label, but GW2 block andSQLite database remainoutside. The border may cross blankarea of tealheaderband; do not add step toavoidband. Preserve EVERYTHING else unchanged including Japanese alltext, title, dates, Loggerphoto, THREE CTs, GW2diagram, arrows, datafigures, orangeinternalarrow. Do not regenerate or move contents. Opaque background, same1672x941dimensions.
```

```text
Minimal edit of Image1. Orange TIGER rectangle is now correct. Keep its four straight edges and right-angle corners unchanged. ONLY reflow the gateway heading immediately LEFT of border to avoid text crossing it: three short centered lines 'ゲートウェイ' / 'Raspberry Pi Zero 2 W' / '（GW2）' within x820..1060,y236..302. Same navy font, use slight size reduction only for this heading if necessary. Preserve allother imageandtext exactly. No geometry step inrectangle.
```

```text
Use case: compositing. Image1 is finished slide02/19 edit target. Image2 is ORIGINAL official photograph of REAL Raspberry Pi Zero 2 W, supporting insert. Make ONLY two requested changes: (1) Replace upper-right blue abstract GW2/PiZero2W block with this actual Image2 photo. Crop its emptygraybackground, preserve exact actual greenboard shape and components and photographic texture, no illustration/redraw/inventedports, no Ethernet or full-sizeUSB, keep aspectratio. Place it inexisting right-side devicepicture slot above specstable, on matching cleanwhitebackground, notoverlappingJapanese heading. Keep Logger photo completelyunchanged. (2) Delete bottom sentence 'GW1 Pi4B / schema 9 と GW2を区別' and its separator line/verticalbar. Keep battery caveat exact '電池%はVDDSからの暫定推定' as standalone left-aligned note on bottomline. Preserve ALL table rows, numericalvalues, CT3ch, firmware0.12.12, Status20B, Packet8B, Mosquitto insideTIGER smalldiagram, header/footer/date. No other content additions. Only optional small '写真：Raspberry Pi' underofficialphoto ifitfits withoutoverlap. Full opaque1672x941slide.
```

