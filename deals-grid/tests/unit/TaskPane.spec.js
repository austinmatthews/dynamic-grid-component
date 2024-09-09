import { mount } from '@vue/test-utils';
import TaskPane from '@/components/TaskPane.vue';

describe('TaskPane.vue', () => {
  const data = {
    id: 1,
    issuer_name: 'Issuer 1',
    deal_name: 'Deal 1',
    bloomberg_id: 'BLOOM123',
    total: 1000000,
    industry: 'Finance',
    status: 'Active',
    analysts: ['Analyst 1', 'Analyst 2'],
    doc_count: 5,
    custom_deal_identifiers: ['ID1', 'ID2'],
  };

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

  it('renders details correctly using column labels', () => {
    const wrapper = mount(TaskPane, {
      props: { data, columns },
    });

    const items = wrapper.findAll('li');
    expect(items).toHaveLength(Object.keys(data).length);

    expect(items[0].text()).toContain('ID: 1');
    expect(items[1].text()).toContain('Issuer: Issuer 1');
    expect(items[2].text()).toContain('Deal: Deal 1');
    expect(items[7].text()).toContain('Analysts: Analyst 1, Analyst 2');
  });
});
