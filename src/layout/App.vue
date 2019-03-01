<template>
  <div>
    <Header></Header>
    <main class="content container py-sm-5 pt-2 pb-4">
      <div class="row">
        <div class="col-md-3 col-lg-2 d-none d-md-block">
          <Sidebar></Sidebar>
        </div>
        <div class="col-12 col-md-9 col-lg-10">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Sidebar,
    Footer
  },
  methods: mapActions({
    getUserDetails: 'GET_USER_DETAILS'
  }),
  created () {
    this.getUserDetails()
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
