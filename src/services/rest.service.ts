import axios from 'axios';
import { LIVE_SERVER_API_URL } from '../constants/servers.const';
import { Metadata } from '../modules/stream/stream';

export const GetMetadata = async (username: string, metadata?: Metadata): Promise<Metadata> => {
  return new Promise<Metadata>((resolve, reject) => {
    if (metadata) {
      resolve(metadata);
    }

    axios
      .get<Metadata>(`${LIVE_SERVER_API_URL}/blog/${username}/public_video_stream?from=layer`)
      .then(
        v => resolve(v.data),
        e => reject(e)
      );
  });
};
