import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const navitem = [
  {
    id: 1,
    link: "home",
  },
  {
    id: 2,
    link: "about",
  },
  {
    id: 3,
    link: "portfolio",
  },
  {
    id: 4,
    link: "knowledge",
  },
  {
    id: 5,
    link: "contact",
  },
];

const NavBar = () => {
  const [bar, setbar] = useState(false);
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className=" font-signature ml-2 text-5xl">Karan</h1>
      </div>

      <ul className="hidden md:flex">
        {navitem.map(({ id, link }) => (
          <li
            className="px-4 cursor-pointer capitalize text-gray-400 font-medium hover:scale-125 duration-200"
            key={id}
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setbar(!bar)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {bar ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {bar && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {navitem.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setbar(!bar)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
