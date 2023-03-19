import { GetAppConfig } from './rest.service';
import { LIVE_SERVER_HOME_HOST } from '../constants/servers.const';
const WebSocket = require('ws');

export const OpenWebsocketConnection = async (username: string): Promise<WebSocket> => {
  return GetAppConfig(username).then(response => {
    const websocket = new WebSocket(response.hosts.websocket, [], {
      headers: {
        Origin: LIVE_SERVER_HOME_HOST
      }
    });
    websocket.onopen = () => {
      console.log('WebSocket connected');
      console.log('Authentication WebSocket via token: ', response.websocket.token);
      WebSocketAuth(websocket, response.websocket.token);

      // todo: implement chat and other event subscriptions
      // setTimeout(() => {
      //   websocket.send(
      //     JSON.stringify({
      //       method: 1,
      //       params: {
      //         channel: 'global:public-stream'
      //       },
      //       id: 2
      //     })
      //   );
      //   websocket.send(
      //     JSON.stringify({
      //       method: 1,
      //       params: {
      //         channel: 'public-stream:10441930'
      //       },
      //       id: 3
      //     })
      //   );
      //   websocket.send(
      //     JSON.stringify({
      //       method: 1,
      //       params: {
      //         channel: 'public-chat:10441930'
      //       },
      //       id: 4
      //     })
      //   );
      //   websocket.send(
      //     JSON.stringify({
      //       method: 2,
      //       params: {
      //         channel: 'public-stream:10441930'
      //       },
      //       id: 5
      //     })
      //   );
      //   websocket.send(
      //     JSON.stringify({
      //       method: 2,
      //       params: {
      //         channel: 'public-chat:10441930'
      //       },
      //       id: 6
      //     })
      //   );
      //   websocket.send(
      //     JSON.stringify({
      //       method: 2,
      //       params: {
      //         channel: 'public-stream:10441930'
      //       },
      //       id: 7
      //     })
      //   );
      //   websocket.send(
      //     JSON.stringify({
      //       method: 1,
      //       params: {
      //         channel: 'public-stream:10441930'
      //       },
      //       id: 8
      //     })
      //   );
      //   websocket.send(
      //     JSON.stringify({
      //       method: 1,
      //       params: {
      //         channel: 'public-chat:10441930'
      //       },
      //       id: 9
      //     })
      //   );
      // }, 1000);
      // ChatSubscribe(websocket, '10441930');
    };

    return websocket;
  });
};

export const WebSocketAuth = (connection: WebSocket, token: string) => {
  connection.send(
    JSON.stringify({
      params: {
        token: token,
        name: 'js'
      },
      id: 1
    })
  );
};

export const ChatSubscribe = (connection: WebSocket, chatId: string) => {
  connection.send(
    JSON.stringify({
      method: 1,
      params: {
        channel: `public-chat:${chatId}`
      },
      id: 2
    })
  );
};
