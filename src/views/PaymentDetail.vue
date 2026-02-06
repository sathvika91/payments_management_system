<template>
  <div v-if="payment" class="formal-card payment-view">
    <div class="formal-header">
      <h2>Payment Details</h2>
      <span class="payment-id">Ref: {{ payment.id }}</span>
    </div>

    <table class="detail-table">
      <tbody>
        <tr>
          <th>User</th>
          <td>{{ payment.user }}</td>
        </tr>
        <tr>
          <th>Amount</th>
          <td>₹{{ payment.amount }}</td>
        </tr>
        <tr>
          <th>Category</th>
          <td>{{ payment.category }}</td>
        </tr>
        <tr>
          <th>Status</th>
          <td class="status-cell">
            <StatusBadge :status="payment.status" />
          </td>
        </tr>
        <tr>
          <th>Date</th>
          <td>{{ payment.date }}</td>
        </tr>
      </tbody>
    </table>

    <div class="action-row">
      <router-link
        class="base-button secondary"
        :to="`/payments/new?id=${payment.id}`"
      >
        Edit Payment
      </router-link>

      <router-link class="base-button" to="/payments">
        Back to Dashboard
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { payments } from '@/mock/data'
import StatusBadge from '@/components/common/StatusBadge.vue'

const route = useRoute()
const payment = payments.find(p => p.id === route.params.id)
</script>

<style scoped>
/* ---------- Card ---------- */
.formal-card {
  max-width: 700px;
  margin: 40px auto;
  background: linear-gradient(120deg,#e0e7ff 0%,#c7d2fe 60%,#a5b4fc 100%);
  border-radius: 22px;
  padding: 36px;
  border: 1.5px solid #c7d2fe;
  box-shadow: 0 8px 32px rgba(99,102,241,0.12);
}

/* ---------- Header ---------- */
.formal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
}

.formal-header h2 {
  font-size: 1.6rem;
  font-weight: 800;
  color: #252ace;
  margin: 0;
}

.payment-id {
  font-weight: 600;
  color: #6366f1;
}

/* ---------- Table ---------- */
.detail-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
}

.detail-table th {
  width: 40%;
  background: #f1f5f9;
  color: #334155;
  padding: 12px 16px;
  font-weight: 600;
  border-radius: 10px 0 0 10px;
}

.detail-table td {
  background: #ffffff;
  padding: 12px 16px;
  border-radius: 0 10px 10px 0;
  font-weight: 500;
  color: #0f172a;
}

/* ---------- Status ---------- */
.status-cell {
  background: #ffffff;
}

.status-cell :deep(.badge) {
  min-width: 100px;
  padding: 8px 18px;
  font-size: 0.9rem;
  font-weight: 700;
  border-radius: 999px;
  display: inline-block;
  text-align: center;
}

/* ---------- Actions ---------- */
.action-row {
  display: flex;
  justify-content: flex-end;
  gap: 14px;
  margin-top: 30px;
}

.base-button {
  background: #6366f1;
  color: #ffffff;
  padding: 10px 22px;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s;
}

.base-button:hover {
  background: #4f46e5;
}

.base-button.secondary {
  background: #e0e7ff;
  color: #3730a3;
}

.base-button.secondary:hover {
  background: #c7d2fe;
}
</style>
