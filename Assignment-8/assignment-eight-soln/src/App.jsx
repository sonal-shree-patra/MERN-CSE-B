import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import One from './pages/One'
import Four from './pages/Four'
function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/one", element: <One />},
        { path: "/four", element: <Four />}
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
