import React from "react";
import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
  };

  return (
    <div class="hero w-full my-20">
      <div class="hero-content gap-20 flex-col lg:flex-row grid md:grid-cols-2">
        <div class="text-center lg:text-left">
          <img className="w-3/4" alt="" src={loginImg}></img>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pb-10">
          <h1 class="text-5xl text-center font-bold">Login now!</h1>
          <form onSubmit={handleLogin} class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                class="input input-bordered"
              />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div class="form-control mt-6">
              <input class="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center">
            New to Genius Car || Go To Register{" "}
            <Link className="font-bold text-orange-600" to="/signup">
              Sign Up
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
