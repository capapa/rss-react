import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('render card', () => {
    const card = {
      img: '2.jpg',
      title: 'test title',
      description: 'test desc',
      rate: 5,
      price: 333,
      delivery: 'test delivery',
      arrival: new Date('2023-02-02'),
    };
    render(<Card card={card} />);
    const cardElem = screen.getByTestId('card-element');
    const cardDescription = screen.getByTestId('cardDescription-element');

    expect(cardDescription).toBeInTheDocument();
    expect(cardElem).toBeInTheDocument();
    expect(cardDescription).toContainHTML('test desc');
  });
});
