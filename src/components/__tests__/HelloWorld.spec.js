import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    console.info(wrapper.text());
    expect(wrapper.text()).toContain('Hello Vitest')
  })
  it('can`t renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { omg: '1234' } })
    expect(wrapper.text()).not.toContain('1234')
  })
})
