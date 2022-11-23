import VKPLAPI from '../src/unofficial-vk-play-live-api';

// todo: fix and enable check
// const fieldsAreMatchingWithType = (value: any, fields: string[]) => {
//   const keysInResponse = Object.keys(value ?? {});
//   // @ts-ignore
//   const fieldsInModelAndResponseMatches: boolean = fields.every(keyInModel =>
//     keysInResponse.includes(keyInModel)
//   );
//   return fieldsInModelAndResponseMatches;
// };

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
    expect(metadata).not.toBeNull();
    // todo: fix and enable check
    // expect(fieldsAreMatchingWithType(metadata, keyof<Metadata>)).toBeTruthy();

    const embedMetadata = await streamManager.GetPlayerOptions();
    expect(embedMetadata).not.toBeNull();
    // todo: fix and enable check
    // expect(fieldsAreMatchingWithType(embedMetadata, PlayerOptions)).toBeTruthy();
  });
});
