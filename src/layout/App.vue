<template>
  <div>
    <Header />
    <main :class="['content container py-sm-5 pt-2 pb-4', componentClasses]">
      <div class="row">
        <div class="col-md-3 col-lg-2 d-none d-md-block">
          <Sidebar />
        </div>
        <div class="col-12 col-md-9 col-lg-10">
          <transition
            name="fade"
            mode="out-in"
          >
            <router-view />
          </transition>
        </div>
      </div>
    </main>
    <Footer />
    <Loader v-show="loader" />
    <flash-message class="flash" />
  </div>
</template>

<script>
  import Cookie from 'js-cookie'
  import { mapState, mapActions } from 'vuex'

  import Header from './components/Header.vue'
  import Sidebar from './components/Sidebar.vue'
  import Footer from './components/Footer.vue'
  import Loader from './components/Loader.vue'

  export default {
    components: {
      Header,
      Sidebar,
      Footer,
      Loader
    },
    computed: {
      ...mapState({
        loader: state => state.general.loader
      }),
      componentClasses () {
        return { overflow: this.loader }
      }
    },
    created () {
      if (Cookie.get('appbm-token')) this.getUserDetails()
    },
    methods: mapActions({
      getUserDetails: 'GET_USER_DETAILS'
    })
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

  .overflow {
    overflow: hidden;
  }
</style>
