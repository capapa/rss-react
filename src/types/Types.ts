export interface ICard {
  title: string;
  img: string;
  rate: number;
  price: number;
  description: string;
  delivery: string;
}

export interface ICards {
  card: ICard;
}
