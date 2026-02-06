import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import StatusBadge from '@/components/common/StatusBadge.vue'

describe('StatusBadge.vue', () => {
  it('renders success status with correct class', () => {
    const wrapper = mount(StatusBadge, {
      props: {
        status: 'Success'
      }
    })
    expect(wrapper.text()).toBe('Success')
    expect(wrapper.find('span').classes()).toContain('badge')
  })

  it('renders pending status with correct class', () => {
    const wrapper = mount(StatusBadge, {
      props: {
        status: 'Pending'
      }
    })
    expect(wrapper.text()).toBe('Pending')
    expect(wrapper.find('span').classes()).toContain('badge')
  })

  it('renders failed status with correct class', () => {
    const wrapper = mount(StatusBadge, {
      props: {
        status: 'Failed'
      }
    })
    expect(wrapper.text()).toBe('Failed')
    expect(wrapper.find('span').classes()).toContain('badge')
  })

  it('applies badge class to all status badges', () => {
    const statuses = ['Success', 'Pending', 'Failed']
    statuses.forEach(status => {
      const wrapper = mount(StatusBadge, {
        props: { status }
      })
      expect(wrapper.find('span').classes()).toContain('badge')
    })
  })
})
