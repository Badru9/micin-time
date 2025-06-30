import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { HeroUIProvider } from '@heroui/react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import RecipeDetailPage from './recipe-detail/[id]/page.tsx';
import MenuListPage from './menu-list/page.tsx';
import HomePageContent from './components/HomeMainContent.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App akan menjadi root layout
    errorElement: <div>Oops! Something went wrong.</div>,
    children: [
      {
        index: true, // Render HomePageContent saat di root path '/'
        element: <HomePageContent />,
      },
      {
        path: 'recipes', // Rute untuk halaman daftar resep
        element: <MenuListPage />, // Gunakan MenuListPage untuk rute /recipes
      },
    ],
  },
  {
    path: 'menu-list', // Rute untuk halaman daftar resep
    element: <MenuListPage />, // Gunakan MenuListPage untuk rute /recipes
  },
  {
    path: 'recipe-detail/:id',
    element: <RecipeDetailPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <RouterProvider router={router} />
    </HeroUIProvider>
  </StrictMode>
);
