<template>
    <div class="fontVerify">
        <p id="picyzm"/>
        <input type="text" v-model="inputCode" ref="inputRef" autofocus @keyup="startVerify" class="fontInput"/>
    </div>
    <Modal :content="content" :showModal="showModal" :closeModal="closeModal"/>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Modal from '/code/snippets/js/modal.vue';
import GVerify from './verify';

const inputCode = ref(''); // input框输入内容
const verifyValue = ref(null); // 验证码对象实例
const content = ref('验证通过');
const showModal = ref(false);

const closeModal = () => {
    showModal.value = false;
}


// 开始验证
const startVerify = () => {
    if(inputCode.value.length < 4) return;
    const res = verifyValue.value.validate(inputCode.value);
    if (res) {
        showModal.value = true;
    }
    verifyValue.value.refresh();
    inputCode.value = '';
}

onMounted(() => {
    verifyValue.value = new GVerify({
        id: "picyzm", // 绘制验证码的区域id
        type: "blend"
    });
})
</script>

<style lang='scss' scoped>
.fontVerify {
    display: flex;
    align-items: center;
    justify-content: center;

    #picyzm {
        width: 100px;
        height: 30px;
        border: 1px solid #8b79ec;
        margin-right: 10px;
    }

    .fontInput {
        width: 80px;
        height: 30px;
        border-radius: 8px;
        border: 1px solid #ccc;
        outline: none;
        font-size: 12px;
        text-indent: 10px;
        letter-spacing: 2px;
        box-sizing: border-box;
        margin-top: 0 !important;
    }
}
</style>