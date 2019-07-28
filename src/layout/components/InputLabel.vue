<template>
  <div class="form-group row">
    <label class="form-group__label col-lg-3 col-md-4 col-form-label">
      <b>{{ label }}</b>
    </label>
    <div class="form-group__input col-lg-9 col-md-8">
      <slot name="input"></slot>
      <slot name="error"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>
