import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Page/HomePage";
import LoginPage from "../Page/LoginPage";
import RegisterPage from "../Page/RegisterPage";
import AssignmentDetails from "../Page/AssignmentDetails";
import AddAssignment from "../Page/AddAssignment";
import UpdateAssignment from "../Page/UpdateAssignment";
import TakeAssignment from "../Page/TakeAssignment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "assignmentDetails",
        element: <AssignmentDetails></AssignmentDetails>,
      },
      {
        path: "addAssignment",
        element: <AddAssignment></AddAssignment>,
      },
      {
        path: "updateAssignment",
        element: <UpdateAssignment></UpdateAssignment>,
      },
      {
        path: "takeAssignment",
        element: <TakeAssignment></TakeAssignment>,
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterPage></RegisterPage>,
  },

  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
]);

export default router;
