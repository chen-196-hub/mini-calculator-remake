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

  const mountFunction = options => {
    return mount(ShowNumberArea, {
      localVue,
      vuetify,
      ...options,
    })
  }

  it('should have a custom title and match snapshot', () => {
    const wrapper = mountFunction({
      propsData: { title: '100' },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
