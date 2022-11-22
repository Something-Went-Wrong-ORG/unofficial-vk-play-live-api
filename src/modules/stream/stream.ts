import { GetMetadata } from '../../services/rest.service';
import { timeout } from '../../utils/async.utils';
import { from, Subscription } from '@reactivex/rxjs/dist/typings';

export interface PlayerType {
  low: 'low';
  lowest: 'lowest';
  quad_hd: 'quad_hd';
  live_hls: 'live_hls';
  ultra_hd: 'ultra_hd';
  live_playback_hls: 'live_playback_hls';
  high: 'high';
  live_playback_dash: 'live_playback_dash';
  tiny: 'tiny';
  full_hd: 'full_hd';
  live_dash: 'live_dash';
  medium: 'medium';
  dash_uni: 'dash_uni';
  hls: 'hls';
  dash: 'dash';
}

export interface UserData {
  displayName: string;
  nick: string;
  id: number;
  name: string;
  avatarUrl: string;
  hasAvatar: boolean;
}

export interface CategoryInfo {
  title: string;
  id: string;
  coverUrl: string;
  type: string;
}

export interface StaticticsCounters {
  likes: number;
  views: number;
  viewers: number;
}

export interface ChatSettings {
  blogId: number;
  allowAccess: string;
  remainingTime: null;
  allowAccessAfter: number;
}

export interface PlayerURL {
  type: PlayerType;
  url: string;
}

export interface VideoInfo {
  vid: string;
  playerUrls: PlayerURL[];
  title: string;
  type: string;
  url: string;
}

export interface Metadata {
  hasChat: boolean;
  isEnded: boolean;
  previewUrl: string;
  isOnline: boolean;
  count: StaticticsCounters;
  daNick: string;
  category: CategoryInfo;
  isCreated: boolean;
  embedUrl: string;
  createdAt: number;
  startTime: number;
  endTime: null;
  wsStreamChannel: string;
  title: string;
  chatSettings: ChatSettings;
  data: VideoInfo[];
  isChatModerator: boolean;
  id: string;
  hasAccess: boolean;
  user: UserData;
  isLiked: boolean;
  isBlackListedByUser: boolean;
  wsChatChannel: string;
}

export class StreamManager {
  private readonly username: string = '';
  private serviceStarted: boolean = false;
  private metadata?: Metadata = undefined; // https://api.vkplay.live/v1/blog/<username>/public_video_stream?from=layer
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
    console.log(this.metadata);
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
}
