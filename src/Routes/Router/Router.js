import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home/Home";
import Place from "../../pages/Home/Place/Place";
import PlaceItem from "../../pages/Home/PlaceItem/PlaceItem";
import Main from "../../pages/Layout/Main";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import SignIn from "./../../pages/SignIn/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/place",
        element: <Place />,
      },

      {
        path: "/place/:id",
        element: (
          <PrivateRouter>
            <PlaceItem />
          </PrivateRouter>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/place/${params.id}`);
        },
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
