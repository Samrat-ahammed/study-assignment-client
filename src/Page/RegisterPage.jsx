import { Link } from "react-router-dom";
import registerLogo from "../assets/registerlogo.png";
import { FcGoogle } from "react-icons/Fc";
const RegisterPage = () => {
  return (
    <div className="flex">
      <div className="hero min-h-screen bg-base-200 w-1/2">
        <div className="w-full flex items-center justify-center mx-auto text-center">
          <div className="text-center lg:text-left"></div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body w-full">
              <div className="form-control w-full">
                <h1 className="text-5xl font-bold mb-6">Register</h1>
                <div className="w-full border bordered btn badge-ghost px-2 py-3 rounded-lg flex justify-center items-center text-center">
                  <FcGoogle></FcGoogle>
                  <h3>Google Login</h3>
                </div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
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
                <button className="btn btn-">Register</button>
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
