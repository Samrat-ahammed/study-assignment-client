import { Link } from "react-router-dom";
import registerLogo from "../assets/registerlogo.png";
import { FcGoogle } from "react-icons/Fc";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const RegisterPage = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("created user", user);
      })
      .catch((error) => console.log(error));
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
                <div className="w-full border bordered btn badge-ghost mb-3 px-2 py-3 rounded-lg flex justify-center items-center text-center">
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
