<template>
  <div class="formal-card">
    <div class="formal-header">
      <h2>User Registration</h2>
    </div>
    <form class="card" @submit.prevent="submit">
      <label>Name <input v-model="name" type="text" placeholder="Full name" required/></label>
      <label>Email <input v-model="email" type="email" placeholder="Email" required/></label>
      <label>Role
        <select v-model="role">
          <option>Customer</option>
          <option>Merchant</option>
          <option>Admin</option>
        </select>
      </label>
      <label>Status
        <select v-model="status">
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </label>
      <BaseButton type="submit">Save User</BaseButton>
    </form>
    <router-link class="base-button" to="/users" style="margin-top: 18px; display: inline-block;">
      Back to Dashboard
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseButton from '@/components/common/BaseButton.vue'
import { users } from '@/mock/data'

const name = ref('')
const email = ref('')
const role = ref('Customer')
const status = ref('Active')
const router = useRouter()

const submit = () => {
  users.value.push({
    id: users.value.length ? users.value[users.value.length-1].id + 1 : 1,
    name: name.value,
    email: email.value,
    role: role.value as 'Customer' | 'Merchant' | 'Admin',
    status: status.value as 'Active' | 'Inactive'
  })
  router.push('/users')
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
/* Formal dashboard card and header */
.formal-card {
  background: linear-gradient(135deg,#f8fafc 60%,#e0e7ff 100%);
  border-radius: 22px;
  box-shadow: 0 8px 32px rgba(99,102,241,0.10);
  border: 1.5px solid #c7d2fe;
  padding: 36px 32px 28px 32px;
  margin: 0 auto 32px auto;
  max-width: 480px;
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
/* Formal color palette */
.card {
  background: #fff;
  padding: 24px 20px 20px 20px;
  border-radius: 18px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 4px 24px #6366f133;
  border: 1.5px solid #c7d2fe;
  margin: 0 auto;
}

input, select {
  border: 1.5px solid #c7d2fe;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 1rem;
  margin-top: 4px;
  margin-bottom: 8px;
  background: #f8fafc;
  transition: border 0.18s, box-shadow 0.18s;
}
input:focus, select:focus {
  border: 1.5px solid #6366f1;
  outline: none;
  box-shadow: 0 2px 8px #6366f133;
}
label {
  font-weight: 600;
  color: #252ace;
  margin-bottom: 2px;
}
form.card {
  margin-top: 12px;
}
input, select {
  padding: 8px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #23395d;
  background: #f8fafc;
  color: #14213d;
  font-size: 1rem;
}
label {
  color: #14213d;
  font-weight: 500;
}
h2 {
  color: #14213d;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 18px;
}
</style>
