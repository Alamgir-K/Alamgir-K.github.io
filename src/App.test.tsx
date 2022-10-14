import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query'

test('clicking shopping cart icon opens the cart drawer', async () => {
  const client = new QueryClient();

  render(<QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>);

  fireEvent.click(await screen.findByTestId("AddShoppingCartIcon"))
  expect(screen.getByText("Shopping Cart"))

});
