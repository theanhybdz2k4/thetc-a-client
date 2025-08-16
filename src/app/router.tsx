import { createBrowserRouter, RouterProvider } from 'react-router';
import { lazy } from 'react';
import Layout from '@/components/layout/layout';
import { ThemeProvider } from '@/providers/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NotFoundPage from './pages/not-found';
import HomePage from './pages/home';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

const queryClient = new QueryClient();

export function AppRouter() {
  return (
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}