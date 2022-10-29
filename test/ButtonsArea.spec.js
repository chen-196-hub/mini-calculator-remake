import Vuetify from 'vuetify'
// Utilities
import { createLocalVue, mount } from '@vue/test-utils'
import ButtonsArea from '@/components/ButtonsArea.vue'

const localVue = createLocalVue()

describe('ButtonsArea.vue', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  const mountFunction = (options) => {
    return mount(ButtonsArea, {
      localVue,
      vuetify,
      ...options,
    })
  }

  it('should match snapshot', () => {
    const wrapper = mountFunction()

    expect(wrapper.html()).toMatchSnapshot()
  })

  // it('should been called emit', () => {
    
  // })

})
