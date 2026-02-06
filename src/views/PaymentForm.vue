<template>
  <div class="payment-form-card formal-card">
    <div class="formal-header">
      <h2>{{ isEdit ? 'Edit Payment' : 'Create Payment' }}</h2>
      <span v-if="isEdit" class="payment-id">Ref: {{ id }}</span>
    </div>

    <form class="form-grid" @submit.prevent="handleSubmit">
      <div class="form-field">
        <label>User</label>
        <input v-model="user" type="text" placeholder="User name" required />
      </div>

      <div class="form-field">
        <label>Amount</label>
        <input v-model.number="amount" type="number" min="1" placeholder="Amount" required />
      </div>

      <div class="form-field">
        <label>Category</label>
        <select v-model="category">
          <option>UPI</option>
          <option>Card</option>
          <option>Wallet</option>
          <option>Bank</option>
        </select>
      </div>

      <div class="form-field">
        <label>Status</label>
        <select v-model="status">
          <option>Success</option>
          <option>Pending</option>
          <option>Failed</option>
        </select>
      </div>

      <div class="form-field full">
        <label>Date</label>
        <input v-model="date" type="date" required />
      </div>

      <button class="primary-button" type="submit">
        {{ isEdit ? 'Update Payment' : 'Create Payment' }}
      </button>
    </form>
    <router-link class="base-button" to="/payments" style="margin-top: 18px; display: inline-block;">
      Back to Dashboard
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { payments } from '@/mock/data'

const route = useRoute()
const router = useRouter()

const id = route.query.id as string || ''
const isEdit = !!id
const payment = isEdit ? payments.find(p => p.id === id) : null

const user = ref(payment?.user || '')
const amount = ref(payment?.amount || 0)
const category = ref(payment?.category || 'UPI')
const status = ref(payment?.status || 'Success')
const date = ref(payment?.date || new Date().toISOString().slice(0,10))

function handleSubmit() {
  if (isEdit && payment) {
    payment.user = user.value
    payment.amount = amount.value
    payment.category = category.value as any
    payment.status = status.value as any
    payment.date = date.value
  } else {
    payments.push({
      id: `P${Math.floor(Math.random() * 900 + 100)}`,
      user: user.value,
      amount: amount.value,
      category: category.value as any,
      status: status.value as any,
      date: date.value
    })
  }
  router.push('/payments')
}
</script>

<style scoped>
/* Use the same .base-button style as PaymentDetail for dashboard links */
.base-button {
  background: #6366f1;
  color: #ffffff;
  padding: 10px 22px;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s;
  display: inline-block;
  margin-top: 18px;
}
.base-button:hover {
  background: #4f46e5;
}
/* Card (same as dashboard) */
.formal-card {
  max-width: 640px;
  margin: 40px auto;
  background: linear-gradient(120deg,#e0e7ff,#c7d2fe);
  border-radius: 22px;
  padding: 36px;
  box-shadow: 0 8px 32px rgba(99,102,241,0.12);
}

/* Header */
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
}
.payment-id {
  font-weight: 600;
  color: #6366f1;
}

/* Form layout */
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.form-field {
  display: flex;
  flex-direction: column;
}
.form-field.full {
  grid-column: span 2;
}
label {
  font-weight: 600;
  margin-bottom: 6px;
  color: #334155;
}

/* Inputs */
input, select {
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  font-size: 1rem;
}
input:focus, select:focus {
  outline: none;
  border-color: #6366f1;
}

/* Button */
.primary-button {
  grid-column: span 2;
  margin-top: 10px;
  padding: 14px;
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
  background: #6366f1;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
.primary-button:hover {
  background: #4f46e5;
}
</style>
