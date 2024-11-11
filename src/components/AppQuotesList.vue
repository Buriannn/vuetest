<script>
export default {
  props: {
    quotesLists: Array,
  }
}
</script>

<template>
  <div class="quotes-list-container">
    <ul class="quotes-list list-group list-group-flush">
      <li class="list-group-item" v-for="quoteItem in quotesLists" :key="quoteItem">
        <p>{{ quoteItem.quote }}</p>
        <p><strong>Author:{{ quoteItem.author }}</strong></p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.quotes-list-container {
  height: 50vh;
  overflow-y: auto;
}
</style>
