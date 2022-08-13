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

export interface IErrorData {
  errors: string[];
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

export interface ILoginStatus {
  currentUser: object | null;
}

// Interface de tipo:
export interface ICartItem {
  itemName: string;
  imgURL: string;
  units: number;
  unitPrice: number;
}
