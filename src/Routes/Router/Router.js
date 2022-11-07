import { createBrowserRouter } from "react-router-dom";
import Main from "../../pages/Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);
