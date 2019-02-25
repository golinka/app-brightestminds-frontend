<template>
  <div class="sidebar w-100 pt-5">
    <h4 class="sidebar__title mb-3">My Account</h4>
    <app-sidebar-menu></app-sidebar-menu>
  </div>
</template>

<script>
import SidebarMenu from './SidebarMenu.vue'

export default {
  components: {
    appSidebarMenu: SidebarMenu
  }
}
</script>
