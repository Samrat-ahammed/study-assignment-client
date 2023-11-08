import { Link, useNavigate } from "react-router-dom";
import registerLogo from "../assets/registerlogo.png";
import { FcGoogle } from "react-icons/Fc";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
const RegisterPage = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    const imgUrl = from.imgUrl.value;
    const name = from.name.value;

    console.log(email, password);

    if (password < 6) {
      Swal.fire(
        "Password should be at least 6 characters (auth/weak-password)"
      );
      return;
    } else if (!/^(?=.*[A-Z])(?=.*[$#@%*]).+$/.test(password)) {
      return Swal.fire("Your password is so week,", "", "error");
    }

    createUser(email, password)
      .then((result) => {
        const user = { email, name, imgUrl };
        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire("User Created", "", "success");
            }
            console.log(data);
          });
        console.log(result.user);
        navigate("/");
        Swal.fire("Create Account success", "", "success");
      })
      .catch((error) => console.error(error));
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
    <div className="flex my-5">
      <div className="hero min-h-screen w-1/2">
        <div className="w-full flex items-center justify-center mx-auto text-center">
          <div className="text-center lg:text-left"></div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body w-full">
              <div className="form-control w-full">
                <h1 className="text-5xl font-bold mb-6">Register</h1>
                <div
                  onClick={handleGoogleSignIn}
                  className="w-full border bordered btn badge-ghost mb-3 px-2 py-3 rounded-lg flex justify-center items-center text-center"
                >
                  <FcGoogle></FcGoogle>
                  <h3>Google Login</h3>
                </div>
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="Text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
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
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="imgUrl"
                  placeholder="Url"
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
                <input
                  className="btn badge-success"
                  type="submit"
                  value="Register"
                />
              </div>
              <div>
                <h3>
                  Already Have An Account-
                  <Link to={"/login"} className="text-blue-800">
                    Login
                  </Link>
                </h3>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-3/6 text-center my-auto">
        <img className="w-full h-full" src={registerLogo} alt="" />
      </div>
    </div>
  );
};

export default RegisterPage;
