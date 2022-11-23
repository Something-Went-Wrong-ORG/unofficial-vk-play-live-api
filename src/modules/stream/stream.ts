import { GetPlayerOptions, GetMetadata } from '../../services/rest.service';
import { timeout } from '../../utils/async.utils';
import { from, Subscription } from '@reactivex/rxjs/dist/package';
import { Metadata } from '../../types/metadata.types';
import { PlayerOptions } from '../../types/playeroptions.types';

export class StreamManager {
  private readonly username: string = '';
  private serviceStarted: boolean = false;
  private metadata?: Metadata = undefined; // https://api.vkplay.live/v1/blog/<username>/public_video_stream?from=layer
  private playerOptions?: PlayerOptions = undefined; // https://ok.ru/videoembed/<videoId>?sig=<vid>&uid=<user_id>&t=<timestamp>&cip=<client_ip>&ua=<user_agent>>&promo=boosty
  private subscription: Subscription;

  public constructor(username: string, immediateStart: boolean = true) {
    this.username = username;
    this.subscription = new Subscription();

    if (immediateStart) {
      this.subscription.add(from(this.start()).subscribe());
    }
  }

  public async start() {
    this.serviceStarted = true;
    this.metadata = await GetMetadata(this.username, this.metadata);
    this.playerOptions = await GetPlayerOptions(this.metadata?.data?.[0]?.url);
  }

  public stop() {
    this.subscription.unsubscribe();
  }

  public async ReloadMetadata() {
    this.metadata = await GetMetadata(this.username);
  }

  public async GetMetadata(failCount: number = 10): Promise<Metadata | null> {
    for (let fails = 0; fails < failCount; fails++) {
      if (this.metadata) {
        return this.metadata;
      }

      await timeout(200);
    }

    return null;
  }

  public async GetPlayerOptions(failCount: number = 10): Promise<PlayerOptions | null> {
    for (let fails = 0; fails < failCount; fails++) {
      if (this.playerOptions) {
        return this.playerOptions;
      }

      await timeout(200);
    }

    return null;
  }
}
