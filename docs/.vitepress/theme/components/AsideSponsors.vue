<script setup lang="ts">
import {VPDocAsideSponsors} from 'vitepress/theme'

const data = [
    {
        items: [
            {
                img: ''
            }
        ]
    },
    {
        items: [
            {
                img: ''
            }
        ]
    }
]
</script>

<template>
    <a class="viteconf" href="/" target="_blank">
        <img width="22" height="22" src="/viteconf.svg"/>
        <span>
          <p class="extra-info">Free Online Conference</p>
          <p class="heading">ViteConf 23 - Oct 5</p>
          <p class="extra-info">Get your ticket now!</p>
        </span>
    </a>
    <VPDocAsideSponsors :data="data"/>
</template>

<style>
.viteconf {
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

.viteconf:hover {
    border: 2px solid #5672cd;
}

.viteconf img {
    position: absolute;
    left: 1.5rem;
    transition: transform 0.5s;
    transform: scale(1.25);
}

.viteconf:hover img {
    transform: scale(1.75);
}

.viteconf .heading {
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

.viteconf .extra-info {
    color: var(--vp-c-text-1);
    opacity: 0;
    font-size: 0.7rem;
    padding-left: 0.1rem;
    transition: opacity 0.5s;
}

.viteconf:hover .extra-info {
    opacity: 0.9;
}

.vp-sponsor-grid.medium .vp-sponsor-grid-image {
    max-height: 90px;
}
</style>
