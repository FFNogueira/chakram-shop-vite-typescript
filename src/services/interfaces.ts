export interface ILocation {
  state?: {
    prevPath?: string;
    data?: object;
  };
}

export interface Item {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}

export interface ItemList {
  title: string;
  id: string;
  items: Item[];
}

export interface SignProps {
  pointerEvents: string;
  setPointerEvents: React.Dispatch<React.SetStateAction<string>>;
  prevPath?: string;
  data?: object;
}

export interface IUserData {
  uid: string;
  displayName?: string;
  photoURL?: string;
  email: string;
}

export interface IUser {
  user: IUserData;
}

export type TUser = IUserData | null;

export interface ILoginStatus {
  currentUser: TUser;
}

export interface ICartItem {
  itemName: string;
  imgURL: string;
  units: number;
  unitPrice: number;
}

export interface IAction<P> {
  type: string;
  payload: P;
}
