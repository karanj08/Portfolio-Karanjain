import Heroimage from "../assets/heroImage5.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <div
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white"
      name="home"
    >
      <div className="max-w-screen-lg flex flex-col-reverse items-center  h-full px-4 md:flex-row pt-10  justify-between mx-auto">
        <div className="flex flex-col justify-center h-full px-12 sm:w-[800px] w-full">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold ">
            I'm a{" "}
            <span>
              <ReactTyped
                strings={["Karan Jain", "Frontend Developer"]}
                typeSpeed={120}
                backSpeed={150}
                className="text-4xl md:text-5xl lg:text-7xl font-bold text-indigo-500"
                loop
              />
            </span>
          </h2>

          <p className="text-gray-500 py-4 max-w-md">
            I have a knowledge of a Frontend Development. I love to work on web
            application using technologies like React, Tailwind, Next JS and
            Postgresql
          </p>
          <div className="">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="rounded-2xl ">
          <img
            src={Heroimage}
            alt="My Profile"
            className="ml-4 mx-auto object-cover w-[100px] sm:w-[300px] sm:rounded-lg rounded-full mt-14"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
// className=" mt-14 md:m-0 mx-auto w-[250px] object-contain h-[300px] md:w-[350px] md:h-[300px] lg:h-[450px] lg:w-[500px] rounded-lg"
