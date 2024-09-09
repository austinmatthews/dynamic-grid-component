import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import DynamicGrid from '@/components/DynamicGrid.vue';

describe('App.vue', () => {
  it('renders the search input and passes the search query to DynamicGrid', async () => {
    const wrapper = mount(App);
    const searchInput = wrapper.find('input[type="text"]');
    expect(searchInput.exists()).toBe(true);

    await searchInput.setValue('Test Query');
    expect(wrapper.findComponent(DynamicGrid).props('searchQuery')).toBe('Test Query');
  });

  it('passes the columns to DynamicGrid', () => {
    const wrapper = mount(App);
    const columns = wrapper.findComponent(DynamicGrid).props('columns');
    expect(columns).toEqual([
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
    ]);
  });
});
