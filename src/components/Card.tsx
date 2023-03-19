function Card() {
  return (
    <div className="card">
      <div className="cardImg">
        <img src="./1.jpg" alt="phone" />
      </div>
      <p className="cardPrice">199.99 руб.</p>
      <p className="cardDescription">Обувь</p>
      <p className="cardRate">
        <img src="./star.svg" alt="star" />
        <span>5</span>
      </p>
      <p className="cardDelivery">Доставка завтра</p>
    </div>
  );
}

export default Card;
