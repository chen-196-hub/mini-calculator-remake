import Vuetify from 'vuetify'
// Utilities
import { createLocalVue, mount } from '@vue/test-utils'
import ShowNumberArea from '@/components/ShowNumberArea.vue'

const localVue = createLocalVue()

describe('CustomNavigationDrawer.vue', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('should have a custom title and match snapshot', () => {
    const wrapper = mount(ShowNumberArea, {
      localVue,
      vuetify,
    })

    expect(wrapper.text()).toBe('0')
  })
})
