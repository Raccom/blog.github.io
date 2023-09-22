---
layout: home
layoutClass: 'm-home-layout'

hero:
  # 使用 theme/components/AnimateTitle.vue 代替 

  # name: 
  # text: 
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
  - icon: 📦
    title: Code
    details: 开箱即用的代码片段
    linkText: try
    link: /code/common/git
  - icon: 🛠
    title: Tools
    details: 日常使用的工具整理
    linkText: use
    link: /nav/
  - icon: ⚙
    title: Feature
    details: 项目开发的配置文件
    linkText: next
    link: /code/js/viteConfig
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
</script>
