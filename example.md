---
theme: ./
title: 创意手绘风 PPT 演示
subtitle: Creative Hand-Drawn Sketch Theme for Slidev
author: Shown
date: 2026.10
layout: cover
---

# 创意手绘风 ＰＰＴ

---
layout: toc
title: 目录
subtitle: CONTENTS
---

<div class="grid grid-cols-2 gap-4">
  <div class="sketch-card p-3 flex items-center gap-3">
    <DoodleIcon name="plane" size="sm" />
    <div>
      <span class="text-xs font-hand text-gray-500 uppercase tracking-widest block">The Part One</span>
      <strong class="font-hand text-base">项目背景与设计理念</strong>
    </div>
  </div>

  <div class="sketch-card p-3 flex items-center gap-3">
    <DoodleIcon name="plane" size="sm" />
    <div>
      <span class="text-xs font-hand text-gray-500 uppercase tracking-widest block">The Part Two</span>
      <strong class="font-hand text-base">核心特性与手绘版式</strong>
    </div>
  </div>

  <div class="sketch-card p-3 flex items-center gap-3">
    <DoodleIcon name="plane" size="sm" />
    <div>
      <span class="text-xs font-hand text-gray-500 uppercase tracking-widest block">The Part Three</span>
      <strong class="font-hand text-base">代码高亮与交互组件</strong>
    </div>
  </div>

  <div class="sketch-card p-3 flex items-center gap-3">
    <DoodleIcon name="plane" size="sm" />
    <div>
      <span class="text-xs font-hand text-gray-500 uppercase tracking-widest block">The Part Four</span>
      <strong class="font-hand text-base">数据表现与未来规划</strong>
    </div>
  </div>
</div>

---
layout: section
part: The Part One
---

# 项目背景与设计理念

---
layout: default
part: Part 01
---

::header::
项目背景与设计理念

::default::
Slidev 遇见 **手绘涂鸦设计美学**。纯黑线稿素描搭配高质感纸张纹理，让枯燥的技术分享拥有手账般温度。

<div class="grid grid-cols-3 gap-4 mt-6">
  <DoodleCard title="✏️ 手绘质感" tag="Canvas">
    真实画布微细纹理基底，搭配不规则粗细墨水线条与拟真素描阴影。
  </DoodleCard>

  <DoodleCard title="✈️ 灵动涂鸦" tag="Doodles">
    飞机、云朵、爱心、相机、折叠地图等丰富手绘点缀元素，开箱即用。
  </DoodleCard>

  <DoodleCard title="💻 极客内核" tag="Slidev">
    保留 Slidev 强大的 Markdown 驱动、UnoCSS 原子样式与 Vue 组件生态。
  </DoodleCard>
</div>

<div class="mt-4 flex items-center gap-3">
  <DoodleTag color="yellow">纯净浅色</DoodleTag>
  <DoodleTag color="red">高对比度</DoodleTag>
  <DoodleTag color="blue">手写排版</DoodleTag>
</div>

---
layout: two-cols
part: Part 02
---

::header::
传统 PPT  vs 创意手绘 Slidev

::left::
<div class="h-full flex flex-col justify-between">
  <div>
    <h3 class="flex items-center gap-2 m-0 text-gray-700">
      <DoodleIcon name="suitcase" size="sm" /> 传统 PPT 痛点
    </h3>
    <ul class="mt-4 text-sm space-y-2">
      <li>排版繁琐，版本管理与 Git 冲突严重</li>
      <li>代码片段无法语法高亮与折叠高亮</li>
      <li>难以嵌入交互式组件与动态数据</li>
      <li>模板风格千篇一律，视觉疲劳</li>
    </ul>
  </div>
  <div class="sketch-tag bg-gray-100 text-xs self-start">低效维护</div>
</div>

::right::
<div class="h-full flex flex-col justify-between">
  <div>
    <h3 class="flex items-center gap-2 m-0 text-black">
      <DoodleIcon name="camera" size="sm" /> 手绘风 Slidev 优势
    </h3>
    <ul class="mt-4 text-sm space-y-2">
      <li><strong>纯文本驱动</strong>：Git 友好，Markdown 编写极速</li>
      <li><strong>专属手绘容器</strong>：云朵框、粗墨框、拍立得便签</li>
      <li><strong>完备组件库</strong>：内置 DoodleIcon、DoodleCard、DoodleCloud</li>
      <li><strong>一键导出</strong>：支持 PDF、PNG、静态 Web 网站发布</li>
    </ul>
  </div>
  <div class="sketch-tag bg-amber-100 text-xs self-start">舒适表达</div>
</div>

---
layout: default
part: Part 03
---

::header::
代码展示与手绘线框

::default::
手绘风线框配合清新代码高亮：

```ts {all|4-8|10-12}
// 定义手绘主题配置接口
export interface SketchThemeOptions {
  paperTexture: 'canvas' | 'kraft' | 'watercolor'
  inkColor: string
  enableDoodleAnimations: boolean
}

const themeConfig: SketchThemeOptions = {
  paperTexture: 'canvas',
  inkColor: '#1f1f1f',
  enableDoodleAnimations: true,
}
```

<div class="mt-4 text-sm text-gray-600 flex items-center gap-2">
  <DoodleIcon name="star" size="xs" />
  <span>提示：按空格或方向键可查看代码行逐步高亮动画效果。</span>
</div>

---
layout: fact
part: Part 04
---

::header::
关键成果与数据指标

::default::
<div class="relative w-full max-w-2xl mx-auto flex items-center justify-between py-6">
  <!-- Left Cloud 80% -->
  <div class="flex flex-col items-center">
    <DoodleCloud width="240px">
      <span class="text-4xl font-bold font-hand text-black">80%</span>
      <span class="text-xs font-hand text-gray-600 mt-1">制作效率提升</span>
    </DoodleCloud>
    <p class="text-sm font-hand text-gray-600 mt-3 text-center max-w-[200px]">
      Markdown 专注内容编写，排版由主题全自动完成。
    </p>
  </div>

  <!-- Center Arrow -->
  <div class="flex flex-col items-center -mt-4">
    <img src="/doodles/arrow-down-right.png" alt="arrow" class="w-24 opacity-85" />
  </div>

  <!-- Right Cloud 60% -->
  <div class="flex flex-col items-center">
    <DoodleCloud width="240px">
      <span class="text-4xl font-bold font-hand text-black">60%</span>
      <span class="text-xs font-hand text-gray-600 mt-1">听众注意力提升</span>
    </DoodleCloud>
    <p class="text-sm font-hand text-gray-600 mt-3 text-center max-w-[200px]">
      亲和力十足的手绘涂鸦线稿，打破传统幻灯片沉闷感。
    </p>
  </div>
</div>

---
layout: quote
author: 设计哲学
---

将复杂的技术思想，以最质朴、温暖的手绘素描呈现给世界。

---
layout: end
title: THANK YOU
subtitle: 创意手绘风 · 欢迎交流与提问
---
