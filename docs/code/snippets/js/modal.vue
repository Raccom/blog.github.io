<script setup lang="ts">
import { ref, computed } from 'vue'

interface Prop {
    modelValue: boolean,
    content: string
}

const props = withDefaults(defineProps<Prop>(), {
    modelValue: false,
    content: ''
})

const emit = defineEmits(['update:modelValue']);

const showModal = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
})

const close = () => {
    showModal.value = false;
}
</script>

<template>
   <Teleport to="body">
        <Transition name="modal">
            <div v-show="showModal" class="modal-mask">
                <div class="modal-container">
                    <p>{{ content }}</p>
                    <div class="model-footer">
                        <button class="modal-button" @click="close">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.modal-mask {
    position: fixed;
    z-index: 200;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s ease;
}

.modal-container {
    width: 300px;
    margin: auto;
    padding: 20px 30px;
    background-color: var(--vp-c-bg);
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
}

.model-footer {
    margin-top: 8px;
    text-align: right;
}

.modal-button {
    padding: 4px 8px;
    border-radius: 4px;
    border-color: var(--vp-c-default-3);
    color: var(--vp-button-alt-text);
    background-color: var(--vp-button-alt-bg);
}

.modal-button:hover {
    border-color: var(--vp-c-border);
    color: var(--vp-button-alt-hover-text);
    background-color: var(--vp-button-alt-hover-bg);
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
    transform: scale(1.1);
}
</style>