<template>
  <div>
    <div class="documentation-notice">
      <div class="notice-content">
        <strong>📝 Documentation in Progress</strong> — This documentation may contain inaccuracies.
      </div>
    </div>
    <DefaultLayout />
  </div>
</template>

<script setup>
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

const DefaultLayout = DefaultTheme.Layout
</script>

<style scoped>
.documentation-notice {
  background: linear-gradient(135deg, #fff9e6 0%, #fff4cc 100%);
  border-bottom: 1px solid #ffd700;
  padding: 8px 20px;
  text-align: center;
  font-size: 13px;
  color: #8b6914;
}

.notice-content {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

@media (prefers-color-scheme: dark) {
  .documentation-notice {
    background: linear-gradient(135deg, #3d3400 0%, #4a3d00 100%);
    border-bottom-color: #8b7500;
    color: #e8d084;
  }
}
</style>
