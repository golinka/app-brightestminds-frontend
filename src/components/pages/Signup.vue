<template>
  <div class="page">
    <div class="row">
      <h2 class="page__title col-12">
        Registration
      </h2>
    </div>
    <div class="row mb-5">
      <div class="col-12 col-md-8 col-lg-7">
        <!-- FORM -->
        <form>
          <div class="form-group required">
            <label>Email</label>
            <input
              v-model="user.email"
              v-validate="'required|email|max:255'"
              type="email"
              name="email"
              class="form-control"
              :class="{ 'has-error': validationError('email') }"
              placeholder="Email"
              autocomplete="email"
            >
            <small
              v-if="validationError('email')"
              class="form-text text-danger"
            >
              {{ validationError('email') }}
            </small>
          </div>
          <div class="form-group required">
            <label>Username</label>
            <input
              v-model="user.username"
              v-validate="'required|min:4|max:80'"
              type="text"
              name="username"
              class="form-control"
              :class="{ 'has-error': validationError('username') }"
              placeholder="Enter username"
              autocomplete="username"
            >
            <small
              v-if="validationError('username')"
              class="form-text text-danger"
            >
              {{ validationError('username') }}
            </small>
            <small
              v-else
              class="form-text text-muted"
            >
              We'll never share your username with anyone else.
            </small>
          </div>
          <div class="form-group required">
            <label>Password</label>
            <input
              ref="password"
              v-model="user.password"
              v-validate="'required|min:4|max:12'"
              type="password"
              name="password"
              class="form-control"
              :class="{ 'has-error': validationError('password') }"
              placeholder="Password"
              autocomplete="current-password"
            >
            <small
              v-if="validationError('password')"
              class="form-text text-danger"
            >
              {{ validationError('password') }}
            </small>
            <small
              v-else
              class="form-text text-muted"
            >
              Your password must be 4-12 characters long
            </small>
          </div>
          <div class="form-group required">
            <label>Confirm Password</label>
            <input
              v-model="confirmPassword"
              v-validate="'required|confirmed:password'"
              data-vv-as="password"
              type="password"
              name="confirmPassword"
              class="form-control"
              :class="{ 'has-error': validationError('confirmPassword') }"
              placeholder="Password again"
            >
            <small
              v-if="validationError('confirmPassword')"
              class="form-text text-danger"
            >
              {{ validationError('confirmPassword') }}
            </small>
          </div>
          <div class="form-group required mt-5">
            <label>First Name</label>
            <input
              v-model="user.fname"
              v-validate="'required|alpha|min:2|max:35'"
              type="text"
              name="fname"
              class="form-control"
              :class="{ 'has-error': validationError('fname') }"
              placeholder="Your name"
            >
            <small
              v-if="validationError('fname')"
              class="form-text text-danger"
            >
              {{ validationError('fname') }}
            </small>
          </div>
          <div class="form-group">
            <label>Last Name</label>
            <input
              v-model="user.lname"
              v-validate="'alpha|min:2|max:45'"
              type="text"
              name="lname"
              class="form-control"
              :class="{ 'has-error': validationError('lname') }"
              placeholder="Last name"
            >
            <small
              v-if="validationError('lname')"
              class="form-text text-danger"
            >
              {{ validationError('lname') }}
            </small>
          </div>
          <div class="form-group">
            <label>Phone number</label>
            <input
              v-model="user.phone"
              v-validate="'min:2|max:45'"
              type="text"
              name="phone"
              class="form-control"
              :class="{ 'has-error': validationError('phone') }"
              placeholder="Phone number"
            >
            <small
              v-if="validationError('phone')"
              class="form-text text-danger"
            >
              {{ validationError('phone') }}
            </small>
          </div>
          <div class="form-group">
            <label>Company</label>
            <input
              v-model="user.company"
              v-validate="'max:150'"
              type="text"
              name="company"
              class="form-control"
              :class="{ 'has-error': validationError('company') }"
              placeholder="Company"
            >
            <small
              v-if="validationError('company')"
              class="form-text text-danger"
            >
              {{ validationError('company') }}
            </small>
          </div>
          <div class="form-group">
            <transition
              name="fade"
              mode="out-in"
            >
              <small
                v-if="signupMessage"
                class="form-text text-danger"
              >{{ signupMessage }}</small>
            </transition>
          </div>
          <button
            type="submit"
            class="btn btn-secondary btn--default"
            :disabled="!!errors.all().length"
            @click.prevent="signup"
          >
            Submit
          </button>
        </form>
        <!-- END -->
      </div>
      <div class="col-12 mt-sm-5 mt-3 font-weight-light">
        Already are registered? You need to
        <router-link
          :to="{ name: 'login' }"
          class="text-secondary font-weight-bold"
        >
          Login
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

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
    computed: {
      ...mapGetters([
        'signupMessage'
      ]),
      validationError () {
        return (field) => this.$validator.errors.first(field)
      }
    },
    methods: {
      ...mapActions({
        signupAction: 'SIGNUP'
      }),
      signup () {
        if (this.user.password === this.confirmPassword) {
          this.signupAction(this.user)
        }
      }
    }
  }
</script>
