import { WebsocketBuilder, Websocket } from 'websocket-ts';
import { GetAppConfig } from './rest.service';

export const OpenWebsocketConnection = async (username: string): Promise<Websocket> => {
  return GetAppConfig(username).then(response => {
    const websocket = new WebsocketBuilder(response.hosts.websocket).build();
    WebSocketAuth(websocket, response.websocket.token);
    return websocket;
  });
};

export const WebSocketAuth = (connection: Websocket, token: string) => {
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
