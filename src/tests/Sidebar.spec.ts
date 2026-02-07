import { describe, it, expect } from '@jest/globals'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import Sidebar from '@/components/layout/Sidebar.vue'

describe('Sidebar.vue', () => {
  const createWrapper = () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/users', component: { template: '<div>Users</div>' } },
        { path: '/payments', component: { template: '<div>Payments</div>' } }
      ]
    })
    
    return mount(Sidebar, {
      global: {
        plugins: [router]
      }
    })
  }

  it('renders sidebar header with title', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('.sidebar-header h2').text()).toBe('Payments Dashboard')
  })

  it('renders navigation links', () => {
    const wrapper = createWrapper()
    const links = wrapper.findAll('.sidebar-link')
    expect(links.length).toBe(2)
    expect(links[0].text()).toBe('Users')
    expect(links[1].text()).toBe('Payments')
  })

  it('has correct sidebar styling classes', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('aside').classes()).toContain('sidebar')
  })

  it('renders sidebar with navigation container', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('nav').classes()).toContain('sidebar-nav')
  })
})
