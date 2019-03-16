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
              v-validate="'required|min:4|max:80'"
              type="text"
              name="username"
              class="form-control"
              :class="{ 'has-error': usernameError }"
              placeholder="Enter username"
              autocomplete="username"
            >
            <small class="form-text text-danger" v-if="usernameError">{{ usernameError }}</small>
            <small class="form-text text-muted" v-else>We'll never share your username with anyone else</small>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              v-model="user.password"
              v-validate="'required|min:4|max:12'"
              type="password"
              name="password"
              class="form-control"
              :class="{ 'has-error': passwordError }"
              placeholder="Password"
              autocomplete="current-password"
            >
            <small class="form-text text-danger" v-if="passwordError">{{ passwordError }}</small>
            <small class="form-text text-muted" v-else>Your password must be 4-12 characters long</small>
          </div>
          <div class="form-group">
            <transition name="fade" mode="out-in">
              <small v-if="loginMessage" class="form-text text-danger">{{ loginMessage }}</small>
            </transition>
          </div>
          <button
            type="submit"
            class="btn btn-secondary btn--default"
            :disabled="!!errors.all().length"
            @click.prevent="login"
          >Submit</button>
        </form>
        <!-- END -->
      </div>
      <div class="col-12 mt-sm-5 mt-3 font-weight-light">
        New user? You need to
        <router-link :to="{ name: 'signup' }" class="text-secondary font-weight-bold">Sign up</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

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
  computed: {
    ...mapGetters([
      'loginMessage'
    ]),
    usernameError () {
      return this.$validator.errors.first('username')
    },
    passwordError () {
      return this.$validator.errors.first('password')
    }
  },
  methods: {
    async login () {
      if (await this.$validator.validate()) {
        this.$store.dispatch('LOGIN', this.user)
      }
    }
  }
}
</script>
