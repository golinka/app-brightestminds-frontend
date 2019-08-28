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
    <Loader />
    <flash-message class="flash" />
  </div>
</template>

<script>
  import Cookie from 'js-cookie'
  import { mapActions } from 'vuex'

  import Header from './layout/Header.vue'
  import Sidebar from './layout/Sidebar.vue'
  import Footer from './layout/Footer.vue'
  import Loader from './layout/Loader.vue'

  export default {
    components: {
      Header,
      Sidebar,
      Footer,
      Loader
    },
    computed: {
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
