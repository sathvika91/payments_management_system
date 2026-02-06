<template>
  <div class="app">
    <Topbar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Topbar from '@/components/layout/Topbar.vue'
</script>

<style scoped>

.app {
  min-height: 100vh;
  background: linear-gradient(120deg,#e0e7ff 0%,#f1f5f9 100%);
}

.content {
  max-width: 1200px;
  margin: 32px auto 0 auto;
  padding: 40px 32px 32px 32px;
  background: #f8fafc;
  border-radius: 22px;
  box-shadow: 0 8px 32px rgba(99,102,241,0.10);
  border: 1.5px solid #c7d2fe;
}
</style>
