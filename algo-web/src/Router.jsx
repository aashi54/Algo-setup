import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Apps from "./Apps";

const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },

    {
        path: "/login",
        element : <Apps/>
    }
]);

export default AppRouter;
