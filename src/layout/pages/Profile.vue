<template>
  <div class="page">
    <div class="row">
      <div class="col-12">
        <h2 class="page__title">
          Profile
        </h2>
      </div>
      <div
        v-if="user"
        class="col-12"
      >
        <div class="row">
          <div class="col-sm-9 col-12">
            <InputLabel
              v-for="(input, index) in inputs"
              :key="index"
              :label="input.label"
            >
              <template v-slot:input>
                <input
                  v-model="profile[input.name]"
                  v-validate="input.rules"
                  :class="[inputClass, {'has-error' : validationError(input.name)}]"
                  :name="input.name"
                  type="text"
                >
              </template>
              <template v-slot:error>
                <small
                  v-if="validationError(input.name)"
                  class="form-text text-danger"
                >
                  {{ validationError(input.name) }}
                </small>
              </template>
            </InputLabel>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-12">
            <button
              :class="buttonClass"
              class="btn"
              @click="toggleEditing"
            >
              {{ buttonText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import InputLabel from '../components/InputLabel'

export default {
  components: {
    InputLabel
  },
  data () {
    return {
      readOnly: true,
      inputs: [
        { name: 'username', rules: 'required|min:4|max:80', label: 'Username' },
        { name: 'email', rules: 'required|email|max:255', label: 'Email' },
        { name: 'fname', rules: 'required|alpha|min:2|max:35', label: 'First name' },
        { name: 'lname', rules: 'alpha|min:2|max:45', label: 'Last name' },
        { name: 'phone', rules: 'min:2|max:45', label: 'Phone number' },
        { name: 'company', rules: 'max:150', label: 'Company' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser'
    }),
    profile () {
      return this.user ? { ...this.user } : null
    },
    buttonClass () {
      return this.readOnly ? 'btn-secondary' : 'btn-dark'
    },
    buttonText () {
      return this.readOnly ? 'Edit profile' : 'Save'
    },
    inputClass () {
      return this.readOnly ? 'form-control-plaintext' : 'form-control'
    },
    validationError () {
      return (field) => this.$validator.errors.first(field)
    }
  },
  methods: {
    toggleEditing () {
      this.readOnly = !this.readOnly
      if (this.readOnly) this.$store.dispatch('UPDATE_USER', this.profile)
    }
  }
}
</script>
