import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="ThirdMedia" className="w-[200px] h-[50px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">

        <li className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 }`} onClick={() => navigate("/")}>
          <a >{"Home"}</a>
        </li>
        <li className={`font-poppins font-normal cursor-pointer text-[16px]} mr-10`} onClick={() => navigate("/feed")}>
          <a >{"Feed"}</a>
        </li>
        <li className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 }`} onClick={() => {
          navigate("/profile");
        }}>
          <a >{"Profile"}</a>
        </li>
        <li className={`font-poppins font-normal cursor-pointer text-[16px]} mr-10`} onClick={() => {
          navigate("/analysis/creator");
        }}>
          <a >{"Revenue"}</a>
        </li>
        <li className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 }`} onClick={() => navigate("/analysis/creator")}>
          <a >{""}</a>
        </li>
        {/* {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))} */}


      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${!toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            <li className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 }`} onClick={() => setToggle(!toggle)}>
              <a >{"Home"}</a>
            </li>
            <li className={`font-poppins font-normal cursor-pointer text-[16px]} mr-10`} onClick={() => setToggle(!toggle)}>
              <a >{"Feed"}</a>
            </li>
            <li className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 }`} onClick={() => setToggle(!toggle)}>
              <a >{"Profile"}</a>
            </li>
            <li className={`font-poppins font-normal cursor-pointer text-[16px]} mr-10`} onClick={() => setToggle(!toggle)}>
              <a >{"Revenue"}</a>
            </li>
            <li className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 }`} onClick={() => setToggle(!toggle)}>
              <a >{""}</a>
            </li>
          </ul>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
