<template>
  <div v-show="loader" class="loader">
    <div class="loader__icon">
      <Icon name="loader-icon" />
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: mapState({
      loader: state => state.general.loader
    })
  }
</script>

<style lang="scss">
.loader {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: white;

  &__icon {
    svg {
      animation: spin 1s infinite;
    }
  }
}
</style>
