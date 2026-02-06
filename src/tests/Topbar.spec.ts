import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import Topbar from '@/components/layout/Topbar.vue'

describe('Topbar.vue', () => {
  const createWrapper = () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/payments', component: { template: '<div>Payments</div>' } },
        { path: '/users', component: { template: '<div>Users</div>' } }
      ]
    })
    
    return mount(Topbar, {
      global: {
        plugins: [router]
      }
    })
  }

  it('renders topbar with correct title', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('.topbar-left h2').text()).toBe('Payments Management')
  })

  it('renders navigation links in topbar', () => {
    const wrapper = createWrapper()
    const links = wrapper.findAll('.topbar-link')
    expect(links.length).toBe(2)
    expect(links[0].text()).toBe('Payments')
    expect(links[1].text()).toBe('Users')
  })

  it('has correct topbar styling classes', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('header').classes()).toContain('topbar')
  })

  it('renders navigation container with correct class', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('nav').classes()).toContain('topbar-nav')
  })
})
