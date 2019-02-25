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
              <app-sidebar-menu class="d-block d-md-none mt-1"></app-sidebar-menu>
            </div>
            <div class="header__user d-flex align-items-center justify-content-end">
              <Icon name="brain"/>
              <span class="pl-2">
                Vlad Goloshchuk
              </span>
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
import SidebarMenu from './Sidebar/SidebarMenu'
import Icon from './Icon'

export default {
  components: {
    appSidebarMenu: SidebarMenu,
    Icon
  }
}
</script>
