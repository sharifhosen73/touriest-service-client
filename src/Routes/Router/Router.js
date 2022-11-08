import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home/Home";
import Place from "../../pages/Home/Place/Place";
import Main from "../../pages/Layout/Main";

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
    ],
  },
]);
