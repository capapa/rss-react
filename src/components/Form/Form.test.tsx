import { render, screen } from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
  it('render Form', () => {
    render(<Form addCard={(value) => {}} id={5} />);
    const inputDescription = screen.getByRole('form');

    expect(inputDescription).toBeInTheDocument();
  });
});
