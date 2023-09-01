---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: Raccon的
  text: 个人博客
  tagline: 寒冬已至
  image:
    src: /logo.png
    alt: raccon
  actions:
    - text: 快速开始
      link: /start/
      theme: brand
    - text: 导航
      link: /nav/
      theme: alt
features:
  - icon: 📖
    title: 学习历程
    details: 整理学习过程中的知识点<br />面向百度开发
  - icon: 💡
    title: 奇技淫巧
    details: 提升效率的奇淫技巧<br />让代码(看起来)更高级
  - icon: 📘
    title: 源码阅读
    details: 了解各种库的实现原理<br />从入门到入梦
  - icon: 🧰
    title: 实用工具
    details: 工欲善其事，必先利其器<br />记录日常使用的网页、工具、素材
  - icon: 🐞
    title: 踩坑记录
    details: 踩不完的坑<br />焦头烂额还搜不到的各种bug
  - icon: 🐟
    title: 科学上班
    details: '
      <small class="bottom-small"><s>摆烂</s> 灵活奋斗</small>
    '
---

<style lang="scss">
/* 爱的魔力转圈圈 */
.m-home-layout .image-src:hover {
    transform: translate(-50%, -50%) rotate(666turn);
    transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
    opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}

.beian a:hover{
    color: #10b981
}

.copyright{
  font-size: 14px
}

</style>

<script lang="ts" setup>
  import './utils/version.ts';
</script>
