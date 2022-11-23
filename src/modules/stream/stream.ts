import { GetEmbedMetadata, GetMetadata } from '../../services/rest.service';
import { timeout } from '../../utils/async.utils';
import { from, Subscription } from '@reactivex/rxjs/dist/package';

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

export interface EmbedMetadata {
  playerId: string;
  width: string;
  height: string;
  notifyEnabled: boolean;
  url: string;
  url11: string;
  html5url: string;
  minFlashVersionNewPlayer: string;
  wmode: string;
  asa: boolean;
  provider: string;
  flashvars: {
    referer: string;
    relatedAlways: string;
    metadata: {
      provider: string;
      service: string;
      owner: boolean;
      voted: boolean;
      likeCount: number;
      subscribed: boolean;
      isWatchLater: boolean;
      slot: number;
      siteZone: number;
      showAd: boolean;
      fromTime: number;
      author: {
        id: string;
      };
      movie: {
        id: string;
        movieId: string;
        likeId: string;
        contentId: string;
        poster: string;
        duration: string;
        title: string;
        url: string;
        link: string;
        status: string;
        statusText: string;
        isLive: boolean;
        notPublished: boolean;
      };
      admanMetadata: {};
      partnerId: 0;
      ownerMovieId: string;
      alwaysShowRec: boolean;
      videos: [];
      hlsMasterPlaylistUrl: string;
      hlsPlaybackMasterPlaylistUrl: string;
      liveDashManifestUrl: string;
      livePlaybackDashManifestUrl: string;
      failoverHosts: string[];
      autoplay: {
        autoplayEnabled: boolean;
        timeFromEnabled: boolean;
        noRec: boolean;
        fullScreenExit: boolean;
        vitrinaSection: string;
      };
      liveStreamInfo: {
        startsInSec: number;
        endsInSec: number;
        startTime: string;
        endTime: string;
        playbackDuration: number;
        maxPlaybackDuration: number;
      };
      liveChat: {
        chatUrl: string;
        login: string;
        timeout: number;
        showChatOverVideo: boolean;
      };
      p2pInfo: {
        isPeerEnabled: boolean;
        ubsc: number;
        pbsc: number;
        mptpc: number;
        pctmt: number;
        pbesc: number;
        prrt: number;
        srt: number;
        swrt: number;
        dctt: number;
      };
      stunServers: [
        {
          urls: string[];
        }
      ];
    };
    saveLastPlayingTimeFrom: string;
    castId: string;
    noDownload: string;
    locale: string;
    noChatLikes: string;
    noChannel: string;
    webmSec: string;
    enabledLocalStorage: string;
    minCacheTime: string;
    maxCachePartOfDurationMQ: string;
    checkMQ: string;
    noTrailer: string;
    recSlot: string;
    promoMode: string;
    noLikeButton: string;
    maxCachePartOfDuration: string;
    isAnonym: string;
    jidx: string;
    hideWatermark: string;
    isEmbed: string;
    noOkliveBanner: string;
    minCacheTimeMQ: string;
    ldChunk: string;
    showChat: string;
    ldBuffer: string;
    feedAdLogic: string;
    siteId: string;
    location: string;
    hideExpand: string;
    adLogic: string;
    checkAutoplayBrowsers: string;
  };
  liveRertyTimeout: number;
  poster: string;
  isExternalPlayer: boolean;
  isIframePlayer: boolean;
  isHtml5Player: boolean;
  timestamp: string;
  stubEnabled: boolean;
  verifyInline: boolean;
  webrtcBrokenH264: boolean;
  playerLocalizationEnabled: boolean;
}

export class StreamManager {
  private readonly username: string = '';
  private serviceStarted: boolean = false;
  private metadata?: Metadata = undefined; // https://api.vkplay.live/v1/blog/<username>/public_video_stream?from=layer
  private embedMetadata?: EmbedMetadata = undefined; // https://ok.ru/videoembed/<videoId>?sig=<vid>&uid=<user_id>&t=<timestamp>&cip=<client_ip>&ua=<user_agent>>&promo=boosty
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
    this.embedMetadata = await GetEmbedMetadata(this.metadata?.data?.[0]?.url);
    console.log(this.metadata);
    console.log(this.embedMetadata);
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

  public async GetEmbedMetadata(failCount: number = 10): Promise<EmbedMetadata | null> {
    for (let fails = 0; fails < failCount; fails++) {
      if (this.embedMetadata) {
        return this.embedMetadata;
      }

      await timeout(200);
    }

    return null;
  }
}
