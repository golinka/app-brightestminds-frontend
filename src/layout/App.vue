<template>
  <div>
    <app-header></app-header>
    <main class="content">
      <div class="row">
        <div class="col-md-4 d-none d-md-block">
          <app-sidebar></app-sidebar>
        </div>
        <div class="col-8 col-md-8">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar/Sidebar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    appHeader: Header,
    appSidebar: Sidebar,
    appFooter: Footer
  }
}
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
