import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <span className="loading loading-bars loading-xs"></span>;
  }
  if (user) {
    return children;
  } else {
    Swal.fire("Please Login", "", "error");
    return <Navigate to={"/login"}></Navigate>;
  }
};

export default PrivetRoute;
