import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('Search bar', () => {
  it('render Search Bar', () => {
    render(<SearchBar />);
    const searchInput = screen.getByTestId('searchBarInput-element');
    expect(searchInput).toBeInTheDocument();
  });

  it('change Search Bar', () => {
    render(<SearchBar />);
    const searchBarInput = screen.getByTestId(
      'searchBarInput-element'
    ) as HTMLInputElement;
    fireEvent.change(searchBarInput, { target: { value: 'find card text' } });
    expect(searchBarInput.value).toBe('find card text');
  });

  it('submit Search Bar and Local storage', () => {
    window.localStorage.clear();
    const savedText = 'saved find card text';
    const savedText2 = 'saved find card text 2';
    window.localStorage.setItem('searchBar', savedText);

    render(<SearchBar />);
    const searchBarInput = screen.getByTestId(
      'searchBarInput-element'
    ) as HTMLInputElement;

    expect(searchBarInput.value).toBe(savedText);

    fireEvent.change(searchBarInput, {
      target: { value: savedText2 },
    });

    const searchBarButton = screen.getByTestId(
      'searchBarButton-element'
    ) as HTMLInputElement;

    fireEvent(searchBarButton, new MouseEvent('click'));

    const localStorageValue = window.localStorage.getItem('searchBar');
    expect(localStorageValue).toBe(savedText2);
  });
});
