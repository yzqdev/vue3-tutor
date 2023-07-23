export interface ThemeState {
  dark: boolean;
  contentPadding: boolean;
  showFooter: boolean;
}

export interface UserState {
  uid: string;
  token: string;
  username: string;
  nickname?: string;
  email?: string;
  telephone?: string;
}
export interface Pet {
  id: string;
  name: string;
  url: string;
  sex: string;
  age: number;
  owner: string;
  createTime: string;
  updateTime: string;
  deleted: boolean;
}
