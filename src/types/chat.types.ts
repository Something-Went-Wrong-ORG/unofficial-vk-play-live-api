import { UserData } from './metadata.types';

export interface ChatResponse {
  extra: Extra;
  data: Message[];
}

export interface Message {
  author: UserData;
  id: number;
  data: MessagePart[];
  styles: any[];
  isPrivate: boolean;
  createdAt: number;
  // only on WS
  user?: UserData;
}

export interface MessagePart {
  modificator: MessagePartModificator;
  type: Type;
  content: [string, string, []] | string;
  smallUrl?: string;
  url?: string;
  displayName?: string;
}

export enum MessagePartModificator {
  BlockEnd = 'BLOCK_END',
  Empty = ''
}

export enum Type {
  Text = 'text',
  Smile = 'smile',
  Link = 'link',
  Mention = 'mention'
}

export interface Extra {
  isBaned: boolean;
  offset: number;
  isLast: boolean;
}
