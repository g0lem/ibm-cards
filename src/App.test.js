import { render, screen } from '@testing-library/react';
import App from './App';

test('renders test', () => {
  render(<App />);
  const linkElement = screen.getByText(/Magic Deck/i);
  expect(linkElement).toBeInTheDocument();
});
