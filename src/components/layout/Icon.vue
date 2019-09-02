<template>
  <svg
    :class="className"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title v-if="title">{{ title }}</title>
    <use
      :xlink:href="iconPath"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    />
  </svg>
</template>

<script>
  export default {
    name: 'Icon',
    props: {
      name: {
        type: String,
        required: true
      },
      title: {
        type: String,
        default: null
      }
    },
    computed: {
      iconPath () {
        return require(`../../assets/sprite/${this.name}.svg`).default.url
      },
      className () {
        return 'svg-icon svg-icon--' + this.name
      }
    }
  }
</script>

<style lang="scss">
  .svg-icon {
    &--logo {
      width: 10em;
      height: 2.5em;
    }

    &--brain {
      width: 1.7em;
      height: 1.7em;
    }

    &--menu-icon {
      width: 1.4em;
      height: 1.3em;
    }

    &--close-icon {
      width: 1.4em;
      height: 1em;
    }

    &--date-icon {
      width: 1.2em;
      height: 1.2em;
    }

    &--loader-icon {
      width: 2.5em;
      height: 2.5em;
    }

    &--running-icon,
    &--paused-icon,
    &--edited-icon,
    &--draft-icon,
    &--stopped-icon {
      width: 1.3em;
      height: 1.3em;
    }

    &--completed-icon {
      width: 1.5em;
      height: 1.5em;
    }

    &--interested-icon,
    &--maybe_later-icon,
    &--not_interested-icon,
    &--prospects-icon,
    &--delivered-icon,
    &--replied-icon,
    &--not-reaction-icon {
      width: 1.5em;
      height: 1.5em;
    }

    &--prospects-icon {
      width: 1.4em;
      height: 1.4em;
    }

    &--opened-icon {
      width: 1.3em;
      height: 1.15em;
    }
  }
</style>
