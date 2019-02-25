<template>
  <div class="sidebar">
    <!-- SECTIONS MENU -->
    <div class="sidebar-menu">
      <div class="sidebar-menu__title">
        Menu
      </div>
      <ul class="sidebar-menu__links">
        <router-link tag="li" to="products">
          <a>Products</a>
        </router-link>
      </ul>
    </div>
    <!-- END -->
    <!-- DASHBOARD MENU -->
    <div class="sidebar-menu">
      <div class="sidebar-menu__title">
        My Account
      </div>
      <ul class="sidebar-menu__links">
        <router-link tag="li" to="products">
          <a>Dashboard</a>
        </router-link>
        <router-link tag="li" to="products">
          <a>Dashboard</a>
        </router-link>
        <router-link tag="li" to="products">
          <a>Dashboard</a>
        </router-link>
        <router-link tag="li" to="products">
          <a>Dashboard</a>
        </router-link>
      </ul>
    </div>
    <!-- END -->
  </div>
</template>

<script>
export default {}
</script>
