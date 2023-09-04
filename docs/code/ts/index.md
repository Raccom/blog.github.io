<script setup>
import { ref } from 'vue';
import { useData } from 'vitepress';

const { page } = useData();

const pg = ref(1);
const add = () => {
    pg.value++
};

</script>
<style lang='scss'>
</style>

# ts

## first...

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


::: raw
<div class="ts_index container">
    <span>{{pg}}</span>
    <button @click='add'>add</button>
</div>
:::
