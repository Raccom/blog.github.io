---
layoutClass: m-page-layout
---

<script setup>
import { useData } from 'vitepress'
import {ref} from 'vue'

const pg = ref(1)
const add = () => {
    pg.value++
}

const { page } = useData()
</script>
<style lang='scss'></style>

# ts

## 第一篇博文还在编写中哦...

:::tip
提示
:::
:::warning
提示
:::
:::danger
提示
:::
:::info 
```ts
javascript: void (function () {
    document.scrollingElement.scrollIntoView({ behavior: 'smooth' })
})()
```
:::
::: details 模拟实现 new 运算符 
<<< @/code/js/test/test.js 
:::
```ts {2}
javascript: void (function () {
    document.scrollingElement.scrollIntoView({ behavior: 'smooth' })
})()
```


<span>{{pg}}</span>

<button @click='add'>add</button>