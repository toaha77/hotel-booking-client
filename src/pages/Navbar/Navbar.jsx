import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
 
const Navbar = () => {

    const navLinks = (
    <>
     <li>
        <NavLink
          to="/ "
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " font-semibold  underline"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
     <li>
        <NavLink
          to="/rooms"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white font-semibold  underline"
              : ""
          }
        >
          Rooms
        </NavLink>
      </li>
     <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " font-semibold  underline"
              : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
 )
    return (
        <div>
            <div className="navbar bg-gray-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
       <AiOutlineMenu className="text-2xl mt-2"></AiOutlineMenu>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-200 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <Link to='/'><img src="/logo.png" className='w-36' alt="logo" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;