<template>
  <header class="header">
    <div class="container">
      <div class="row align-items-center">
        <!-- LOGO -->
        <div class="header__logo col-6 col-md-4">
          <router-link tag="a" to="dashboard">
            <Icon name="logo"/>
            <span>App</span>
          </router-link>
        </div>
        <!-- LOGO END -->
        <!-- NAVIGATION -->
        <div class="header__navigation col-6 col-md-8" role="navigation">
          <div class="row align-items-center justify-content-sm-end">
            <div class="header__menu d-none d-md-flex flex-grow-1">
              <ul class="justify-content-center align-items-baseline p-0">
                <li><a href="https://brightestminds.io/">Home</a></li>
                <li><a href="https://brightestminds.io/blog">Insights</a></li>
                <li><a href="https://brightestminds.io/case-studies/">Case studies</a></li>
                <li><a href="https://brightestminds.io/about-us/">About us</a></li>
              </ul>
            </div>
            <div class="header__user d-flex align-items-center justify-content-end">
              <Icon name="brain"/>
              <span v-if="isAuth && user" class="pl-2">
                {{ user.fname }} {{ user.lname }}
              </span>
              <template v-else>
                <router-link tag="a" to="/login" class="ml-2">
                  Login
                </router-link>
              </template>
            </div>
            <div class="header__toggle ml-3">
              <Icon name="menu-icon"/>
              <span>
                <Icon name="close-icon"/>
              </span>
            </div>
          </div>
        </div>
        <!-- NAVIGATION END-->
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isAuth: 'isAuth',
      user: 'getUser'
    })
  }
}
</script>
