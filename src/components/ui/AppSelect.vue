<script>
export default {
  props: {
    categories: Array,
    modelValue: String
  },
  methods: {
    onCategoryChange(event) {
      const selectedCategory = event.target.value;
      this.$emit('update:modelValue', selectedCategory);
    }
  }
};
</script>

<template>
  <select class="form-select" aria-label="Default select example" @change="onCategoryChange" :value="modelValue">
    <option selected value="">All</option>
    <option v-for="category in categories" :value="category" :key="category">
      {{ $capitalize(category) }}
    </option>
  </select>
</template>

<style>
</style>
