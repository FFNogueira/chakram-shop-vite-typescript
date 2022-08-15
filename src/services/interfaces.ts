export interface ILocation {
  state?: {
    prevPath?: string;
    data?: object;
  };
}

export interface ICartItem {
  itemName: string;
  imgURL: string;
  units: number;
  unitPrice: number;
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
  displayName: string | null;
  photoURL: string | null;
  email: string | null;
}

export type TUser = IUserData | null;

export interface ILoginStatus {
  currentUser: TUser;
}

export interface IAction<P> {
  type: string;
  payload: P;
}
