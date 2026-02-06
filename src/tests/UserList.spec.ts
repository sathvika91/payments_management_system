import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UserList from '@/views/UserList.vue'

describe('UserList.vue', () => {
  const createWrapper = () => {
    return mount(UserList, {
      global: {
        stubs: {
          RouterLink: { template: '<a><slot /></a>' }
        }
      }
    })
  }

  it('renders user list with correct heading', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('h2').text()).toBe('User Dashboard')
  })

  it('renders users table with correct columns', () => {
    const wrapper = createWrapper()
    const headers = wrapper.findAll('th')
    const headerTexts = headers.map(h => h.text())
    expect(headerTexts).toContain('ID')
    expect(headerTexts).toContain('Name')
    expect(headerTexts).toContain('Email')
    expect(headerTexts).toContain('Role')
    expect(headerTexts).toContain('Status')
  })

  it('displays user rows from mock data', () => {
    const wrapper = createWrapper()
    const rows = wrapper.findAll('tbody tr')
    expect(rows.length).toBeGreaterThan(0)
  })

  it('renders add user button', () => {
    const wrapper = createWrapper()
    const addButton = wrapper.find('a')
    expect(addButton.exists()).toBe(true)
  })
})
