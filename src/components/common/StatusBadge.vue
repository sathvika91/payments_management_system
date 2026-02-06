<template>
  <span :class="badgeClass">{{ status }}</span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineProps<{ status: string }>()

const badgeClass = computed(() => ({
  badge: true,
  success: status === 'Success',
  pending: status === 'Pending',
  failed: status === 'Failed',
}))
</script>

<style scoped>
.badge {
  padding: 6px 12px;
  border-radius: 12px;
  color: #000;
  font-size: 13px;
  box-shadow: 0 2px 8px #d1d5db;
}
.success {
  background: linear-gradient(90deg,#22c55e 60%,#16a34a 100%);
  color: #000;
}
.pending {
  background: linear-gradient(90deg,#fbbf24 60%,#f59e42 100%);
  color: #000;
}
.failed {
  background: linear-gradient(90deg,#ef4444 60%,#dc2626 100%);
  color: #000;
}
</style>
