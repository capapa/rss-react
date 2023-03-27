import { ICardWrapper } from '../types/Types';

function Card(props: ICardWrapper) {
  const { card } = props;
  // const { img, title, price, description, rate, delivery } = props;
  return (
    <div className="card" data-testid="card-element">
      <div className="cardImg">
        <img src={card.img} alt={card.title} />
      </div>
      <p className="cardPrice">{card.price} руб.</p>
      <p className="cardDescription" data-testid="cardDescription-element">
        {card.description}
      </p>
      <p className="cardRate">
        <img src="./star.svg" alt="star" />
        <span>{card.rate}</span>
      </p>
      <p className="cardArrival">
        Поступило на склад {card.arrival.toLocaleDateString()}
      </p>
      <p className="cardDelivery">Доставка {card.delivery}</p>
    </div>
  );
}

export default Card;
