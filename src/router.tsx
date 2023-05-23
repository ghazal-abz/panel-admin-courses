import { createBrowserRouter } from "react-router-dom";
import Login, { loginAction } from "./features/Identity/components/login";
import Register, {
  registerAction,
} from "./features/Identity/components/register";
import IdentityLayout from "./layouts/identity-layout";
import Courses, { coursesLoader } from "./pages/courses";
import MainLayout from "./layouts/mainLayout/main-layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <Courses />,
        index: true,
        loader: coursesLoader,
      },
    ],
  },
  {
    element: <IdentityLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
        action: loginAction,
        errorElement: <Login />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
        errorElement: <Register />,
      },
    ],
  },
]);

export default router;
