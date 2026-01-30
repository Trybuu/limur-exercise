import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home.tsx'
import MainLayout from './layouts/MainLayout.tsx'
import Users from './pages/users/Users.tsx'
import AddUser from './pages/users/AddUser.tsx'
import UserDetails from './pages/users/UserDetails.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'users',
        children: [
          {
            index: true,
            element: <Users />,
          },
          {
            path: ':id',
            element: <UserDetails />,
          },
          {
            path: 'add',
            element: <AddUser />,
          },
        ],
      },
      {
        path: '*',
        element: (
          <section>
            <h1>Not found</h1>
          </section>
        ),
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
