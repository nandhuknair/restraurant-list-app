import React, {lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import RestaurantInfo from "./components/RestaurantInfo";
import userContext from "./utils/userContext";

// const Glosery = lazy(()=> import("./components/Glosery"))

import Glosery from './components/Glosery'

const AppLayout = () => {
  
const [ userName, setUserName ] = useState()

useEffect(()=> {
  //Assume an API call send username and password
  const data = {
    name:"Nandhu"
  }
  setUserName(data.name)

},[])

  return (
    <userContext.Provider value={{loggedInUser:userName ,setUserName}}>
    <div className="app">

      <Header />
      <Outlet />
  
    </div>
    </userContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantInfo />,
      },
      {
        path: "/glosery",
        element: <Suspense fallback={ <h1>Loading ..........</h1> }><Glosery /></Suspense>,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
