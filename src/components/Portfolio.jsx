import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import usestate from "../assets/portfolio/usestate.jpg";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      href: "https://stackoverflow.com/questions/503093/how-do-i-redirect-to-another-webpage",
      code: "https://github.com/karanj08",
    },
    {
      id: 2,
      src: installNode,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactParallax,
    },
    {
      id: 5,
      src: reactSmooth,
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
              <div className="flex items-center justify-center">
                <a
                  className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-300"
                  onClick={(portfolio) => demosite}
                  href={portfolio.href}
                  target="_blank"
                  rel="nonreferrer"
                >
                  Demo
                </a>
                <a
                  className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-300"
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
