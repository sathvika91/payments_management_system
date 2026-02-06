<template>
  <header class="topbar">
    <div class="topbar-left">
      <h2>Payments Management</h2>
    </div>
    <nav class="topbar-nav">
      <router-link to="/payments" class="topbar-link" active-class="active">Payments</router-link>
      <router-link to="/users" class="topbar-link" active-class="active">Users</router-link>
    </nav>

  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.topbar {
  background: linear-gradient(90deg,#6366f1 0%,#60a5fa 100%);
  color: #fff;
  padding: 0 32px;
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 24px rgba(99,102,241,0.10);
  border-bottom: 2px solid #a5b4fc;
  position: sticky;
  top: 0;
  z-index: 100;
}
.topbar-left {
  display: flex;
  align-items: center;
  gap: 14px;
}

.topbar h2 {
  font-size: 1.35rem;
  font-weight: 800;
  margin: 0;
  letter-spacing: 0.5px;
  color: #fff;
}
.topbar-nav {
  display: flex;
  gap: 24px;
}
.topbar-link {
  color: #e0e7ff;
  font-size: 1.08rem;
  font-weight: 600;
  text-decoration: none;
  padding: 8px 18px;
  border-radius: 8px;
  transition: background 0.18s, color 0.18s;
}
.topbar-link.active, .topbar-link:hover {
  background: #fff;
  color: #6366f1;
  box-shadow: 0 2px 8px #6366f133;
}

</style>
