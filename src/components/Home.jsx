import Heroimage from "../assets/heroImage5.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white"
      name="home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row pt-10">
        <div className="flex flex-col justify-center h-full px-12">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold ">
            I'm a Frontend Developer
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

        <div className="rounded-2xl">
          <img
            src={Heroimage}
            alt="My Profile"
            className=" mt-14 md:m-0 mx-auto w-1/2 sm:w-2/3 md:w-full object-cover sm:rounded-lg rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
// className=" mt-14 md:m-0 mx-auto w-[250px] object-contain h-[300px] md:w-[350px] md:h-[300px] lg:h-[450px] lg:w-[500px] rounded-lg"
