<template>
  <div class="sidebar pb-3">
    <!-- SECTIONS MENU -->
    <div class="sidebar-menu">
      <div class="sidebar-menu__title">
        Menu
      </div>
      <ul class="sidebar-menu__links">
        <router-link
          active-class="active"
          tag="li"
          :to="{ name: 'products' }"
          exact
        >
          <Icon name="products-icon" />
          <a>Products</a>
        </router-link>
      </ul>
    </div>
    <!-- END -->
    <!-- DASHBOARD MENU -->
    <div
      v-if="isAuth"
      class="sidebar-menu"
    >
      <div class="sidebar-menu__title">
        My Account
      </div>
      <ul class="sidebar-menu__links">
        <router-link
          active-class="active"
          tag="li"
          :to="{ name: 'dashboard' }"
          exact
        >
          <Icon name="dashboard-icon" />
          <a>Dashboard</a>
        </router-link>
        <router-link
          active-class="active"
          tag="li"
          :to="{ name: 'subscriptions' }"
          exact
        >
          <Icon name="subs-icon" />
          <a>Subscriptions</a>
        </router-link>
        <router-link
          active-class="active"
          tag="li"
          :to="{ name: 'profile' }"
          exact
        >
          <Icon name="profile-icon" />
          <a>Profile</a>
        </router-link>
        <li>
          <Icon name="logout-icon" />
          <a
            href="/logout"
            @click.prevent="logout"
          >Logout</a>
        </li>
      </ul>
    </div>
    <!-- END -->
    <!-- ADMIN MENU -->
    <div
      v-if="user && admin"
      class="sidebar-menu"
    >
      <div class="sidebar-menu__title">
        Admin panel
      </div>
      <ul class="sidebar-menu__links" />
    </div>
    <!-- END -->
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        isAuth: 'isAuth',
        user: 'getUser'
      }),
      admin () {
        return this.user.role === 'admin'
      }
    },
    methods: mapActions({
      logout: 'LOGOUT'
    })
  }
</script>
