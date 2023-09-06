<script setup lang="ts">
import {VPDocAsideSponsors} from 'vitepress/theme'

const data = [
    {
        items: [
            {
                name: 'StackBlitz',
                url: 'https://stackblitz.com',
                img: '/spon/stackblitz.svg',
            },
        ],
        size: 'mini'
        // big xmini mini
    },
    {
        items: [
            {
                name: 'typescript',
                url: 'https://www.typescriptlang.org/zh/play',
                img: '/spon/ts.svg',
            },
        ],
        size: 'mini'
    },
    {
        items: [
            {
                name: 'java',
                url: 'https://www.compilejava.net/',
                img: '/spon/javaCode.png',
            },
            {
                name: 'vue3',
                url: 'https://play.vuejs.org',
                img: '/spon/vue.svg',
            },
        ],
        size: 'xmini'
    },
    {
        items: [
            {
                img: '/spon/ghost.png'
            }
        ],
        size: 'mini'
    }
]
</script>

<template>
    <a class="notice" href="/" target="_blank">
        <img width="22" height="22" src="/spon/java.svg"/>
        <span>
          <p class="extra-info">Learning & Organizing</p>
          <p class="heading">Java and Sql</p>
          <p class="extra-info">Update soon!</p>
        </span>
    </a>
    <VPDocAsideSponsors :data="data"/>
</template>

<style>
.notice {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 14px;
    padding-left: 2.5rem;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    position: relative;
    font-size: 0.9rem;
    font-weight: 700;
    line-height: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    background-color: var(--vp-c-bg-alt);
    border: 2px solid var(--vp-c-bg-alt);
    transition: border-color 0.5s;
}

.notice:hover {
    border: 2px solid #5672cd;
}

.notice img {
    position: absolute;
    left: 1.5rem;
    transition: transform 0.5s;
    transform: scale(1.25);
}

.notice:hover img {
    transform: scale(1.75);
}

.notice .heading {
    background-image: linear-gradient(
        120deg,
        #b047ff 16%,
        #9499ff,
        #5672cd
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.notice .extra-info {
    color: var(--vp-c-text-1);
    opacity: 0;
    font-size: 0.7rem;
    padding-left: 0.1rem;
    transition: opacity 0.5s;
}

.notice:hover .extra-info {
    opacity: 0.9;
}

.vp-sponsor-grid.medium .vp-sponsor-grid-image {
    max-height: 90px;
}
</style>
