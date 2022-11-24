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
   * @example "wss://vm.mycdn.me/chat"
   */
  chatUrl: string;
  /** Contains string that is sent to websocket in order to authenticate user
   * @example "cid=1234567891234&s=abcdef123456789abcdef123456789abcdef123"
   */
  login: string;
  /** Contains timeout after which websocket must be reopened or closed
   * @example 3000
   */
  timeout: number;
  /**
   * @example true
   */
  showChatOverVideo: boolean;
}

export interface LiveStreamInfo {
  /** Contains seconds after which planned stream starts. If stream is not planned, then 0 will be set as value.
   * @example 120
   */
  startsInSec: number;
  /** Contains seconds after which planned stream ends. If stream is not planned, then 0 will be set as value.
   * @example 120
   */
  endsInSec: number;
  /** Contains start date and time of planned stream. If stream is not planned, then "0" will be set as value.
   * @example "0"
   */
  startTime: string;
  /** Contains end date and time of planned stream. If stream is not planned, then "0" will be set as value.
   * @example "0"
   */
  endTime: string;
  /** Contains seconds of playback time
   * @example 7200000
   */
  playbackDuration: number;
  /** Contains seconds of maximum playback time
   * @example 7200000
   */
  maxPlaybackDuration: number;
}

export interface AutoplayOptions {
  /** True if player must start playing after load.
   * @example true
   */
  autoplayEnabled: boolean;
  timeFromEnabled: boolean;
  noRec: boolean;
  fullScreenExit: boolean;
  vitrinaSection: string;
}

export interface StunServer {
  urls: string[];
}

export interface MovieInfo {
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
}

export interface EmbedMetadata {
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
  movie: MovieInfo;
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
  autoplay: AutoplayOptions;
  liveStreamInfo: LiveStreamInfo;
  liveChat: LiveChatInfo;
  p2pInfo: P2PInfo;
  stunServers: StunServer[];
}

export interface Flashvars {
  referer: string;
  relatedAlways: string;
  metadata: EmbedMetadata;
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
}

export interface PlayerOptions {
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
  flashvars: Flashvars;
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
