import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AddUser from "./components/AddUser";
import ShowUser from "./components/ShowUser";
import EditUser from "./components/EditUser";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "add-user",
        element: <AddUser/>
      },
      {
        path: "show-user",
        element: <ShowUser/>
      },
      {
        path: "editData/:userid",
        element: <EditUser />
      },
    ],
  },
]);

export default myRouter;
