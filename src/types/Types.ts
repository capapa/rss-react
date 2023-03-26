export interface ICard {
  title: string;
  img: string;
  rate: number;
  price: number;
  description: string;
  delivery: string;
  country: string;
  arrival: Date;
}

export interface ICards {
  card: ICard;
}

export type StateInput = {
  value: string;
};

export type InfoValidation = {
  title?: string;
  img?: string | File;
  rate?: number;
  price?: number;
  description?: string;
  delivery?: string;
  country?: string;
  arrival?: Date;
};

export type PropsForm = {
  addFeedBackToState: (value: InfoValidation) => void;
};

export type StateForm = {
  validate: boolean;
  errors: {
    title: boolean;
    img: boolean;
    rate: boolean;
    price: boolean;
    description: boolean;
    delivery: boolean;
    country: boolean;
    arrival: boolean;
  };
};

export type PropsFormItem<T> = {
  label: string;
  refControl: T;
  hasError: boolean;
};
