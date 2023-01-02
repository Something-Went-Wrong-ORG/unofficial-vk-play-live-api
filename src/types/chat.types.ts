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
}

export enum MessagePartModificator {
  BlockEnd = 'BLOCK_END',
  Empty = ''
}

export enum Type {
  Text = 'text'
}

export interface Extra {
  isBaned: boolean;
  offset: number;
  isLast: boolean;
}
