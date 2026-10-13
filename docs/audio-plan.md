# 音频与时间轴计划

当前未提供正式配音或背景音乐，本文件只建立数据结构与校准规则，不伪造同步结果。

## 时间轴字段

每章和每句旁白记录：`chapter`、`lineId`、`text`、`voiceStart`、`voiceEnd`、`shotStart`、`shotEnd`、`events`、`subtitleIn`、`subtitleOut`、`musicBeat`、`transition`。时间使用秒，最终以配音波形和字幕审校为准。

## 工作流

先导入配音并标记句首/句尾，再把镜头关键事件对齐到语义重音，最后加入音乐节奏点和转场。没有音频前只使用暂定时长，不能声称完成音画同步。
