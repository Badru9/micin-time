import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { HeroUIProvider } from '@heroui/react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import RecipeDetailPage from './recipe-detail/[id]/page.tsx';
import MenuList from './menu-list/page.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/recipe-detail/:id',
    element: <RecipeDetailPage />,
  },
  {
    path: '/menu-list',
    element: <MenuList />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <RouterProvider router={router} />
    </HeroUIProvider>
  </StrictMode>
);
