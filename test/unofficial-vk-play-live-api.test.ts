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
  const streamManager = VKPLAPI.GetStreamManager('d3l_ru');

  it('Root class is instantiable', () => {
    expect(new VKPLAPI()).toBeInstanceOf(VKPLAPI);
  });

  it('Metadata must come from server', async () => {
    const metadata = await streamManager.GetMetadata();
    expect(metadata).not.toBeNull();
    // todo: fix and enable check
    // expect(fieldsAreMatchingWithType(metadata, keyof<Metadata>)).toBeTruthy();
  });

  it('PlayerOptions must come from server', async () => {
    const playerOptions = await streamManager.GetPlayerOptions();
    expect(playerOptions).not.toBeNull();
    // todo: fix and enable check
    // expect(fieldsAreMatchingWithType(playerOptions, PlayerOptions)).toBeTruthy();
  });
});
