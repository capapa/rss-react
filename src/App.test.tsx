import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('Render Home', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Home page')).toBeInTheDocument();
  });

  it('Render About', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('About page')).toBeInTheDocument();
  });

  it('Render 404', () => {
    render(
      <MemoryRouter initialEntries={['/abcdef']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('404 Not found')).toBeInTheDocument();
  });
});
