import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Router/Router";

function App() {
  return (
    <div className=" w-4/5 mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
