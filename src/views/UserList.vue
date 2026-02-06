<template>
  <div class="user-list formal-card">
    <div class="header-row formal-header">
      <h2>User Dashboard</h2>
      <router-link to="/users/new" class="base-button">Add User</router-link>
    </div>

    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="u in users" :key="u.id">
            <td>{{ u.id }}</td>
            <td>{{ u.name }}</td>
            <td>{{ u.email }}</td>
            <td>{{ u.role }}</td>
            <td>
              <span :class="['badge', u.status === 'Active' ? 'active' : 'inactive']">{{ u.status }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { users } from '@/mock/data'
</script>

table {
th {
td {
<style scoped>
/* Formal dashboard card and header (kept consistent with payments) */
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

.user-list {
  max-width: 900px;
  margin: 40px auto 0 auto;
}

.header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
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

.base-button {
  background: #6366f1;
  color: #ffffff;
  padding: 10px 22px;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s;
}
.base-button:hover { background: #4f46e5; }

/* badge for status */
.badge {
  display: inline-block;
  min-width: 90px;
  text-align: center;
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
}

.badge.active {
  background-color: #dcfce7;
  color: #166534;
}

.badge.inactive {
  background-color: #fee2e2;
  color: #991b1b;
}

</style>