import { Component } from 'react';
import Form from './Form/Form';
import { ICard } from '../types/Types';
import AddCardList from './AddCardList';

export class AddCard extends Component<object, { cards: ICard[] }> {
  constructor(props: object) {
    super(props);
    this.state = { cards: [] };
  }

  addCard = (card: ICard) => {
    const { cards } = this.state;
    card.img = URL.createObjectURL(card.img);
    cards.push(card);
    this.setState({ cards });
  };

  render() {
    return (
      <>
        <Form addCard={this.addCard} id={this.state.cards.length} />
        <AddCardList cards={this.state.cards} />
      </>
    );
  }
}

export default AddCard;
