<template>
  <DefaultLayout>
    <template #aside-top>
      <div class="wip-banner-aside">
        Documentation in development — may contain inaccuracies.
      </div>
    </template>
  </DefaultLayout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
const DefaultLayout = DefaultTheme.Layout
</script>

<style>
.wip-banner-aside {
  background-color: #fef9c3;
  border: 1px solid #fde047;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 20px;
  text-align: left;
  font-size: 12px;
  color: #854d0e;
  line-height: 1.5;
}

.dark .wip-banner-aside {
  background-color: #2d2600;
  border-color: #713f12;
  color: #fde68a;
}
</style>
