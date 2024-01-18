import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Store from './Store';
import Home from './Home';
import Shop from './Shop';
import ItemPage from './ItemPage';
import Cart from './Cart';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Store />
          <Home />
        </>
      ),
    },
    {
      path: 'store',
      element: <Store />,
      children: [
        { path: 'shop', element: <Shop /> },
        { path: 'shop/:productId', element: <ItemPage /> },
        { path: 'cart', element: <Cart /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Router;
