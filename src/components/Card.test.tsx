import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('render card', () => {
    render(<Card />);
    const card = screen.getByTestId('card-element');
    const cardDescription = screen.getByTestId('cardDescription-element');

    expect(cardDescription).toBeInTheDocument();
    expect(card).toBeInTheDocument();
  });
});
