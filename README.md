# 《蝴蝶效应》科学艺术可视化视频

Remotion + React + TypeScript 的 1920×1080、30fps 科学艺术视频工程。当前阶段包含 5 秒视觉测试镜头，双摆采用明确标记的确定性预设运动；后续替换为经过验证的数值模拟。

## 安装与运行

```bash
npm install
npm run typecheck
npm run dev
npm run render
```

在 Remotion Studio 中选择 `ButterflyTest` 预览。渲染输出为 `out/butterfly-test.mp4`。目录：`src/scenes` 场景、`src/components` 组件、`src/visuals` 图形、`src/simulations` 模拟、`src/theme` 主题。
