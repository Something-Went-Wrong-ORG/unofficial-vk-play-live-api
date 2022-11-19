// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
// export * from './modules/stream/stream';

import { StreamManager } from './modules/stream/stream';

export default class VKPLAPI {
  public static GetStreamManager(username: string) {
    return new StreamManager(username);
  }
}
