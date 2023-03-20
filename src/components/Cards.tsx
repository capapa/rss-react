import Card from './Card';
import data from '../data/data.json';

function Cards() {
  return (
    <div className="container">
      {data.map((item) => {
        return <Card key={item.id} card={item} />;
      })}
    </div>
  );
}

export default Cards;
