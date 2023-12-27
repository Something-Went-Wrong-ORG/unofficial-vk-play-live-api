// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
export * from './types/chat.types';
export * from './types/metadata.types';
export * from './types/playeroptions.types';
export * from './types/websocket.types';

import { StreamManager } from './modules/stream/stream';

export default class VKPLAPI {
  public static GetStreamManager(username: string, immediateStart: boolean = true) {
    return new StreamManager(username, immediateStart);
  }
}
