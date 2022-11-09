import { createBrowserRouter } from "react-router-dom";
import AllPlace from "../../pages/Home/AllPlace/AllPlace";
import AllReview from "../../pages/Home/AllReview/AllReview";
import Home from "../../pages/Home/Home/Home";
import Place from "../../pages/Home/Place/Place";
import PlaceItem from "../../pages/Home/PlaceItem/PlaceItem";
import Review from "../../pages/Home/Review/Review";
import Update from "../../pages/Home/Update/Update";
import Main from "../../pages/Layout/Main";
import NotFound from "../../pages/NotFound/NotFound";
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
        path: "/all-place",
        element: <AllPlace />,
      },
      {
        path: "/review",
        element: (
          <PrivateRouter>
            <Review />
          </PrivateRouter>
        ),
      },
      {
        path: "/review/:id",
        element: (
          <PrivateRouter>
            <Update />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/review/${params.id}`),
      },
      {
        path: "/all-review",
        element: (
          <PrivateRouter>
            <AllReview />
          </PrivateRouter>
        ),
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
  {
    path: "*",
    element: <NotFound />,
  },
]);
