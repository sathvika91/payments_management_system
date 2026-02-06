<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <img src="/src/assets/vue.svg" alt="Logo" class="sidebar-logo" />
      <h2>Payments Dashboard</h2>
    </div>
    <nav class="sidebar-nav">
      <router-link to="/users" class="sidebar-link" active-class="active">Users</router-link>
      <router-link to="/payments" class="sidebar-link" active-class="active">Payments</router-link>
    </nav>
  </aside>
</template>

<script setup lang="ts"></script>

<style scoped>
.sidebar {
  width: 250px;
  min-height: 100vh;
  background: #0f172a;
  color: #f8fafc;
  padding: 28px 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 0 24px rgba(0,0,0,0.12);
}

.sidebar-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
}

.sidebar-logo {
  width: 38px;
  height: 38px;
}

.sidebar-header h2 {
  font-size: 1.25rem;
  font-weight: 700;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.sidebar-link {
  padding: 12px 18px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;
  color: #cbd5f5;
  text-decoration: none;
}

.sidebar-link:hover {
  background: #1e293b;
  color: #ffffff;
}

.active {
  background: #2563eb;
  color: #ffffff;
}
</style>
