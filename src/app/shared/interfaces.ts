export interface Profile {
  avatar: string;
  name: string;
  surname: string;
  admin: boolean;
  massages: boolean;
  friends: boolean;
}

export interface Friends {
  id: bigint;
  avatar?: string;
  name: string;
  surname: string;

}
export interface Senders {
  id: bigint;
  avatar?: string;
  name: string;
  surname: string;

}
export interface Body {
  id: bigint;
  me: boolean;
  body: string;

}

