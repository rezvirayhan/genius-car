import React, { useContext } from "react";
import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handlesignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .cetch((err) => console.error(err));
  };

  return (
    <div class="hero w-full my-20">
      <div class="hero-content gap-20 flex-col lg:flex-row grid md:grid-cols-2">
        <div class="text-center lg:text-left">
          <img className="w-3/4" alt="" src={loginImg}></img>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pb-10">
          <h1 class="text-5xl text-center font-bold">Sign Up now!</h1>
          <form onSubmit={handlesignup} class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                required
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="password"
                class="input input-bordered"
              />
            </div>
            <div class="form-control mt-6">
              <input class="btn btn-primary" type="submit" value="Sign Up" />
            </div>
          </form>
          <p className="text-center">
            Alrady Have an account{" "}
            <Link className="font-bold text-orange-600" to="/login">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
