<template>
  <div class="page">
    <div class="row">
      <h2 class="page__title col-12">Login</h2>
    </div>
    <div class="row mb-5">
      <div class="col-12 col-md-8 col-lg-7">
        <!-- FORM -->
        <form>
          <div class="form-group">
            <label>Username</label>
            <input
              v-model="user.username"
              type="text"
              class="form-control"
              placeholder="Enter username"
              autocomplete="username"
            >
            <small class="form-text text-muted">We'll never share your username with anyone else.</small>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              v-model="user.password"
              type="password"
              class="form-control"
              placeholder="Password"
              autocomplete="current-password"
            >
            <small class="form-text text-muted">
              Your password must be 4-12 characters long
            </small>
          </div>
          <div class="form-group">
            <transition name="fade" mode="out-in">
              <small v-if="error" class="form-text text-danger">{{ error }}</small>
            </transition>
          </div>
          <button
            type="submit"
            class="btn btn-secondary btn--default"
            @click.prevent="login"
          >Submit</button>
        </form>
        <!-- END -->
      </div>
      <div class="col-12 mt-sm-5 mt-3 font-weight-light">
        New user? You need to
        <router-link to="/signup" class="text-secondary font-weight-bold">Sign up</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      error: null,
      user: {
        username: null,
        password: null
      }
    }
  },
  methods: {
    async login () {
      try {
        await this.$store.dispatch('LOGIN', this.user)
      } catch (error) {
        this.error = error
        setTimeout(() => {
          this.error = null
        }, 3500)
      }
    }
  }
}
</script>
