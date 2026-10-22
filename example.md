---
theme: ./
title: Creative Hand-Drawn Sketch Theme
subtitle: Presentation Slides for Developers with Doodle Aesthetics
author: Yuluo
date: 2026.10
layout: cover
---

# Hand-Drawn Sketch

---
layout: toc
title: Agenda
subtitle: CONTENTS
---

<div class="grid grid-cols-2 gap-4">
  <div class="sketch-card p-3 flex items-center gap-3">
    <DoodleIcon name="plane" size="sm" />
    <div>
      <span class="text-xs font-hand text-gray-500 uppercase tracking-widest block">Part 01</span>
      <strong class="font-hand text-base">Design Philosophy & Background</strong>
    </div>
  </div>

  <div class="sketch-card p-3 flex items-center gap-3">
    <DoodleIcon name="camera" size="sm" />
    <div>
      <span class="text-xs font-hand text-gray-500 uppercase tracking-widest block">Part 02</span>
      <strong class="font-hand text-base">Core Layouts & Components</strong>
    </div>
  </div>

  <div class="sketch-card p-3 flex items-center gap-3">
    <DoodleIcon name="heart" size="sm" />
    <div>
      <span class="text-xs font-hand text-gray-500 uppercase tracking-widest block">Part 03</span>
      <strong class="font-hand text-base">Code Highlighting & Interactivity</strong>
    </div>
  </div>

  <div class="sketch-card p-3 flex items-center gap-3">
    <DoodleIcon name="star" size="sm" />
    <div>
      <span class="text-xs font-hand text-gray-500 uppercase tracking-widest block">Part 04</span>
      <strong class="font-hand text-base">Data Metrics & Key Takeaways</strong>
    </div>
  </div>
</div>

---
layout: section
part: Part 01
---

# Design Philosophy

---
layout: default
part: Part 01
---

::header::
Warmth Meets Geek Culture

::default::
Slidev meets **Hand-drawn Doodle Aesthetics**. Clean ink outlines and subtle paper textures make technical presentations warm, tactile, and engaging.

<div class="grid grid-cols-3 gap-4 mt-6">
  <DoodleCard title="✏️ Paper Canvas" tag="Canvas">
    Authentic micro-textured canvas background with irregular hand-drawn ink borders and sketch shadows.
  </DoodleCard>

  <DoodleCard title="✈️ Playful Doodles" tag="Doodles">
    Planes, clouds, cameras, suitcases, maps, hearts, and retro cars ready to use out of the box.
  </DoodleCard>

  <DoodleCard title="💻 Developer Core" tag="Slidev">
    Full power of Slidev: Markdown-driven, UnoCSS atomic styling, and rich Vue 3 component ecosystem.
  </DoodleCard>
</div>

<div class="mt-4 flex items-center gap-3">
  <DoodleTag color="yellow">Light & Clean</DoodleTag>
  <DoodleTag color="red">High Contrast</DoodleTag>
  <DoodleTag color="blue">Handwritten Fonts</DoodleTag>
</div>

---
layout: two-cols
part: Part 02
---

::header::
Traditional Slides vs. Hand-Drawn Slidev

::left::
<div class="h-full flex flex-col justify-between">
  <div>
    <h3 class="flex items-center gap-2 m-0 text-gray-700">
      <DoodleIcon name="suitcase" size="sm" /> Traditional Slide Pain Points
    </h3>
    <ul class="mt-4 text-sm space-y-2">
      <li>Tedious formatting with heavy Git merge conflicts</li>
      <li>No interactive code highlighting or line-by-line step focus</li>
      <li>Difficult to embed Vue components or live dynamic data</li>
      <li>Cluttered, generic templates leading to visual fatigue</li>
    </ul>
  </div>
  <div class="sketch-tag bg-gray-100 text-xs self-start">High Maintenance</div>
</div>

::right::
<div class="h-full flex flex-col justify-between">
  <div>
    <h3 class="flex items-center gap-2 m-0 text-black">
      <DoodleIcon name="camera" size="sm" /> Sketch Theme Advantages
    </h3>
    <ul class="mt-4 text-sm space-y-2">
      <li><strong>Plain Markdown</strong>: Git-friendly and rapid authoring</li>
      <li><strong>Hand-Drawn Containers</strong>: Cloud bubbles, ink cards, polaroids</li>
      <li><strong>Component Suite</strong>: DoodleIcon, DoodleCard, DoodleCloud</li>
      <li><strong>Single-Command Export</strong>: PDF, PNG, or self-hosted static web</li>
    </ul>
  </div>
  <div class="sketch-tag bg-amber-100 text-xs self-start">Comfortable Expression</div>
</div>

---
layout: default
part: Part 03
---

::header::
Code Highlighting & Ink Frames

::default::
Hand-drawn dashed frames paired with clean syntax highlighting:

```ts {all|4-8|10-12}
// Theme configuration interface
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
  <span>Tip: Press space or right arrow to step through line highlight animations.</span>
</div>

---
layout: fact
part: Part 04
---

::header::
Key Performance & Attention Metrics

::default::
<div class="relative w-full max-w-2xl mx-auto flex items-center justify-between py-6">
  <!-- Left Cloud 80% -->
  <div class="flex flex-col items-center">
    <DoodleCloud width="240px">
      <span class="text-4xl font-bold font-hand text-black">80%</span>
      <span class="text-xs font-hand text-gray-600 mt-1">Authoring Efficiency</span>
    </DoodleCloud>
    <p class="text-sm font-hand text-gray-600 mt-3 text-center max-w-[200px]">
      Focus purely on Markdown content; styling and layouts are automated.
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
      <span class="text-xs font-hand text-gray-600 mt-1">Audience Engagement</span>
    </DoodleCloud>
    <p class="text-sm font-hand text-gray-600 mt-3 text-center max-w-[200px]">
      Warm doodle sketches break the monotony of standard corporate presentations.
    </p>
  </div>
</div>

---
layout: quote
author: Design Philosophy
---

Presenting complex technical ideas with tactile warmth and authentic sketch simplicity.

---
layout: end
title: THANK YOU
subtitle: Creative Hand-Drawn Sketch Theme · Questions & Discussion
---
