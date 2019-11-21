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
