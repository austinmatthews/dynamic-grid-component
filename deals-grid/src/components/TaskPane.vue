<template>
  <div class="task-pane">
    <h3>Details</h3>
    <ul>
      <li v-for="(value, key) in data" :key="key">
        <strong>{{ getLabel(key) }}: </strong>
        <span>{{ formatValue(value) }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
  const props = defineProps({
    data: Object,
    columns: Array,
  });

  function getLabel(key) {
    const column = props.columns.find((col) => col.key === key);
    return column ? column.label : key;
  }

  function formatValue(value) {
    if (Array.isArray(value)) {
      return value.join(', ');
    }
    return value;
  }
</script>

<style lang="scss">
  @import '../styles.scss';
  .task-pane {
    padding: 10px;
    margin-top: 10px;
    background-color: $table-color;
    ul {
      list-style: none;
      padding: 0;
      li {
        margin-bottom: 0.5rem;
      }
      strong {
        color: $primary-color;
      }
    }
  }
</style>
