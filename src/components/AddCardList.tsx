import { ICard, ICards } from '../types/Types';
import Card from './Card';

function AddCardList(props: ICards) {
  const { cards } = props;
  return (
    <div className="cards">
      {cards.map((card: ICard) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

export default AddCardList;
