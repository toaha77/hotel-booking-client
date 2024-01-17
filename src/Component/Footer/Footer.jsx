import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

 
const Footer = () => {
    return (
        <div className="mt-4">
    <footer className="footer p-10 bg-gray-200 text-base-content">
  <nav className="">
    <header className="salsa text-3xl">Long Beach Hotel</header> 
    <p className="salsa">An Ode to the Luxury of Unforgettable Memories</p>
    <div className="pt-2 font-semibold ">
     <Link  to='/contact'>Contact Us</Link> <br />
     <Link to='/gallery'>Gallery</Link>
    </div>
   
  </nav> 
  <nav>
    <img className="w-48" src="logo.png" alt="" />
    <div className="flex items-center gap-4 px-8 py-5 justify-center">
       <FaFacebook className="text-2xl"></FaFacebook>
       <FaInstagram className="text-2xl"></FaInstagram>
       <FaYoutube className="text-2xl"></FaYoutube>
    </div>
  </nav> 
  <nav className="">
    <header className="salsa text-3xl">Our Hours</header> 
    <p className="salsa">An Ode to the Luxury of Unforgettable Memories</p>
    <div className="pt-2 font-semibold ">
     <p>Reception - 24 Hours</p>
     <p></p>
    </div>
   
  </nav> 
</footer>
        </div>
    );
};

export default Footer;