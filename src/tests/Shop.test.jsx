import { describe, it, expect, beforeAll, afterAll, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { server } from './server';

import Router from '../components/Router';
import { electronics, notDisplayedElectronics } from './handlers';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('Shop Functionality', () => {
  it('Display Item Cards', async () => {
    // server.listen({ onUnhandledRequest: 'error' });

    const user = userEvent.setup();

    render(<Router />);
    const shopButton = screen.getByRole('link', { name: 'Shop' });
    await user.click(shopButton);

    // expect defined electronics to exist
    Object.entries(electronics).forEach(async (electronic) => {
      const matcher = new RegExp(`${electronic[1].title}`, 'i');
      console.log(matcher);
      expect(await screen.findByRole('link', { name: matcher })).toBeDefined();
    });

    // expect other electronics from the API to NOT exist
    // this is really more of a 'am I using MSW right?' test than an actual test
    expect(screen.queryByRole('link', { name: /Samsung 49-Inch*/i })).toBe(
      null,
    );
  });
});
