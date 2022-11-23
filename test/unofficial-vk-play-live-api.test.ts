import VKPLAPI from '../src/unofficial-vk-play-live-api';
import { GetMetadata } from '../src/services/rest.service';

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy();
  });

  it('DummyClass is instantiable', () => {
    expect(new VKPLAPI()).toBeInstanceOf(VKPLAPI);
  });

  it('DummyClass is instantiable', () => {
    expect(new VKPLAPI()).toBeInstanceOf(VKPLAPI);
  });

  it('Request must work', async () => {
    const streamManager = VKPLAPI.GetStreamManager('d3l_ru');

    const metadata = await streamManager.GetMetadata();
    const embedMetadata = await streamManager.GetEmbedMetadata();

    expect(metadata).not.toBeNull();
  });
});
