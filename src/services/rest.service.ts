import axios from 'axios';
import { LIVE_SERVER_API_URL, LIVE_SERVER_HOME_URL } from '../constants/servers.const';
import { decode } from 'html-entities';
import { Metadata } from '../types/metadata.types';
import { PlayerOptions } from '../types/playeroptions.types';
import { ChatResponse, Message, MessagePart } from '../types/chat.types';
import { AppConfig } from '../types/websocket.types';
import { GetAdditionalHeaders } from './utils';

export const GetMetadata = async (username: string, metadata?: Metadata): Promise<Metadata> => {
  return (
    metadata ??
    axios
      .get<Metadata>(`${LIVE_SERVER_API_URL}/blog/${username}/public_video_stream?from=layer`, {
        headers: {
          ...GetAdditionalHeaders(username)
        }
      })
      .then(response => response.data)
  );
};

export const GetPlayerOptions = async (
  username?: string,
  url?: string
): Promise<PlayerOptions | undefined> => {
  if (!url || !username) {
    console.error(new Error('url for getting player options is incorrect'));
    return;
  }

  return axios
    .get<string>(url, {
      headers: {
        ...GetAdditionalHeaders(username)
      }
    })
    .then(response => {
      const regexp = /data-options="([^"]+)"/gm;
      const result: any = JSON.parse(decode(regexp.exec(response.data)?.[1] ?? '{}'));

      // hack for stringified vars
      if (result?.flashvars?.metadata) {
        result.flashvars.metadata = JSON.parse(result.flashvars.metadata);
      }

      return result;
    });
};

export const GetAppConfig = (username: string): Promise<AppConfig> => {
  return axios
    .get<any>(`${LIVE_SERVER_HOME_URL}${username}`, {
      headers: {
        ...GetAdditionalHeaders(username)
      }
    })
    .then(response => {
      const regexp = /<script type="text\/plain" id="app-config">(.*)<\/script>/gm;
      return response.data.config ?? JSON.parse(decode(regexp.exec(response.data)?.[1] ?? '{}'));
    });
};

export const GetLastMessages = async (
  username: string,
  limit: number = 20
): Promise<ChatResponse> => {
  return axios
    .get<ChatResponse>(`${LIVE_SERVER_API_URL}/blog/${username}/public_video_stream/chat`, {
      headers: {
        ...GetAdditionalHeaders(username)
      },
      params: {
        limit: limit
      }
    })
    .then(response => {
      const data = response.data;
      return {
        extra: data?.extra,
        data: data?.data?.map(
          (message: Message): Message => {
            return {
              ...message,
              data: message.data?.map(
                (messagePart: MessagePart): MessagePart => {
                  try {
                    return { ...messagePart, content: JSON.parse(messagePart.content as string) };
                  } catch (error) {
                    return { ...messagePart, content: messagePart.content };
                  }
                }
              )
            };
          }
        )
      };
    });
};
