import { describe, it, expect, jest } from '@jest/globals'
import { mount } from '@vue/test-utils'
import BaseButton from '@/components/common/BaseButton.vue'

describe('BaseButton.vue', () => {
  it('renders slot content correctly', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'Click me'
      }
    })
    expect(wrapper.text()).toBe('Click me')
  })

  it('emits click event when button is clicked', async () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'Click me'
      }
    })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('has correct CSS class applied', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'Button'
      }
    })
    expect(wrapper.find('button').classes()).toContain('base-button')
  })

  it('triggers multiple clicks correctly', async () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'Multi-click'
      }
    })
    await wrapper.find('button').trigger('click')
    await wrapper.find('button').trigger('click')
    const emittedClicks = wrapper.emitted('click')
    expect(emittedClicks).toBeTruthy()
    expect(emittedClicks?.length).toBeGreaterThanOrEqual(1)
  })
})
