<template>
  <header class="header">
    <div class="container">
      <div class="row align-items-center">
        <div class="header__logo col-7 col-sm-4">
          <a href="/blog">
            <img
              src="https://brightestminds.io/blog/wp-content/themes/gridlove/assets/img/logo.svg"
              alt="BrightestMinds blog logo"
            />
          </a>
        </div>
        <nav class="header__navigation col-5 col-sm-8" role="navigation">
          <div class="header__menus" :class="{ active: toggleIcon }">
            <ul class="justify-content-end align-items-baseline">
              <li><a href="#how">How it works</a></li>
              <li><a href="case.html">Case studies</a></li>
              <li><a href="pricing.html">Pricing</a></li>
              <li class="request"><a href="#">Request a demo</a></li>
            </ul>
            <app-sidebar-menu class="d-block d-md-none mt-1"></app-sidebar-menu>
          </div>
          <div
            class="header__toggle"
            :class="{ active: toggleIcon }"
            @click="toggleMenu"
          >
            <img
              src="https://brightestminds.io/blog/wp-content/themes/gridlove/assets/img/menu-icon.svg"
              alt="toggle icon"
            />
            <span
              ><img
                src="https://brightestminds.io/blog/wp-content/themes/gridlove/assets/img/close-icon.svg"
                alt="close icon"
            /></span>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import SidebarMenu from "./Sidebar/SidebarMenu.vue";

export default {
  data() {
    return {
      toggleIcon: false
    };
  },
  methods: {
    toggleMenu() {
      this.toggleIcon = !this.toggleIcon;
    }
  },
  components: {
    appSidebarMenu: SidebarMenu
  }
};
</script>
