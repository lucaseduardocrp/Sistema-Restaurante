import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Menu } from '../pages/Menu';
import { ProductDetail } from '../pages/ProductDetail';
import { Chefs } from '../pages/Chefs';
import { Location } from '../pages/Location';
import Layout from '../layout';
import { NotFound } from '../pages/NotFound';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/product',
        element: <Menu />
      },
      {
        path: '/product/:id',
        element: <ProductDetail />
      },
      {
        path: '/chefs',
        element: <Chefs />
      },
      {
        path: '/location',
        element: <Location />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

export { router };
