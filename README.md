# slidev-theme-sketch 🎨

创意手绘涂鸦风格 Slidev 主题（参考原味手绘素描风格设计）。

## 特性

- 📜 **素描纸质底纹**：内嵌高分辨率微细画布纹理背景，温润耐看
- ☁️ **经典手绘云朵框**：复刻原版手绘双线云朵标题框与章节过渡云朵
- ✈️ **全套手绘小插画**：小飞机、拍立得相机、墨镜、行李箱、折叠地图、小甲壳虫车、手绘箭头等开箱即用
- 📦 **开箱即用版式**：
  - `cover`: 经典封面，云朵主标题框 + 周围灵动涂鸦环绕
  - `toc`: 目录页，顶部小云朵标题 + 左右卡片网格
  - `section`: 章节过渡页，手绘气泡 + 飞行动画飞机
  - `default`: 标准正文页，左上小飞机 + 手绘标题 + 页面底标
  - `two-cols`: 双栏对比，左右拟真手绘便签卡片
  - `fact`: 关键数据页，多云朵数据指标 + 手绘粗条纹弯曲箭头
  - `quote`: 金句引用，斜角便签纸 + 手写大引号
  - `end`: 致谢与 Q&A 页
- 🧩 **内置手绘组件**：
  - `<DoodleCard>`: 带有不规则粗黑描边与立体阴影的手绘卡片
  - `<DoodleCloud>`: 任意内容包裹的手绘云朵
  - `<DoodleIcon>`: 一键插入手绘图标（支持 `plane`、`camera`、`heart`、`star`、`suitcase`、`car`、`map` 等）
  - `<DoodleTag>`: 彩色手绘小药丸胶囊

## 使用方法

在任意 Slidev 幻灯片项目的 Frontmatter 中引用：

```yaml
---
theme: ./slidev-theme-sketch # 或指定主题目录
title: 我的分享
---
```

## 预览与开发

```bash
cd slidev-theme-sketch
pnpm install # 或 npm install
pnpm dev
```
