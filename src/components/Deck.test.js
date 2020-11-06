import { render, screen } from '@testing-library/react';
import Deck from './Deck';

test('render deck buttons test', () => {
  render(<Deck/>);

  const resetDeckButton = screen.getByText(/Reset Deck/i);
  expect(resetDeckButton).toBeInTheDocument();

  const shuffleDeckButton = screen.getByText(/Shuffle Deck/i);
  expect(shuffleDeckButton).toBeInTheDocument();

  const orderDeckButton = screen.getByText(/Order Deck/i);
  expect(orderDeckButton).toBeInTheDocument();

  const pickCardsButton = screen.getByText(/Pick Cards/i);
  expect(pickCardsButton).toBeInTheDocument();
});
