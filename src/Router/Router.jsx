import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Page/HomePage";
import LoginPage from "../Page/LoginPage";
import RegisterPage from "../Page/RegisterPage";
import AssignmentDetails from "../Page/AssignmentDetails";
import AddAssignment from "../Page/AddAssignment";
import UpdateAssignment from "../Page/UpdateAssignment";
import TakeAssignment from "../Page/TakeAssignment";
import AllSubmit from "../Page/AllSubmit";
import AllAssignment from "../Page/AllAssignment";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () => fetch("http://localhost:5000/allAssignment"),
      },
      {
        path: "assignmentDetails/:id",
        element: (
          <PrivetRoute>
            <AssignmentDetails></AssignmentDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allAssignment/${params.id}`),
      },
      {
        path: "addAssignment",
        element: (
          <PrivetRoute>
            <AddAssignment></AddAssignment>
          </PrivetRoute>
        ),
      },
      {
        path: "updateAssignment/:id",
        element: (
          <PrivetRoute>
            {" "}
            <UpdateAssignment></UpdateAssignment>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allAssignment/${params.id}`),
      },
      {
        path: "takeAssignment",
        element: <TakeAssignment></TakeAssignment>,
      },
      {
        path: "allAssignment",
        element: <AllAssignment></AllAssignment>,
        loader: () => fetch("http://localhost:5000/allAssignment"),
      },
      {
        path: "allSubmit/:status",
        element: <AllSubmit></AllSubmit>,
        loader: fetch("http://localhost:5000/takeAssignment"),
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
