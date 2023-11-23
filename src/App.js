import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestrauntMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/userContext";
import store from "./utils/store";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
// import Instamart from "./components/Instamart";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Akshay Saini",
    email: "akshay@gmail.com",
  });
  return (
    <Provider store={store}>
      <Header />
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },

      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
root.render(<RouterProvider router={appRouter} />);
