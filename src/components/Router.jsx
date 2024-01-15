import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Store from './Store';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Store />
          <Home />
        </>
      ),
    },
    {
      path: "store",
      element: <Store />,
      children: [
        { path: "shop", element: <Shop /> },
        { path: "cart", element: <Cart /> },
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Router;