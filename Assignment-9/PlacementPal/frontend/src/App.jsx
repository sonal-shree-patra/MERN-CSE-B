import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import AddInterview from "./pages/AddInterview"
import Layout from "./layouts/Layout"
import InterviewDetails from "./pages/InterviewDetails"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {path: "/", element: <Home />},
        {path: "/addinterview", element: <AddInterview />},
        {path: "/interview/:id", element: <InterviewDetails />},
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default App
