<template>
  <div class="dynamic-grid">
    <table>
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.key" @click="sortBy(column.key)">
            {{ column.label }}
            <span v-if="sortKey === column.key">{{ sortOrder === 'asc' ? '↑' : '↓' }}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in filteredRows" :key="row.id">
          <td v-for="column in columns" :key="column.key">{{ row[column.key] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import mockDeals from '../mockDeals.json';

  const props = defineProps(['searchQuery']);
  const rows = ref(mockDeals);
  const sortKey = ref('');
  const sortOrder = ref('asc');
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

  function sortBy(key) {
    if (sortKey.value === key) {
      sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
    } else {
      sortKey.value = key;
      sortOrder.value = 'asc';
    }

    rows.value.sort((a, b) => {
      if (a[key] === b[key]) return 0;
      if (sortOrder.value === 'asc') {
        return a[key] < b[key] ? -1 : 1;
      } else {
        return a[key] > b[key] ? -1 : 1;
      }
    });
  }

  const filteredRows = computed(() => {
    return rows.value.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(props.searchQuery.toLowerCase())
      )
    );
  });
</script>

<style lang="scss">
  @import '../styles.scss';

  .dynamic-grid {
    width: 100%;
    table {
      border-spacing: 0;
      background-color: $table-color;
      border-collapse: collapse;
      th {
        cursor: pointer;
        padding: 1rem;
        background-color: $primary-color;
        color: $tertiary-color;
      }
      th:hover {
        background-color: lighten($primary-color, 5%);
      }
      td {
        padding: 0.75rem;
        min-width: 3rem;
        text-align: center;
      }
      tr:hover {
        background-color: darken($table-color, 10%);
      }
    }
  }
</style>
