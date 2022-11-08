import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  const menuItems = (
    <>
      <Link className="mr-5 pt-4" to="/">
        Home
      </Link>

      <Link className="mr-5 pt-4" to="/blog">
        Blog
      </Link>
      {user?.uid ? (
        <>
          <button onClick={handleLogOut} className="btn btn-active btn-primary">
            Sign Out
          </button>
        </>
      ) : (
        <>
          <Link className="mt-2 lg:mr-5" to="/signin">
            <button className="btn btn-active btn-primary">Sign In</button>
          </Link>
          <Link className="mt-2 lg:mr-5" to="/signup">
            <button className="btn btn-active btn-primary"> Sign Up</button>
          </Link>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-orange-400">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Tourist Services
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
