---
layout: home
layoutClass: 'm-home-layout'

hero:
  # 使用 theme/components/AnimateTitle.vue 代替 
  # name: Raccom
  # text: 博客
  # tagline: 
  image:
    src: /logo.png
    alt: raccom
  actions:
    - text: Get Started
      link: /code/java/first
      theme: brand
    - text: Nav
      link: /nav/
      theme: alt
features:
  - icon: ⚗
    title: Feature
    details: 开发使用的功能模块
    linkText: next
    link: /code/java/first
  - icon: 🔧
    title: Tools
    details: 整理日常使用的工具
    linkText: to
    link: /nav/
  - icon: ⚡
    title: Code
    details: 高效的代码片段
    linkText: use
    link: /code/common/git
---

<style lang="scss">
.m-home-layout .image-src{
    opacity: 0.9;
    transition: .3s;
}
.m-home-layout .image-src:hover {
    opacity: 1;
}
</style>

<script lang="ts" setup>
  import './utils/version.ts';
</script>
