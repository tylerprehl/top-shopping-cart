import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Store from './Store/Store';
import Home from './Home/Home';
import Shop from './Shop/Shop';
import ItemPage from './ItemPage/ItemPage';
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
