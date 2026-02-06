import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import PaymentForm from '@/views/PaymentForm.vue'

describe('PaymentForm.vue', () => {
  const createWrapper = (queryId = '') => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/payments/new', component: { template: '<div>Form</div>' } },
        { path: '/payments', component: { template: '<div>List</div>' } }
      ]
    })
    
    if (queryId) {
      router.push({ path: '/payments/new', query: { id: queryId } })
    } else {
      router.push('/payments/new')
    }
    
    return mount(PaymentForm, {
      global: {
        plugins: [router]
      }
    })
  }

  it('renders create payment form when no id provided', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('h2').text()).toContain('Create Payment')
  })

  it('renders form with all required input fields', () => {
    const wrapper = createWrapper()
    expect(wrapper.findAll('input').length).toBeGreaterThan(0)
    expect(wrapper.findAll('select').length).toBeGreaterThan(0)
  })

  it('has submit button for creating payment', () => {
    const wrapper = createWrapper()
    const submitButton = wrapper.find('button[type="submit"]')
    expect(submitButton.exists()).toBe(true)
    expect(submitButton.text()).toContain('Create Payment')
  })

  it('renders back to dashboard link', () => {
    const wrapper = createWrapper()
    const backLink = wrapper.find('a.base-button')
    expect(backLink.exists()).toBe(true)
  })
})
