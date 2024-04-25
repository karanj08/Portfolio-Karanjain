import amazon from "../assets/portfolio/amazon.png";
import promptopia from "../assets/portfolio/promptopia.png";
import booking from "../assets/portfolio/booking.com.png";
import mapty from "../assets/portfolio/mapty.png";
import tourtravel from "../assets/portfolio/tour-travel.png";
import bankist from "../assets/portfolio/bankist.png";
import tictactoe from "../assets/portfolio/tictactoe.png";
import {
  RiJavascriptFill,
  RiReactjsFill,
  RiHtml5Fill,
  RiCss3Fill,
} from "react-icons/ri";
import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: amazon,
      href: "https://amazon-clone-xi-eosin.vercel.app/",
      code: "https://github.com/karanj08/amazon-clone",
      tech: [
        <RiHtml5Fill />,
        <RiCss3Fill />,
        <RiJavascriptFill />,
        <RiReactjsFill />,
        <SiTailwindcss />,
        <SiNextdotjs />,
      ],
      users: [],
    },
    {
      id: 2,
      src: promptopia,
      href: "https://promptopia-psi-gold.vercel.app/",
      code: "https://github.com/karanj08/promptopia",
      tech: [
        <RiHtml5Fill />,
        <RiCss3Fill />,
        <RiJavascriptFill />,
        <RiReactjsFill />,
        <SiTailwindcss />,
        <SiNextdotjs />,
        <SiMongodb />,
      ],
      users: [],
    },
    {
      id: 3,
      src: tictactoe,
      href: "https://tic-tac-toee-beta.vercel.app/",
      code: "https://github.com/karanj08/tic-tac-toe",
      tech: [
        <RiHtml5Fill />,
        <RiCss3Fill />,
        <RiJavascriptFill />,
        <RiReactjsFill />,
      ],
      users: [],
    },
    {
      id: 4,
      src: tourtravel,
      href: "https://tour-travel-ruddy.vercel.app/",
      code: "https://github.com/karanj08/tour-travel",
      tech: [
        <RiHtml5Fill />,
        <RiCss3Fill />,
        <RiJavascriptFill />,
        <RiReactjsFill />,
        <SiTailwindcss />,
      ],
      users: [],
    },
    {
      id: 5,
      src: booking,
      href: "https://booking-2-clone.vercel.app/",
      code: "https://github.com/karanj08/Booking-2-clone",
      tech: [
        <RiHtml5Fill />,
        <RiCss3Fill />,
        <RiJavascriptFill />,
        <RiReactjsFill />,
        <SiTailwindcss />,
      ],
      users: [],
    },
    {
      id: 6,
      src: bankist,
      href: "https://bankist-ivory-rho.vercel.app/",
      code: "https://github.com/karanj08/Booking-2-clone",
      tech: [<RiHtml5Fill />, <RiCss3Fill />, <RiJavascriptFill />],
      users: [
        { user: "kj", pin: "8899" },
        { user: "kd", pin: "0911" },
        { user: "ap", pin: "0311" },
      ],
    },
    {
      id: 7,
      src: mapty,
      href: "https://mapty-ivory.vercel.app/",
      code: "https://github.com/karanj08/Mapty",
      tech: [<RiHtml5Fill />, <RiCss3Fill />, <RiJavascriptFill />],
      users: [],
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
      className=" bg-gradient-to-b p-4 from-black to-gray-800 w-full text-white md:px-14 py-16"
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
              <div className="flex space-x-1 justify-between">
                {/* <RiHtml5Fill />
                <RiCss3Fill />
                <RiJavascriptFill />
                <SiTailwindcss />
                <RiReactjsFill /> */}
                <div className="flex p-2">
                  {portfolio.tech.map((port, i) => (
                    <div key={i}>{port}</div>
                  ))}
                </div>
                <div className="flex gap-1">
                  {portfolio.users.map((items, i) => (
                    <div className="text-white font-semibold ">
                      {items.user}:{items.pin}
                    </div>
                  ))}
                </div>
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
