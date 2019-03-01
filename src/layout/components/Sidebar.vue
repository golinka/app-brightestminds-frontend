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
    <div class="sidebar-menu" v-if="isAuth">
      <div class="sidebar-menu__title">
        My Account
      </div>
      <ul class="sidebar-menu__links">
        <router-link active-class="active" tag="li" to="/" exact>
          <Icon name="dashboard-icon"/>
          <a>Dashboard</a>
        </router-link>
        <router-link active-class="active" tag="li" to="/subscriptions" exact>
          <Icon name="subs-icon"/>
          <a>Subscriptions</a>
        </router-link>
        <router-link active-class="active" tag="li" to="/profile" exact>
          <Icon name="profile-icon"/>
          <a>Profile</a>
        </router-link>
        <li>
          <Icon name="logout-icon"/>
          <a href="/logout" @click.prevent="logout">Logout</a>
        </li>
      </ul>
    </div>
    <!-- END -->
    <!-- ADMIN MENU -->
    <div class="sidebar-menu" v-if="user && isAdmin">
      <div class="sidebar-menu__title">
        Admin panel
      </div>
      <ul class="sidebar-menu__links">
      </ul>
    </div>
    <!-- END -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    isAdmin: 'isAdmin',
    isAuth: 'isAuth',
    user: 'getUser'
  }),
  methods: mapActions({
    logout: 'LOGOUT'
  })
}
</script>
