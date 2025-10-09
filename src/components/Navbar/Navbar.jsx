import { FaGithub } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/apps">
        <li>Apps</li>
      </Link>
      <Link to="/installation">
        <li>Installation</li>
      </Link>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center">
          <img className="w-[40px]" src={logo} alt="" />
          <Link to="/">
            <button className="btn btn-ghost text-xl bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              HERO.IO
            </button>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-3 font-semibold">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/Samin1362"
          target="blank"
          className="btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white py-[12px] px-[15px] rounded-lg"
        >
          <FaGithub /> Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
