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
  const streamManager = VKPLAPI.GetStreamManager('bezzdar');

  it('Root class is instantiable', () => {
    expect(new VKPLAPI()).toBeInstanceOf(VKPLAPI);
  });

  it('Metadata must come from server', async () => {
    const metadata = await streamManager.GetMetadata();
    expect(metadata).not.toBeNull();
    // todo: fix and enable check
    // expect(fieldsAreMatchingWithType(metadata, keyof<Metadata>)).toBeTruthy();
  });

  // todo: looks like it is deprecated, need to check
  // it('PlayerOptions must come from server', async () => {
  //   const playerOptions = await streamManager.GetPlayerOptions();
  //   expect(playerOptions).not.toBeNull();
  //   // todo: fix and enable check
  //   // expect(fieldsAreMatchingWithType(playerOptions, PlayerOptions)).toBeTruthy();
  // });

  it('Chat messages must come from server', async () => {
    const playerOptions = await streamManager.GetLastMessages();
    expect(playerOptions).not.toBeNull();
    console.log(playerOptions);
    // todo: fix and enable check
    // expect(fieldsAreMatchingWithType(playerOptions, PlayerOptions)).toBeTruthy();
  });

  // it('Wait till some message arrives', async () => {
  //   const metadata = await streamManager.GetMetadata();
  //   expect(metadata?.user.name).not.toBeNull();
  //   const connection = await OpenWebsocketConnection(metadata?.user.name!);
  //
  //   connection.addEventListener(WebsocketEvents.open, () => {
  //     console.log('WS Open');
  //   });
  //   connection.addEventListener(WebsocketEvents.close, () => {
  //     console.log('WS Close');
  //   });
  //   connection.addEventListener(WebsocketEvents.error, (instance, ev) => {
  //     fail(new Error(`WS Connection failed: ${JSON.stringify(ev, null, 4)}`));
  //   });
  //   connection.addEventListener(WebsocketEvents.message, (instance, ev) => {
  //     console.log(`WS Message: ${JSON.stringify(ev, null, 4)}`);
  //   });
  //   connection.addEventListener(WebsocketEvents.retry, () => {
  //     console.log('WS Retry');
  //   });
  //   // expect(playerOptions).not.toBeNull();
  //   // console.log(playerOptions);
  //   // todo: fix and enable check
  //   // expect(fieldsAreMatchingWithType(playerOptions, PlayerOptions)).toBeTruthy();
  // });
});
