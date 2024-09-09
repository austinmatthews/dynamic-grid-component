<template>
  <div class="dynamic-grid">
    <button @click="exportToCSV">Export to CSV</button>
    <table>
      <thead>
        <tr>
          <th v-for="column in props.columns" :key="column.key" @click="sortBy(column.key)">
            {{ column.label }}
            <span v-if="sortKey === column.key">{{ sortOrder === 'asc' ? '↑' : '↓' }}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in filteredRows"
          :key="row.id"
          @click="toggleSelection(row.id)"
          :class="{ selected: selectedDeals.includes(row.id) }">
          <td v-for="column in props.columns" :key="column.key">
            {{ formatValue(row[column.key]) }}
          </td>
        </tr>
      </tbody>
    </table>
    <TaskPane v-if="selectedDeals.length === 1" :data="selectedDeal" :columns="props.columns" />
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import mockDeals from '../mockDeals.json';
  import TaskPane from './TaskPane.vue';

  const props = defineProps({
    searchQuery: String,
    columns: Array,
  });

  const rows = ref(mockDeals);
  const sortKey = ref('');
  const sortOrder = ref('asc');
  const selectedDeals = ref([]);

  function formatValue(value) {
    if (Array.isArray(value)) {
      return value.join(', ');
    }
    return value;
  }

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

  const selectedDeal = computed(() => {
    return rows.value.find((deal) => deal.id === selectedDeals.value[0]);
  });

  function toggleSelection(id) {
    if (selectedDeals.value.includes(id)) {
      selectedDeals.value = selectedDeals.value.filter((dealId) => dealId !== id);
    } else {
      selectedDeals.value.push(id);
    }
  }

  function exportToCSV() {
    const headers = props.columns.map((col) => col.label).join(',');
    const rowsToExport =
      selectedDeals.value.length > 0
        ? rows.value.filter((deal) => selectedDeals.value.includes(deal.id))
        : filteredRows.value;

    const rowsData = rowsToExport.map((deal) =>
      props.columns
        .map((col) => {
          const value = deal[col.key];
          return Array.isArray(value) ? value.join(', ') : value;
        })
        .join(',')
    );

    const csvContent = [headers, ...rowsData].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'deals.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
</script>

<style lang="scss">
  @import '../styles.scss';

  .dynamic-grid {
    width: 100%;
    table {
      width: 100%;
      table-layout: fixed;
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
      .selected {
        background-color: darken($table-color, 30%);
      }
    }
  }
</style>
