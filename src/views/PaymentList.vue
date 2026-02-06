<template>
  <div class="payment-list formal-card">
    <div class="header-row formal-header">
      <h2>Payments Dashboard</h2>
      <select v-model="filterStatus" class="filter-select">
        <option value="">All</option>
        <option>Success</option>
        <option>Pending</option>
        <option>Failed</option>
      </select>
    </div>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in filteredPayments" :key="p.id">
            <td>{{ p.id }}</td>
            <td>{{ p.user }}</td>
            <td>₹{{ p.amount }}</td>
            <td>{{ p.category }}</td>
            <td><StatusBadge :status="p.status" /></td>
            <td>
              <router-link class="view-link" :to="`/payments/${p.id}`">View</router-link>
              <router-link class="edit-link" :to="`/payments/new?id=${p.id}`">Edit</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { payments } from '@/mock/data'
import StatusBadge from '@/components/common/StatusBadge.vue'

const filterStatus = ref('')
const filteredPayments = computed(() =>
  filterStatus.value ? payments.filter(p => p.status === filterStatus.value) : payments
)
</script>

<style scoped>
/* Formal dashboard card and header */
.formal-card {
  background: linear-gradient(120deg,#e0e7ff 0%,#c7d2fe 60%,#a5b4fc 100%);
  border-radius: 22px;
  box-shadow: 0 8px 32px rgba(99,102,241,0.10);
  border: 1.5px solid #c7d2fe;
  padding: 36px 32px 28px 32px;
  margin: 0 auto 32px auto;
}
.formal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
.formal-header h2 {
  font-size: 1.6rem;
  font-weight: 800;
  color: #252ace;
  margin: 0;
}
/* Modern card style for payment list */

.payment-list {
  max-width: 900px;
  margin: 40px auto 0 auto;
}

.header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
}

.filter-select {
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  font-size: 1rem;
  background: #f1f5f9;
  color: #0f172a;
  outline: none;
  transition: border 0.2s;
}
.filter-select:focus {
  border: 1.5px solid #6366f1;
}

.table-container {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(15,23,42,0.04);
}

th, td {
  padding: 14px 18px;
  text-align: left;
}

th {
  background: #f1f5f9;
  font-weight: 600;
  color: #334155;
  border-bottom: 2px solid #e5e7eb;
}

tbody tr {
  border-bottom: 1px solid #e5e7eb;
  transition: background 0.15s;
}
tbody tr:hover {
  background: #f8fafc;
}

.view-link {
  color: #6366f1;
  text-decoration: none;
  font-weight: 500;
  border-radius: 6px;
  padding: 6px 12px;
  transition: background 0.15s;
}
.view-link:hover {
  background: #eef2ff;
}
 .edit-link {
   color: #16a34a;
   text-decoration: none;
   font-weight: 500;
   border-radius: 6px;
   padding: 6px 12px;
   margin-left: 8px;
   transition: background 0.15s;
 }
 .edit-link:hover {
   background: #dcfce7;
 }
td :deep(.status-badge) {
  font-size: 0.85rem;
  padding: 4px 10px;
  border-radius: 999px;
  font-weight: 600;
}
td :deep(.badge) {
  font-size: 0.95rem;
  padding: 6px 14px;
  border-radius: 999px;
  font-weight: 600;
  display: inline-block;
  min-width: 80px;
  text-align: center;
}
/* 🔧 FORCE visibility of status values */
td :deep(.badge) {
  display: inline-block;
  min-width: 90px;
  text-align: center;
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #0f172a; /* default text */
}

/* Status-specific colors */
td :deep(.success) {
  background-color: #dcfce7;
  color: #166534;
}

td :deep(.pending) {
  background-color: #fef3c7;
  color: #92400e;
}

td :deep(.failed) {
  background-color: #fee2e2;
  color: #991b1b;
}

</style>
