<template>
  <div id="app">
    <input type="text" v-model="searchQuery" placeholder="Search deals..." />
    <DynamicGrid :columns="columns" :searchQuery="searchQuery" />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import DynamicGrid from './components/DynamicGrid.vue';

  const searchQuery = ref('');

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'issuer_name', label: 'Issuer' },
    { key: 'deal_name', label: 'Deal' },
    { key: 'bloomberg_id', label: 'Bloomberg ID' },
    { key: 'total', label: 'Total' },
    { key: 'industry', label: 'Industry' },
    { key: 'status', label: 'Status' },
    { key: 'analysts', label: 'Analysts' },
    { key: 'doc_count', label: 'Docs' },
    { key: 'custom_deal_identifiers', label: 'Identifiers' },
  ];
</script>

<style lang="scss">
  @import 'styles.scss';
  #app {
    text-align: center;
    input[type='text'] {
      padding: 0.5rem;
      outline: none;
      margin-bottom: 1rem;
      font-size: 1rem;
      border: 0.3rem solid $background-color;
      border-radius: 0.5rem;
      background-color: $table-color;
      color: $primary-color;
      &::placeholder {
        color: $primary-color;
      }
      &:focus {
        border: 0.3rem solid $primary-color;
      }
    }
  }
</style>
