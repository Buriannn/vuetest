<script>
import AppSelect from "@/components/ui/AppSelect.vue";
import AppButton from "@/components/ui/AppButton.vue";
import AppQuotesList from "@/components/AppQuotesList.vue";
import AppAlertMessage from "@/components/ui/AppAlertMessage.vue";

export default {
  data() {
    return {
      quotesLists: [],
      category: null,
      categories: ['age', 'alone', 'amazing', 'anger', 'architecture', 'art', 'birthday', 'business'],
      selectedCategory: null,
      errorMessage: '',
      copiedText: false,
      isLoading: true,
      currentQuote: '',
    };
  },
  methods: {
    async getQuotes() {
      this.isLoading = true;

      const url = this.selectedCategory
          ? `https://api.api-ninjas.com/v1/quotes?category=${this.selectedCategory}`
          : 'https://api.api-ninjas.com/v1/quotes';

      try {
        const res = await fetch(url, {
          headers: {
            'X-Api-key': 'HQR1YARTvJdk7F3hmtBB8Q==tTu2ZM5XHBrI6JI6',
          }
        });
        if (res.ok) {
          const data = await res.json();
          this.quotesLists.push(data[0]);
          this.currentQuote = data[0]
          this.copiedText = false;
          this.isLoading = false;
        } else {
          this.errorMessage = "Error loading quotes";
          this.isLoading = false
        }
      } catch (e) {
        this.errorMessage = `Error loading quotes ${e}`;
        this.isLoading = false
      }
    },

    async copyToClipboard(text) {
      try {
        await navigator.clipboard.writeText(text);
        this.copiedText = true;
      } catch (err) {
        this.errorMessage = `Error loading quotes ${err}`;
      }
    },

  },
  mounted() {
    this.getQuotes()
  },
  components: {
    AppQuotesList,
    AppSelect,
    AppButton,
    AppAlertMessage
  }
};
</script>

<template>
  <div class="container">
    <h2>Selected Category: {{ $capitalize(selectedCategory) }}</h2>
    <div class="current-quote">
      <div class="current-quote-content">
        <div class="current-quote-text" v-if="quotesLists.length > 0 && !isLoading">
          <p>
            {{ currentQuote.quote }}
            <app-button
                :button-type="copiedText ? 'success' : 'primary'"
                @handleClick="copyToClipboard(currentQuote.quote)"
            >
              <i class="bi" :class="copiedText ? 'bi-clipboard-check' : 'bi-clipboard'"></i>
            </app-button>
          </p>
          <p><strong>Author: {{ currentQuote.author }}</strong></p>
        </div>

        <div class="loader" v-if="isLoading"></div>
      </div>


      <div class="quote-settings">
        <app-select :categories="categories" v-model="selectedCategory"></app-select>
        <app-button @handleClick="getQuotes" button-type="primary">Get Quotes</app-button>
      </div>
    </div>

    <app-alert-message v-if="errorMessage" :message="errorMessage" type="danger"></app-alert-message>


    <app-quotes-list v-if="quotesLists.length > 0" :quotesLists="quotesLists"></app-quotes-list>
  </div>
</template>

<style>

.current-quote-content {
  min-height: 150px;
  align-items: center;
  justify-content: center;
}

.quote-settings {
  display: grid;
  grid-template-columns: 1fr 150px;
  grid-column-gap: 15px;
  margin-bottom: 30px;
}

.loader {
  width: 100%;
  height: 80px;
  background: linear-gradient(90deg, #0001 33%, #0005 50%, #0001 66%) #f2f2f2;
  background-size: 300% 100%;
  animation: l1 1s infinite linear;
}

@keyframes l1 {
  0% {
    background-position: right
  }
}
</style>
