import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PaymentDetail from '@/views/PaymentDetail.vue'
import StatusBadge from '@/components/common/StatusBadge.vue'

describe('PaymentDetail.vue', () => {
  const createWrapper = () => {
    return mount(PaymentDetail, {
      global: {
        components: { StatusBadge },
        stubs: {
          RouterLink: { template: '<a><slot /></a>' }
        },
        mocks: {
          $route: {
            params: { id: 'P101' },
            query: {}
          }
        }
      }
    })
  }

  it('component mounts successfully', () => {
    const wrapper = createWrapper()
    expect(wrapper.vm).toBeDefined()
  })

  it('component is a valid Vue component', () => {
    const wrapper = createWrapper()
    expect(wrapper.vm.$options.template || wrapper.vm.$options.render).toBeDefined()
  })

  it('component renders without errors', () => {
    expect(() => {
      createWrapper()
    }).not.toThrow()
  })

  it('StatusBadge is registered globally', () => {
    const wrapper = createWrapper()
    expect(wrapper.vm.$options.components?.StatusBadge).toBeDefined()
  })
})
