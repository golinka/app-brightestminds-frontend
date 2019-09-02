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

<style lang="scss">
  @import '../../assets/scss/_variables';

  .sidebar {
    min-height: 80%;
    border-right: 2px solid $sidebar-border;

    &-menu {
      margin-bottom: 2.5em;

      &__title {
        margin-bottom: 0.7em;
        font-family: 'Lato', sans-serif;
        font-size: 1.1em;
        font-weight: 700;
        color: black;
      }

      &__links {
        li {
          position: relative;
          display: flex;
          align-items: center;
          margin-bottom: 0.7em;
          font-family: 'Lato', sans-serif;
          cursor: pointer;

          svg {
            width: 1.1em;
            height: 1.1em;
            fill: $sidebar-link;
            transition: all 0.3 ease;
          }

          a {
            display: block;
            margin-left: 0.7em;
            font-size: 0.9em;
            color: $sidebar-link;
            transition: all 0.3 ease;
          }

          &.active,
          &:hover {
            svg {
              fill: $sidebar-link-active;
            }

            a {
              color: $sidebar-link-active;
              text-decoration: none;
            }

            &::after {
              position: absolute;
              top: 0;
              right: -2px;
              width: 2px;
              height: 100%;
              content: '';
              background-color: $sidebar-border-active;
            }
          }
        }
      }
    }
  }
</style>
