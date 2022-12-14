import HelloWorld from './HelloWorld.vue'
import { mount } from '@vue/test-utils'

test('test helloworld props', () => {
  const wrapper = mount(HelloWorld, {
    props: {
      msg: '111',
    },
  })

  expect(wrapper.text()).toContain('111')
})
