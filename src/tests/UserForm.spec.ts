import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import UserForm from '@/views/UserForm.vue'
import BaseButton from '@/components/common/BaseButton.vue'

describe('UserForm.vue', () => {
  const createWrapper = () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/users/new', component: { template: '<div>Form</div>' } },
        { path: '/users', component: { template: '<div>List</div>' } }
      ]
    })
    
    router.push('/users/new')
    
    return mount(UserForm, {
      global: {
        components: { BaseButton },
        plugins: [router]
      }
    })
  }

  it('renders user registration form heading', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('h2').text()).toBe('User Registration')
  })

  it('renders form with all required input fields', () => {
    const wrapper = createWrapper()
    const labels = wrapper.findAll('label')
    const labelTexts = labels.map(l => l.text()).join(' ')
    expect(labelTexts).toContain('Name')
    expect(labelTexts).toContain('Email')
    expect(labelTexts).toContain('Role')
    expect(labelTexts).toContain('Status')
  })

  it('has submit button to save user', () => {
    const wrapper = createWrapper()
    const submitButtons = wrapper.findAll('button')
    expect(submitButtons.some(btn => btn.text().includes('Save'))).toBe(true)
  })

  it('renders back to users link', () => {
    const wrapper = createWrapper()
    const backLink = wrapper.find('a.base-button')
    expect(backLink.exists()).toBe(true)
  })
})
