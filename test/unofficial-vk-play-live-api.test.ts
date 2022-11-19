import VKPLAPI from '../src/unofficial-vk-play-live-api'

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('DummyClass is instantiable', () => {
    expect(new VKPLAPI()).toBeInstanceOf(VKPLAPI)
  })

  it('Request must work', () => {
    let streamLogger = VKPLAPI.GetStreamLogger('shnumi')

    // expect()
  })
})
