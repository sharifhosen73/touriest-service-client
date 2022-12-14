import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const provider = new GoogleAuthProvider();

const SignIn = () => {
  const { user, login, providerLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogle = () => {
    providerLogin(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully Sign In");
        navigate(from, { replace: true });
        form.reset();

        const currentUser = {
          email: user.email,
        };

        //get jwt token
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // local storage store jwt token
            localStorage.setItem("place-token", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-3xl font-bold text-center mt-5">Sign In</h1>
        <form onSubmit={handleSignIn} className="card-body">
          <div className="form-control">
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
              <Link to="/" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <input type="submit" className="btn btn-primary" value="Sign In" />

          <button onClick={handleGoogle} className="btn btn-active btn-primary">
            Sign In With Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
