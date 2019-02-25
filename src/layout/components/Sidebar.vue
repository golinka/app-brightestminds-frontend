<template>
  <div class="sidebar pb-3">
    <!-- SECTIONS MENU -->
    <div class="sidebar-menu">
      <div class="sidebar-menu__title">
        Menu
      </div>
      <ul class="sidebar-menu__links">
        <router-link active-class="active" tag="li" to="/products">
          <Icon name="products-icon"/>
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
        <router-link active-class="active" tag="li" to="/">
          <Icon name="dashboard-icon"/>
          <a>Dashboard</a>
        </router-link>
        <router-link active-class="active" tag="li" to="/subscriptions">
          <Icon name="subs-icon"/>
          <a>Subscriptions</a>
        </router-link>
        <router-link active-class="active" tag="li" to="/profile">
          <Icon name="profile-icon"/>
          <a>Profile</a>
        </router-link>
        <router-link active-class="active" tag="li" to="/logout">
          <Icon name="logout-icon"/>
          <a>Logout</a>
        </router-link>
      </ul>
    </div>
    <!-- END -->
  </div>
</template>

<script>
export default {}
</script>
