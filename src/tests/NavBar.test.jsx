import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Router from '../components/Router';

describe('NavBar Navigation', () => {
  it('Shop button navigates to shop', async () => {
    const user = userEvent.setup();

    render(<Router />);

    const shopButton = screen.getByRole('link', { name: 'Shop' });
    await user.click(shopButton);
    expect(screen.getByRole('heading', { name: 'Shop' }).textContent).toMatch(
      /Shop/i,
    );
  });

  it('Cart button navigates to cart', async () => {
    const user = userEvent.setup();

    render(<Router />);

    const cartButton = screen.getByAltText('cart icon');
    await user.click(cartButton);
    expect(screen.getByRole('heading', { name: 'Cart' }).textContent).toMatch(
      /Cart/i,
    );
  });

  it('Home button navigates to home', async () => {
    const user = userEvent.setup();

    render(<Router />);

    const shopButton = screen.getByRole('link', { name: 'Shop' });
    await user.click(shopButton);
    expect(screen.getByRole('heading', { name: 'Shop' }).textContent).toMatch(
      /Shop/i,
    );

    const homeButton = screen.getByRole('link', { name: 'Home' });
    await user.click(homeButton);
    expect(screen.getByRole('heading', { name: 'Home' }).textContent).toMatch(
      /Home/i,
    );
  });

  it('Gear button navigates to home', async () => {
    const user = userEvent.setup();

    render(<Router />);

    const shopButton = screen.getByRole('link', { name: 'Shop' });
    await user.click(shopButton);
    expect(screen.getByRole('heading', { name: 'Shop' }).textContent).toMatch(
      /Shop/i,
    );

    const gearIcon = screen.getByAltText('gear icon');
    await user.click(gearIcon);
    expect(screen.getByRole('heading', { name: 'Home' }).textContent).toMatch(
      /Home/i,
    );
  });

  
});
