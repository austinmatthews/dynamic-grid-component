<template>
  <div class="task-pane">
    <h3>Deal Details</h3>
    <p>ID: {{ selectedDeal.id }}</p>
    <p>Issuer: {{ selectedDeal.issuer_name }}</p>
    <p>Deal: {{ selectedDeal.deal_name }}</p>
    <p>Bloomberg ID: {{ selectedDeal.bloomberg_id }}</p>
    <p>Total: {{ selectedDeal.total }}</p>
    <p>Industry: {{ selectedDeal.industry }}</p>
    <p>Status: {{ selectedDeal.status }}</p>
    <p>Analysts: {{ selectedDeal.analysts.join(', ') }}</p>
    <p>Docs: {{ selectedDeal.doc_count }}</p>
    <p>Identifiers: {{ selectedDeal.custom_deal_identifiers.join(', ') }}</p>
  </div>
</template>

<script setup>
  const props = defineProps({
    selectedDeal: Object,
  });
</script>

<style lang="scss">
  @import '../styles.scss';
  .task-pane {
    border: 1px solid #ddd;
    padding: 10px;
    margin-top: 10px;
    background-color: $table-color;
  }
</style>
