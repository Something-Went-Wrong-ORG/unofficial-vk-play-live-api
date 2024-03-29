# Unofficial VK Play Live API

This library is unofficial API (for https://vkplay.live/) and uses undocumented features, so there is no guarantee that it will be fully functional after some time.

It can be used in JavaScript/TypeScript projects.

Everything here is reverse engineered:
- If I can do something in browser, then this MUST be available through an API
- If I can do something anonymously (without account) then I don't need some_sort of API key or another type of access

### Features

- Get Video Player settings (P2P params, Live Chat info, Live Stream Info, Autoplay Options, Player Options, etc. [example](#get-metadata-or-player-options-from-stream-manager))
- Get Last Messages from Stream (see [requesting](#get-last-messages-from-stream)/[converting](#convert-messages-for-your-system))
- Get Messages using WebSockets (TBD, [right now authorisation not working properly here](https://github.com/Something-Went-Wrong-ORG/unofficial-vk-play-live-api/blob/54562b92580e5589c07b717ed7ff5989db2c3a2b/src/services/websocket.service.ts#L15))
- TBD...

### Installation

Right now library is not available in NPM, but will be in future after testing

So you can install it using local link to module:
```bash
# clone this repository
git clone https://github.com/Something-Went-Wrong-ORG/unofficial-vk-play-live-api.git
# go to js/ts library root
cd unofficial-vk-play-live-api
npm install
npm run build
```

Then link it to your project by adding new [local dependency](https://docs.npmjs.com/cli/v9/configuring-npm/package-json#local-paths) to your project `package.json`

```json
{
  ...
  "dependencies": {
    ...
    "unofficial-vk-play-live-api": "file:../unofficial-vk-play-live-api"
  }
}
```

### Documentation

You can find API documentation here: https://something-went-wrong-org.github.io/unofficial-vk-play-live-api/

### Importing library

You can import the generated bundle to use the whole library generated by this starter:

```javascript
import VKPLAPI from 'unofficial-vk-play-live-api';
```

Additionally, you can import the transpiled modules from `dist/lib` in case you have a modular library:

```javascript
import something from 'unofficial-vk-play-live-api/dist/lib/something';
```

### NPM scripts

- `npm t`: Run test suite
- `npm start`: Run `npm run build` in watch mode
- `npm run test:watch`: Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch)
- `npm run test:prod`: Run linting and generate coverage
- `npm run build`: Generate bundles and typings, create docs
- `npm run lint`: Lints code
- `npm run commit`: Commit using conventional commit style ([husky](https://github.com/typicode/husky) will tell you to use it if you haven't :wink:)

### Examples

#### Get Last Messages from Stream

```js
// Import API
const VKPAPI = require('unofficial-vk-play-live-api');

try {
  // Create instance of Stream Manager
  const streamManager = VKPAPI.GetStreamManager('<channel_id>');
  // Get last messages from stream chat
  const messages = await streamManager.GetLastMessages(100);
} catch (error) {
  // Handle errors
  console.error(error);
}
```

#### Convert messages for your system

```js
// Import API
const VKPAPI = require('unofficial-vk-play-live-api');

try {
  // Create instance of Stream Manager
  const streamManager = VKPAPI.GetStreamManager('<channel_id>');
  // Get last messages from stream chat
  const messages = await streamManager.GetLastMessages(100);

  // Convert messages
  const result = messages.data.map((message) => {
    const name = message.author.displayName;
    const time = message.createdAt * 1000;

    return {
      time,
      // Messages comes from VK Play Live as parts. you can convert it
      // to something that can be more useful for your app
      message: message.data
        .map((messagePart) => {
          switch (messagePart.type) {
            case 'text':
              return messagePart.content[0];
            case 'smile':
              return `<img src="${messagePart.smallUrl}" />`;
            case 'mention':
              return `<strong>@${messagePart.displayName}</strong>`;
            case 'link':
              return `<a href="${messagePart.url}">${messagePart.content[0]}</a>`;
            default:
              return '';
          }
        })
        .join(''),
      name,
      id: `${name}-${time}`
    };
  });
} catch (error) {
  console.error(error);
}
```

#### Get Metadata or Player Options from Stream Manager (deprecated)

```js
const VKPAPI = require('unofficial-vk-play-live-api');

try {
  // Create instance of Stream Manager
  const streamManager = VKPAPI.GetStreamManager('<channel_id>');
  // Get stream metadata
  const metadata = await streamManager.GetMetadata();
  // Get player options
  const playerOptions = await streamManager.GetPlayerOptions();
} catch (error) {
  console.error(error);
}
```
