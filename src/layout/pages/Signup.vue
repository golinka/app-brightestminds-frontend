<template>
  <div class="page">
    <div class="row">
      <h2 class="page__title col-12">Registration</h2>
    </div>
    <div class="row mb-5">
      <div class="col-12 col-md-8 col-lg-7">
        <!-- FORM -->
        <form>
          <div class="form-group required">
            <label>Email</label>
            <input
              v-model="user.email"
              type="email"
              class="form-control"
              placeholder="Email"
              autocomplete="email"
            >
          </div>
          <div class="form-group required">
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
          <div class="form-group required">
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
          <div class="form-group required">
            <label>Confirm Password</label>
            <input
              v-model="confirmPassword"
              type="password"
              class="form-control"
              placeholder="Password"
            >
          </div>
          <div class="form-group required">
            <label>First Name</label>
            <input
              v-model="user.fname"
              type="text"
              class="form-control"
              placeholder="Your name"
            >
          </div>
          <div class="form-group">
            <label>Last Name</label>
            <input
              v-model="user.lname"
              type="text"
              class="form-control"
              placeholder="Last name"
            >
          </div>
          <div class="form-group">
            <label>Phone number</label>
            <input
              v-model="user.phone"
              type="text"
              class="form-control"
              placeholder="Phone number"
            >
          </div>
          <div class="form-group">
            <label>Company</label>
            <input
              v-model="user.company"
              type="text"
              class="form-control"
              placeholder="Company"
            >
          </div>
          <div class="form-group">
            <transition name="fade" mode="out-in">
              <small v-if="error" class="form-text text-danger">{{ error }}</small>
            </transition>
          </div>
          <button
            type="submit"
            class="btn btn-secondary btn--default"
            @click.prevent="signup"
          >Submit</button>
        </form>
        <!-- END -->
      </div>
      <div class="col-12 mt-sm-5 mt-3 font-weight-light">
        Already are registered? You need to
        <router-link to="/login" class="text-secondary font-weight-bold">Login</router-link>
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
        password: null,
        fname: null,
        lname: null,
        phone: null,
        company: null
      },
      confirmPassword: null
    }
  },
  methods: {
    async signup () {
      try {
        if (this.user.password === this.confirmPassword) {
          await this.$store.dispatch('SIGNUP', this.user)
        }
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
