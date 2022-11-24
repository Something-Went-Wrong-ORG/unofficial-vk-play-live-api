export interface P2PInfo {
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
}

export interface LiveChatInfo {
  /** Contains websocket endpoint to which browser connects in order to track chat info in real time
   * @default "wss://vm.mycdn.me/chat"
   */
  chatUrl: string;

  /** Contains string that is sent to websocket in order to authenticate user
   * @default "cid=1234567891234&s=abcdef123456789abcdef123456789abcdef123"
   */
  login: string;

  /** Contains timeout after which websocket must be reopened or closed
   * @default 3000
   */
  timeout: number;

  /**
   * @default true
   */
  showChatOverVideo: boolean;
}

export interface LiveStreamInfo {
  /** Contains seconds after which planned stream starts. If stream is not planned, then 0 will be set as value.
   * @default 120
   */
  startsInSec: number;
  /** Contains seconds after which planned stream ends. If stream is not planned, then 0 will be set as value.
   * @default 120
   */
  endsInSec: number;
  /** Contains start date and time of planned stream. If stream is not planned, then "0" will be set as value.
   * @default "0"
   */
  startTime: string;
  /** Contains end date and time of planned stream. If stream is not planned, then "0" will be set as value.
   * @default "0"
   */
  endTime: string;
  /** Contains seconds of playback time
   * @default 7200000
   */
  playbackDuration: number;
  /** Contains seconds of maximum playback time
   * @default 7200000
   */
  maxPlaybackDuration: number;
}

export interface AutoplayOptions {
  /** True if player must start playing after load.
   * @default true
   */
  autoplayEnabled: boolean;

  /** TODO: Unknown property
   * @default true
   */
  timeFromEnabled: boolean;

  /** TODO: Unknown property
   * @default false
   */
  noRec: boolean;

  /** TODO: Unknown property
   * @default false
   */
  fullScreenExit: boolean;

  /** TODO: Unknown property
   * @default "recommended_movie"
   */
  vitrinaSection: string;
}

export interface StunServer {
  /** TODO: Unknown property
   * @default ["stun:videostun.mycdn.me:80"]
   */
  urls: string[];
}

export interface MovieInfo {
  /** TODO: Unknown property
   * @default "1234567891234"
   */
  id: string;

  /** TODO: Unknown property
   * @default "1234567891234"
   */
  movieId: string;

  /** TODO: Unknown property
   * @default "1234567891234"
   */
  likeId: string;

  /** TODO: Unknown property
   * @default "1234567891234"
   */
  contentId: string;

  /** URL to stream image
   * @default "https://i.mycdn.me/videoPreview?mid=1234567891234&type=37&cv=66248&tkn=cR0zdga6eh2jeDHMST-sAGC5J6o&nocache=1&fn=external_8"
   */
  poster: string;

  /** TODO: Unknown property
   * @default "0"
   */
  duration: string;

  /** TODO: Unknown property
   * @default "This is stream title"
   */
  title: string;

  /** TODO: Unknown property
   * @default "https://ok.ru/video/1234567891234"
   */
  url: string;

  /** TODO: Unknown property
   * @default "/live/1234567891234"
   */
  link: string;

  /** TODO: Unknown property
   * @default "ONLINE"
   */
  status: string;

  /** TODO: Unknown property
   * @default "ONLINE"
   */
  statusText: string;

  /** TODO: Unknown property
   * @default true
   */
  isLive: boolean;

  /** TODO: Unknown property
   * @default false
   */
  notPublished: boolean;
}

export interface EmbedMetadata {
  /** TODO: Unknown property
   * @default "LIVE_BOOSTY"
   */
  provider: string;

  /** TODO: Unknown property
   * @default "ok"
   */
  service: string;

  /** TODO: Unknown property
   * @default false
   */
  owner: boolean;

  /** TODO: Unknown property
   * @default false
   */
  voted: boolean;

  /** TODO: Unknown property
   * @default 0
   */
  likeCount: number;

  /** TODO: Unknown property
   * @default false
   */
  subscribed: boolean;

  /** TODO: Unknown property
   * @default false
   */
  isWatchLater: boolean;

  /** TODO: Unknown property
   * @default false
   */
  slot: 0;

  /** TODO: Unknown property
   * @default -1
   */
  siteZone: number;

  /** TODO: Unknown property
   * @default false
   */
  showAd: boolean;

  /** TODO: Unknown property
   * @default 0
   */
  fromTime: number;

  /** TODO: Unknown property
   * @default {"id": "1234567891234"}
   */
  author: {
    id: string;
  };

  /** TODO: Unknown property
   * @default false
   */
  movie: MovieInfo;

  /** TODO: Unknown property
   * @default {}
   */
  admanMetadata: {};

  /** TODO: Unknown property
   * @default 0
   */
  partnerId: 0;

  /** TODO: Unknown property
   * @default "1234567891234"
   */
  ownerMovieId: string;

  /** TODO: Unknown property
   * @default false
   */
  alwaysShowRec: boolean;

  /** TODO: Unknown property
   * @default []
   */
  videos: [];

  /** TODO: Unknown property
   * @default "https://vsd70.mycdn.me/hls/1234567891234.m3u8/sig/tRJ0QuBTsgw/expires/1669251373181/srcIp/0.0.0.0/urls/0.0.0.0/clientType/0/srcAg/CHROME/mid/1234567891234/video.m3u8?p"
   */
  hlsMasterPlaylistUrl: string;

  /** TODO: Unknown property
   * @default "https://vsd70.mycdn.me/hls/1234567891234_offset_p.m3u8/sig/tRJ0QuBTsgw/expires/1669251373181/srcIp/0.0.0.0/urls/0.0.0.0/clientType/0/srcAg/CHROME/mid/1234567891234/video.m3u8?p"
   */
  hlsPlaybackMasterPlaylistUrl: string;

  /** TODO: Unknown property
   * @default "https://vsd70.mycdn.me/dash/stream_1234567891234/stream.manifest/sig/tRJ0QuBTsgw/expires/1669251373181/srcIp/0.0.0.0/urls/0.0.0.0/clientType/0/srcAg/CHROME/mid/1234567891234/video"
   */
  liveDashManifestUrl: string;

  /** TODO: Unknown property
   * @default "https://vsd70.mycdn.me/dash/stream_1234567891234_offset_p/stream.manifest/sig/tRJ0QuBTsgw/expires/1669251373181/srcIp/0.0.0.0/urls/0.0.0.0/clientType/0/srcAg/CHROME/mid/1234567891234/video"
   */
  livePlaybackDashManifestUrl: string;

  /** TODO: Unknown property
   * @default [ "vsd139.mycdn.me" ]
   */
  failoverHosts: string[];

  /** TODO: Unknown property
   */
  autoplay: AutoplayOptions;

  /** TODO: Unknown property
   */
  liveStreamInfo: LiveStreamInfo;

  /** TODO: Unknown property
   */
  liveChat: LiveChatInfo;

  /** TODO: Unknown property
   */
  p2pInfo: P2PInfo;

  /** TODO: Unknown property
   */
  stunServers: StunServer[];
}

export interface Flashvars {
  /** Contains url of server from which request was done. It will be the same as in request to get playeroptions: "https://vkplay.live/<username>"
   * @default "https://vkplay.live/<username>"
   */
  referer: string;

  /** TODO: Unknown property
   * @default "1"
   */
  relatedAlways: string;

  /** TODO: Unknown property
   */
  metadata: EmbedMetadata;

  /** TODO: Unknown property
   * @default "30"
   */
  saveLastPlayingTimeFrom: string;

  /** TODO: Unknown property
   * @default "123D4567"
   */
  castId: string;

  /** Disables download of video
   * @default "1"
   */
  noDownload: string;

  /** Contains locale that is used for player
   * @default "ru"
   */
  locale: string;

  /** TODO: Unknown property
   * @default "1"
   */
  noChatLikes: string;

  /** TODO: Unknown property
   * @default "1"
   */
  noChannel: string;

  /** TODO: Unknown property
   * @default "20"
   */
  webmSec: string;

  /** TODO: Unknown property
   * @default "1"
   */
  enabledLocalStorage: string;

  /** TODO: Unknown property
   * @default "120"
   */
  minCacheTime: string;

  /** TODO: Unknown property
   * @default "30"
   */
  maxCachePartOfDurationMQ: string;

  /** TODO: Unknown property
   * @default "1"
   */
  checkMQ: string;

  /** TODO: Unknown property
   * @default "1"
   */
  noTrailer: string;

  /** TODO: Unknown property
   * @default "7178"
   */
  recSlot: string;

  /** TODO: Unknown property
   * @default "boosty"
   */
  promoMode: string;

  /** TODO: Unknown property
   * @default "1"
   */
  noLikeButton: string;

  /** TODO: Unknown property
   * @default "10"
   */
  maxCachePartOfDuration: string;

  /** TODO: Unknown property
   * @default "1"
   */
  isAnonym: string;

  /** TODO: Unknown property
   * @default "1"
   */
  jidx: string;

  /** TODO: Unknown property
   * @default "0"
   */
  hideWatermark: string;

  /** TODO: Unknown property
   * @default "1"
   */
  isEmbed: string;

  /** TODO: Unknown property
   * @default "1"
   */
  noOkliveBanner: string;

  /** TODO: Unknown property
   * @default "20"
   */
  minCacheTimeMQ: string;

  /** TODO: Unknown property
   * @default "2000"
   */
  ldChunk: string;

  /** TODO: Unknown property
   * @default "1"
   */
  showChat: string;

  /** TODO: Unknown property
   * @default "6000"
   */
  ldBuffer: string;

  /** TODO: Unknown property
   * @default "15,3,3,14400"
   */
  feedAdLogic: string;

  /** TODO: Unknown property
   * @default "504"
   */
  siteId: string;

  /** TODO: Unknown property
   * @default "AnonymVideoEmbed/anonymVideoEmbed/anonym"
   */
  location: string;

  /** TODO: Unknown property
   * @default "1"
   */
  hideExpand: string;

  /** TODO: Unknown property
   * @default "15,0,3,14400"
   */
  adLogic: string;

  /** TODO: Unknown property
   * @default "safari,chrome,opera,yandex,firefox"
   */
  checkAutoplayBrowsers: string;
}

export interface PlayerOptions {
  /** TODO: Unknown property
   * @default "VideoPopup_player_1234567891234"
   */
  playerId: string;

  /** TODO: Unknown property
   * @default "491"
   */
  width: string;

  /** TODO: Unknown property
   * @default "275"
   */
  height: string;

  /** TODO: Unknown property
   * @default false
   */
  notifyEnabled: boolean;

  /** TODO: Unknown property
   * @default "https://st.mycdn.me/static/MegaPlayer/10-10-15/vp.swf"
   */
  url: string;

  /** TODO: Unknown property
   * @default "https://st.mycdn.me/static/MegaPlayer/10-10-15/vp11.swf"
   */
  url11: string;

  /** TODO: Unknown property
   * @default "//st.mycdn.me/static/MegaPlayer/10-11-74/okHtml5Player.min"
   */
  html5url: string;

  /** TODO: Unknown property
   * @default "11.2"
   */
  minFlashVersionNewPlayer: string;

  /** TODO: Unknown property
   * @default "opaque"
   */
  wmode: string;

  /** TODO: Unknown property
   * @default true
   */
  asa: boolean;

  /** TODO: Unknown property
   * @default "LIVE_BOOSTY"
   */
  provider: string;

  /** TODO: Unknown property
   */
  flashvars: Flashvars;

  /** TODO: Unknown property
   * @default 5000
   */
  liveRertyTimeout: number;

  /** TODO: Unknown property
   * @default "https://i.mycdn.me/videoPreview?mid=1234567891234&type=37&cv=66248&tkn=cR0jcqz6eh2jeDHMST-sUHC5J6o&nocache=1&fn=external_8"
   */
  poster: string;

  /** TODO: Unknown property
   * @default false
   */
  isExternalPlayer: boolean;

  /** TODO: Unknown property
   * @default false
   */
  isIframePlayer: boolean;

  /** TODO: Unknown property
   * @default true
   */
  isHtml5Player: boolean;

  /** TODO: Unknown property
   * @default "1669164123184"
   */
  timestamp: string;

  /** TODO: Unknown property
   * @default false
   */
  stubEnabled: boolean;

  /** TODO: Unknown property
   * @default false
   */
  verifyInline: boolean;

  /** TODO: Unknown property
   * @default false
   */
  webrtcBrokenH264: boolean;

  /** TODO: Unknown property
   * @default true
   */
  playerLocalizationEnabled: boolean;
}
