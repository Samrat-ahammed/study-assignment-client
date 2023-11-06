import { Link, useNavigate } from "react-router-dom";
import loginLogo from "../assets/loginLogo.jpg";

import { FcGoogle } from "react-icons/Fc";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const LoginPage = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        result.user;

        navigate(location?.state ? location?.state : "/");
        Swal.fire("You are Logedin", "", "success");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(error);
      });
  };
  return (
    <div className="flex">
      <div className="hero min-h-screen bg-base-200 w-1/2">
        <div className="w-full flex items-center justify-center mx-auto text-center">
          <div className="text-center lg:text-left"></div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body w-full">
              <div className="form-control w-full">
                <h1 className="text-5xl font-bold mb-6">Login</h1>
                <div
                  onClick={handleGoogleSignIn}
                  className="w-full border bordered btn badge-ghost px-2 py-3 rounded-lg flex justify-center items-center text-center"
                >
                  <FcGoogle></FcGoogle>
                  <h3>Google Login</h3>
                </div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn" type="submit" value="Login" />
              </div>
              <div>
                <h3>
                  New Here Please-
                  <Link to={"/register"} className="text-blue-800">
                    Register
                  </Link>
                </h3>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-1/2 text-center my-auto">
        <img className="w-full" src={loginLogo} alt="" />
      </div>
    </div>
  );
};

export default LoginPage;
