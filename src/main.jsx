import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/home.jsx'
import Shop from './Pages/Shop/Shop.jsx'
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx'
import Events from './Pages/Events/Events.jsx'
import AboutPage from './Pages/AboutPage/AboutPage.jsx'
import AccountPage from './Pages/AccountPage/AccountPage.jsx'
//import RouterPages from './RouterPages.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/events",
        element: <Events />
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/account",
        element: <AccountPage />
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
