// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
// export * from './modules/stream/stream';

import { StreamLogger } from './modules/stream/stream'

export default class VKPLAPI {
  public static GetStreamLogger(username: string) {
    return new StreamLogger(username)
  }
}
