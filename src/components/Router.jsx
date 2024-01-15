import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from './NavBar';
import App from './App';
import Shop from './Shop';
import ShoppingCart from './ShoppingCart';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar />
          <App />
        </>
      ),
    },
    {
      path: "store",
      element: <NavBar />,
      children: [
        { path: "shop", element: <Shop /> },
        { path: "cart", element: <ShoppingCart /> },
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