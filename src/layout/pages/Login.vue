<template>
  <div class="page">
    <div class="row">
      <h2 class="page__title col-12">Login</h2>
    </div>
    <div class="row">
      <div class="col-12 col-md-8 col-lg-7">
        <!-- FORM -->
        <form @submit.prevent="login">
          <div class="form-group">
            <transition name="fade" mode="out-in">
              <small v-if="error" class="form-text text-danger">{{ error }}</small>
            </transition>
          </div>
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
              Your password must be 4-25 characters long
            </small>
          </div>
          <button
            type="submit"
            class="btn btn-secondary btn--default"
          >Submit</button>
        </form>
        <!-- END -->
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
