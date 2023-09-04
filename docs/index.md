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
      link: /code/js/
      theme: brand
    - text: Utils
      link: /code/js/
      theme: alt
features:
  - icon: ⚡
    title: Code
    details: 开发使用的代码片段
    linkText: next
    link: /code/js/
  - icon: 🔧
    title: Tools
    details: 整理日常使用的工具
    linkText: use
    link: /code/js/
  - icon: 🐛
    title: Bug
    details: 疑难杂症偏方 (feature)
    # linkText: fix
    link: /
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
