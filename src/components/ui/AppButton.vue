<script>
export default {
  props: {
    buttonType: String,
  },
  methods: {
    handleClick() {
      this.$emit('handleClick');
    }
  }
}
</script>

<template>
  <button
      type="button"
      class="btn"
      :class="'btn-' + buttonType"
      @click="handleClick"
  ><slot></slot></button>
</template>

<style scoped>
</style>
