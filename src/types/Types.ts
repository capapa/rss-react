export interface ICard {
  id: number;
  title: string;
  img: string;
  rate: number;
  price: number;
  description: string;
  delivery: string;
  country: string;
  arrival: Date;
}
export interface ICardWrapper {
  card: ICard;
}

export interface ICards {
  cards: ICardWrapper[];
}

export type StateInput = {
  value: string;
};

export type InfoValidation = {
  id?: number;
  title?: string;
  img?: string | File;
  rate?: number;
  price?: number;
  description?: string;
  delivery?: string;
  country?: string;
  arrival?: Date;
};

export type Props = {
  id: number;
  addCard: (value: InfoValidation) => void;
};

export type State = {
  errors: {
    title: string;
    img: string;
    rate: string;
    price: string;
    description: string;
    delivery: string;
    country: string;
    arrival: string;
  };
};

export type PropsFormItem<T> = {
  label: string;
  refControl: T;
  hasError: boolean;
  errorText?: string;
};

// type PropsFormContol = {
//   hasError: boolean;
//   errorText: string;
//   label: string;
//   id: number;
//   type: string;
// };
