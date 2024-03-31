import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../assets/Karan-jain-Resume.pdf";

function SocialLinks() {
  const sociallinks = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/karan-jain-97184725a/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/karanj08",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:karanjaink8899@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: resume,
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="flex flex-col top-[35%] left-0 fixed opacity-70 lg:opacity-100 hover:opacity-100">
      <ul>
        {sociallinks.map((sociallink) => (
          <li
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300 bg-gray-500 ${sociallink.style}`}
            key={sociallink.id}
          >
            <a
              href={sociallink.href}
              className="flex justify-between items-center w-full text-white"
              download={sociallink.download}
              target="_blank"
              rel="nonreferrer"
            >
              {sociallink.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
