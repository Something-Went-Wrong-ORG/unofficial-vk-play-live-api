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
  /** TODO: Unknown property
   * @default "Some Test Name"
   */
  displayName: string;

  /** TODO: Unknown property
   * @default "Some Test Name"
   */
  nick: string;

  /** TODO: Unknown property
   * @default 12345678
   */
  id: number;

  /** TODO: Unknown property
   * @default "Some Test Name"
   */
  name: string;

  /** TODO: Unknown property
   * @default "https://images.boosty.to/user/12345678/avatar?change_time=1667219678"
   */
  avatarUrl: string;

  /** TODO: Unknown property
   * @default true
   */
  hasAvatar: boolean;
}

export interface CategoryInfo {
  /** TODO: Unknown property
   * @default
   */
  title: string;

  /** TODO: Unknown property
   * @default
   */
  id: string;

  /** TODO: Unknown property
   * @default
   */
  coverUrl: string;

  /** TODO: Unknown property
   * @default
   */
  type: string;
}

export interface StaticticsCounters {
  /** TODO: Unknown property
   * @default
   */
  likes: number;

  /** TODO: Unknown property
   * @default
   */
  views: number;

  /** TODO: Unknown property
   * @default
   */
  viewers: number;
}

export interface ChatSettings {
  /** TODO: Unknown property
   * @default
   */
  blogId: number;

  /** TODO: Unknown property
   * @default
   */
  allowAccess: string;

  /** TODO: Unknown property
   * @default
   */
  remainingTime: null;

  /** TODO: Unknown property
   * @default
   */
  allowAccessAfter: number;
}

export interface PlayerURL {
  /** TODO: Unknown property
   * @default
   */
  type: PlayerType;

  /** TODO: Unknown property
   * @default
   */
  url: string;
}

export interface VideoInfo {
  /** TODO: Unknown property
   * @default
   */
  vid: string;

  /** TODO: Unknown property
   * @default
   */
  playerUrls: PlayerURL[];

  /** TODO: Unknown property
   * @default
   */
  title: string;

  /** TODO: Unknown property
   * @default
   */
  type: string;

  /** TODO: Unknown property
   * @default
   */
  url: string;
}

export interface Metadata {
  /** TODO: Unknown property
   * @default
   */
  hasChat: boolean;

  /** TODO: Unknown property
   * @default
   */
  isEnded: boolean;

  /** TODO: Unknown property
   * @default
   */
  previewUrl: string;

  /** TODO: Unknown property
   * @default
   */
  isOnline: boolean;

  /** TODO: Unknown property
   * @default
   */
  count: StaticticsCounters;

  /** TODO: Unknown property
   * @default
   */
  daNick: string;

  /** TODO: Unknown property
   * @default
   */
  category: CategoryInfo;

  /** TODO: Unknown property
   * @default
   */
  isCreated: boolean;

  /** TODO: Unknown property
   * @default
   */
  embedUrl: string;

  /** TODO: Unknown property
   * @default
   */
  createdAt: number;

  /** TODO: Unknown property
   * @default
   */
  startTime: number;

  /** TODO: Unknown property
   * @default null
   */
  endTime: null;

  /** TODO: Unknown property
   * @default
   */
  wsStreamChannel: string;

  /** TODO: Unknown property
   * @default
   */
  title: string;

  /** TODO: Unknown property
   * @default
   */
  chatSettings: ChatSettings;

  /** TODO: Unknown property
   * @default
   */
  data: VideoInfo[];

  /** TODO: Unknown property
   * @default
   */
  isChatModerator: boolean;

  /** TODO: Unknown property
   * @default
   */
  id: string;

  /** TODO: Unknown property
   * @default
   */
  hasAccess: boolean;

  /** TODO: Unknown property
   * @default
   */
  user: UserData;

  /** TODO: Unknown property
   * @default
   */
  isLiked: boolean;

  /** TODO: Unknown property
   * @default
   */
  isBlackListedByUser: boolean;

  /** TODO: Unknown property
   * @default public-chat:11353808
   */
  wsChatChannel: string;
}
