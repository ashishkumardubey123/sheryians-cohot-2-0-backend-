import { useState } from 'react'
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contactus from './Components/Contactus';
import nav from './Components/nav';



function App() {
const router = createBrowserRouter([
  { path: "/",
    element: <Home/>
  },
   { path: "/About",
    element: <About/>
  },
   { path: "/Services",
    element: <Services/>
  },
   { path: "/Contactus",
    element: <Contactus/>
  },

])

 

  return (
    <>
      <nav/>
      <RouterProvider router={router} />
    </>
  )
}

export default App
