<template>
  <div class="dynamic-grid">
    <table>
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.key">{{ column.label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.id">
          <td v-for="column in columns" :key="column.key">{{ row[column.key] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import mockDeals from '../mockDeals.json';

  const rows = ref(mockDeals);

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
