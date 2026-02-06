<template>
  <button class="base-button" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
</script>

<style scoped>
.base-button {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
}
.base-button:hover {
  background: #2563eb;
}
</style>
