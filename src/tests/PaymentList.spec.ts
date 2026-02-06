import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import PaymentList from '@/views/PaymentList.vue'
import StatusBadge from '@/components/common/StatusBadge.vue'

describe('PaymentList.vue', () => {
  const createWrapper = () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/payments/:id', component: { template: '<div>Detail</div>' } },
        { path: '/payments/new', component: { template: '<div>Form</div>' } }
      ]
    })
    
    return mount(PaymentList, {
      global: {
        components: { StatusBadge },
        plugins: [router]
      }
    })
  }

  it('renders payments table with correct headers', () => {
    const wrapper = createWrapper()
    const headers = wrapper.findAll('th')
    expect(headers.map(h => h.text())).toContain('ID')
    expect(headers.map(h => h.text())).toContain('User')
    expect(headers.map(h => h.text())).toContain('Amount')
  })

  it('displays payment rows from mock data', () => {
    const wrapper = createWrapper()
    const rows = wrapper.findAll('tbody tr')
    expect(rows.length).toBeGreaterThan(0)
  })

  it('renders filter select dropdown', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('.filter-select').exists()).toBe(true)
  })

  it('filters payments by status', async () => {
    const wrapper = createWrapper()
    const select = wrapper.find('.filter-select')
    await select.setValue('Success')
    
    const rows = wrapper.findAll('tbody tr')
    expect(rows.length).toBeGreaterThan(0)
  })
})
