import { Message } from './chat.types';

export interface WebsocketMessageResponse {
  result: {
    // public-chat:81041
    // public-stream:81041
    channel: string;
    data: {
      data: {
        type: 'message';
        data: Message;
      };
      offset: number;
    };
  };
}

export interface AppConfig {
  appId: string;
  hosts: Hosts;
  oauthCookieDomain: string;
  locale: string;
  isLocaleEnabled: boolean;
  auth: Auth;
  clientId: string;
  browserFamily: string;
  isTestServer: boolean;
  isServerRendering: boolean;
  isErrorsReportEnable: boolean;
  isSendLogsEnable: boolean;
  isMobile: boolean;
  isIOs: boolean;
  isAndroid: boolean;
  isRefHeaderEnable: boolean;
  isLocaleHeaderEnable: boolean;
  isWithCredentialsEnable: boolean;
  isError: boolean;
  isError403: boolean;
  isError404: boolean;
  isError500: boolean;
  isError502: boolean;
  isBlogNotFound: boolean;
  chat: Chat;
  user: User;
  oauthRedirect: string;
  oauthProviders: OauthProviders;
  publisher: Publisher;
  paidPosts: PaidPosts;
  payment: Payment;
  isMergePaymentBindsCards: boolean;
  countriesListPaymentCardsRU: number[];
  currencies: Currencies;
  limits: WelcomeLimits;
  singlePaymentMaxPrice: number;
  qiwi: CustomUrls;
  changePhone: ChangePhone;
  dmr: DMR;
  target: Target;
  externalApps: ExternalApps;
  banners: Banner[];
  applePay: ApplePay;
  websocket: Websocket;
  isAuthorizeByPhoneEnabled: boolean;
  supportEmail: string;
  hiddenMetaApps: HiddenMetaApps;
  heartbeats: Heartbeats;
  conditionalFeatures: { [key: string]: ConditionalFeature };
  customUrls: CustomUrls;
  comments: Comments;
  isStreamersRegistrationEnabled: boolean;
  stat: Stat;
  location: Location;
  oauth: Oauth;
  isLogoutByApi: boolean;
  topMenu: TopMenu;
  footer: Footer;
  support: Support;
  notifications: Notifications;
  boostyLink: BoostyLink;
  offer: Offer;
  supportProgram: SupportProgram;
  isWebView: boolean;
  webview: Webview;
}

export interface ApplePay {
  version: null;
  enable: boolean;
}

export interface Auth {
  access: string;
  refresh: string;
}

export interface Banner {
  id: string;
  settings: Settings;
}

export interface Settings {
  android: Android;
  ios: Android;
}

export interface Android {
  maxImpressions: number;
  cooldown: Cooldown;
  data: Data;
  isDisabled?: boolean;
}

export interface Cooldown {
  clicked: Clicked;
  closed: Clicked;
  exhausted: Clicked;
  shown: Shown;
}

export interface Clicked {
  days: number;
}

export interface Shown {
  minutes: number;
}

export interface Data {
  url: string;
}

export interface BoostyLink {
  url: string;
  from: string;
}

export interface ChangePhone {
  isNotifierFlowForced: boolean;
}

export interface Chat {
  linkUsageType: string;
  messagesLimit: number;
  overscanRowCount: number;
}

export interface Comments {
  feedLimit: number;
  feedRepliesLimit: number;
  extraCommentsLimit: number;
  fullPageLimit: number;
  fullPageRepliesLimit: number;
  maxAttachedImages: number;
}

export interface ConditionalFeature {
  threshold: number;
  users: number[];
}

export interface Currencies {
  list: string[];
  methods: Methods;
  bindCard: BindCard;
}

export interface BindCard {
  RUB: number;
  USD: number;
  EUR: number;
}

export interface Methods {
  RUB: string[];
}

export interface CustomUrls {}

export interface DMR {
  dmrFrameHeight: number;
  dmrFrame3dsHeight: number;
  dmrFramePaypalHeight: number;
  dmrFrameQiwiHeight: null;
}

export interface ExternalApps {
  telegram: CustomUrls;
  discord: CustomUrls;
}

export interface Footer {
  copyright: string;
  links: FooterLink[];
}

export interface FooterLink {
  isBlank: boolean;
  title: string;
  url: string;
}

export interface Heartbeats {
  defaultInterval: number;
}

export interface HiddenMetaApps {
  isEnabled: boolean;
  countriesList: any[];
}

export interface Hosts {
  api: string;
  static: string;
  main: string;
  websocket: string;
  boosty: string;
}

export interface WelcomeLimits {
  donation: Donation;
  level: Donation;
  message: Donation;
  post: Donation;
}

export interface Donation {
  min: CustomUrls;
  max: CustomUrls;
}

export interface Location {
  isEnabled: boolean;
  country: string;
  region: string;
  isEUCountry: boolean;
}

export interface Notifications {
  isEnabled: boolean;
  opacity: Opacity;
  texts: Texts;
}

export interface Opacity {
  icon: string;
  dropdown: string;
}

export interface Texts {
  title: string;
  content: string;
}

export interface Oauth {
  boosty: Boosty;
}

export interface Boosty {
  appId: string;
  url: string;
  from: string;
}

export interface OauthProviders {
  vk: CustomUrls;
  ok: CustomUrls;
  fb: CustomUrls;
  mr: CustomUrls;
  google: CustomUrls;
  youtube: CustomUrls;
  twitch: CustomUrls;
  discord: Discord;
  discordBot: CustomUrls;
  vkplay: Vkplay;
}

export interface Discord {
  appId: string;
  scope: string;
  tokenEndpoint: string;
  redirectUrl: string;
}

export interface Vkplay {
  appId: string;
  tokenEndpoint: string;
  skipGrants: SkipGrants;
}

export interface SkipGrants {
  enabled: number;
  timeout: Timeout;
}

export interface Timeout {
  enabled: number;
  duration: number;
}

export interface Offer {
  supportProgramOffer: SupportProgramOffer;
}

export interface SupportProgramOffer {
  host: string;
  url: string;
  title: string;
  text: Text;
  languageSelector: string;
}

export interface Text {
  ru: string;
  en: string;
}

export interface PaidPosts {
  isCreateEnable: boolean;
  minPrice: null;
}

export interface Payment {
  default: Default;
  qiwi: Default;
  yandex: Default;
}

export interface Default {
  retries: number;
  timeout: number;
}

export interface Publisher {
  files: Files;
  audioFiles: Files;
  videoFiles: Files;
  images: Images;
  tags: Tags;
  drafts: Drafts;
}

export interface Files {
  isEnable: boolean;
  limits: AudioFilesLimits;
  upload: Upload;
  isStatChunkSuccessEnabled?: boolean;
}

export interface AudioFilesLimits {
  fileSize: number;
  unit: string;
}

export interface Upload {
  chunkSize: number;
  retryCount: number;
  retryDelay: number;
}

export interface Drafts {
  savingTimeout: number;
}

export interface Images {
  limits: ImagesLimits;
}

export interface ImagesLimits {
  checkWidth: boolean;
  maxWidth: number | null;
  maxSize: number;
  unit: string;
  resolutions?: string[];
}

export interface Tags {
  maxCount: number;
  maxLength: number;
}

export interface Stat {
  videoStartDelay: number;
}

export interface Support {
  isEnabled: boolean;
  url: string;
}

export interface SupportProgram {
  isBeta: boolean;
}

export interface Target {
  minPrice: null;
  minMoneyTargetSum: null;
  maxMoneyTargetSum: null;
  maxSubscribersTargetSum: null;
  defaultPaymentSum: null;
}

export interface TopMenu {
  links: TopMenuLink[];
  isBlacklistEnabled: boolean;
}

export interface TopMenuLink {
  title: string;
  url: string;
  isCurrent?: boolean;
}

export interface User {
  nick: Nick;
  avatar: Images;
  isBoostyAccountLinkInRequestAccessEnabled: boolean;
}

export interface Nick {
  changeLockPeriod: number;
}

export interface Websocket {
  isEnabled: boolean;
  isDebug: boolean;
  token: string;
}

export interface Webview {
  isVkPlayerDisabled: boolean;
}
