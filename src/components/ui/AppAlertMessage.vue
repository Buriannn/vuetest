<script>
export default {
  props: {
    message: String,
    type: String,
  }
}
</script>

<template>
  <div class="alert" :class="'alert-' + type" role="alert">
    {{message}}
  </div>
</template>

<style scoped>

</style>
