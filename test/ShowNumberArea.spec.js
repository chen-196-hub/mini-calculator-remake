import Vuetify from 'vuetify'
// Utilities
import { createLocalVue, mount } from '@vue/test-utils'
import ShowNumberArea from '@/components/ShowNumberArea.vue'

const localVue = createLocalVue()

describe('ShowNumberArea.vue', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  const mountFunction = (options) => {
    return mount(ShowNumberArea, {
      localVue,
      vuetify,
      ...options,
    })
  }

  it('should have a custom number and match snapshot', () => {
    const wrapper = mountFunction({
      propsData: { number: '100' },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
