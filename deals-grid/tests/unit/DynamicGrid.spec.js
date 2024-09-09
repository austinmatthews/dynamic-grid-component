import { mount } from '@vue/test-utils';
import DynamicGrid from '@/components/DynamicGrid.vue';
import TaskPane from '@/components/TaskPane.vue';
import mockDeals from '@/mockDeals.json';

describe('DynamicGrid.vue', () => {
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

  it('renders table with correct columns and data', () => {
    const wrapper = mount(DynamicGrid, {
      props: {
        columns,
        searchQuery: '',
      },
    });
    const headers = wrapper.findAll('th');
    expect(headers).toHaveLength(columns.length);
    expect(headers[0].text()).toBe('ID');

    const rows = wrapper.findAll('tbody tr');
    expect(rows).toHaveLength(mockDeals.length);
  });

  it('sorts data by clicking on column headers', async () => {
    const wrapper = mount(DynamicGrid, {
      props: {
        columns,
        searchQuery: '',
      },
    });
    const idHeader = wrapper.find('th:first-child');
    await idHeader.trigger('click');
    const firstRow = wrapper.find('tbody tr:first-child td:first-child');
    expect(firstRow.text()).toBe('1'); // Ascending order

    await idHeader.trigger('click');
    const lastRow = wrapper.find('tbody tr:last-child td:first-child');
    expect(lastRow.text()).toBe('1'); // Descending order
  });

  it('filters data based on search query', async () => {
    const wrapper = mount(DynamicGrid, {
      props: {
        columns,
        searchQuery: 'Tech',
      },
    });
    const rows = wrapper.findAll('tbody tr');
    expect(rows.length).toBeLessThan(mockDeals.length);
  });

  it('toggles row selection and shows TaskPane with correct data', async () => {
    const wrapper = mount(DynamicGrid, {
      props: {
        columns,
        searchQuery: '',
      },
    });
    const firstRow = wrapper.find('tbody tr:first-child');
    await firstRow.trigger('click');
    const taskPane = wrapper.findComponent(TaskPane);
    expect(taskPane.exists()).toBe(true);
    expect(taskPane.props('data').id).toBe(mockDeals[0].id);
  });
});
