import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Page/HomePage";
import LoginPage from "../Page/LoginPage";
import RegisterPage from "../Page/RegisterPage";
import AssignmentDetails from "../Page/AssignmentDetails";
import AddAssignment from "../Page/AddAssignment";
import UpdateAssignment from "../Page/UpdateAssignment";
import AllSubmit from "../Page/AllSubmit";
import AllAssignment from "../Page/AllAssignment";
import PrivetRoute from "./PrivetRoute";
import MyAllAssignment from "../Page/MyAllAssignment";
import Faq from "../Page/Faq";
import FeatureSection from "../Page/FeatureSection";

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
        path: "/addAssignment",
        element: (
          <PrivetRoute>
            <AddAssignment></AddAssignment>
          </PrivetRoute>
        ),
      },
      {
        path: "/updateAssignment/:id",
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
        path: "/myAssignment",
        element: <MyAllAssignment></MyAllAssignment>,
      },
      {
        path: "/allAssignment",
        element: <AllAssignment></AllAssignment>,
        loader: () => fetch("http://localhost:5000/allAssignment"),
      },
      {
        path: "/allSubmit",
        element: <AllSubmit></AllSubmit>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/feature",
        element: <FeatureSection></FeatureSection>,
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
