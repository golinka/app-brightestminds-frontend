<template>
  <div>
    <Header></Header>
    <main class="container pt-4 pb-5">
      <div class="row">
        <div class="col-md-3 col-lg-4 d-none d-md-block">
          <Sidebar></Sidebar>
        </div>
        <div class="col-8 col-md-8">
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
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar/Sidebar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Sidebar,
    Footer
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
