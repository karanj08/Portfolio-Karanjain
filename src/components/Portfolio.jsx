import amazon from "../assets/portfolio/amazon.png";
import promptopia from "../assets/portfolio/promptopia.png";
import booking from "../assets/portfolio/booking.com.png";
import basicwebsite from "../assets/portfolio/basicwebsite.png";
import tourtravel from "../assets/portfolio/tour-travel.png";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import {
  RiJavascriptFill,
  RiReactjsFill,
  RiHtml5Fill,
  RiCss3Fill,
} from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: amazon,
      href: "https://amazon-clone-xi-eosin.vercel.app/",
      code: "https://github.com/karanj08/amazon-clone",
    },
    {
      id: 2,
      src: promptopia,
      href: "https://promptopia-psi-gold.vercel.app/",
      code: "https://github.com/karanj08/promptopia",
    },
    {
      id: 3,
      src: tourtravel,
      href: "https://tour-travel-ruddy.vercel.app/",
      code: "https://github.com/karanj08/tour-travel",
    },
    {
      id: 4,
      src: booking,
      href: "https://booking-2-clone.vercel.app/",
      code: "https://github.com/karanj08/Booking-2-clone",
    },
    {
      id: 5,
      src: basicwebsite,
      href: "https://basicwebsite-three.vercel.app/",
      code: "https://github.com/karanj08/basicwebsite",
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  const demosite = (id) => {
    portfolios.map((portfolio) => {
      if (id === portfolio.id) {
        location.href = { portfolio, href };
      }
    });
  };

  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map((portfolio) => (
            <div
              className="shadow-md shadow-gray-600 rounded-lg"
              key={portfolio.id}
            >
              <img
                src={portfolio.src}
                alt=""
                className="rounded-md duration-300 hover:scale-105"
              />
              <div className="p-2 flex space-x-1">
                <RiHtml5Fill />
                <RiCss3Fill />
                <RiJavascriptFill />
                <SiTailwindcss />
                <RiReactjsFill />
              </div>
              <div className="flex items-center justify-center">
                <a
                  className="w-1/2 px-6 py-1 mx-4 my-2 hover:scale-105 duration-300"
                  onClick={(portfolio) => demosite}
                  href={portfolio.href}
                  target="_blank"
                  rel="nonreferrer"
                >
                  Demo
                </a>
                <a
                  className="w-1/2 px-6 py-1 mx-4 my-2 hover:scale-105 duration-300"
                  href={portfolio.code}
                  target="_blank"
                  rel="nonreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
