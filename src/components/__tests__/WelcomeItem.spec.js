import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WelcomeItem from '../WelcomeItem.vue'
import ToolingIcon from '../icons/IconTooling.vue'

describe('WelcomeItem', () => {
  it('renders properly', () => {
    const wrapper = mount(WelcomeItem, { slots: {
      default: ['<div>Hello Default</div>'],
      icon: ToolingIcon, // Will match `<slot name="FooBar" />`.
      heading: '<div>Oh My Heading</div>',
    } })
    expect(wrapper.text()).toContain('Hello Default')
    expect(wrapper.text()).toContain('Oh My Heading')
  })
  it('can`t renders properly', () => {
    const wrapper = mount(WelcomeItem, { slots: {
      default: ['<div>Hello</div>'],
      icon: ToolingIcon, // Will match `<slot name="FooBar" />`.
      heading: '<div>Oh My Heading</div>',
    } })
    expect(wrapper.text()).not.toContain('Hello Default')
  })
})
