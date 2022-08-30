import React from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const SideBar = () => {
  return (
    <div className="controls">
      <div className="control" data-id="home">
        <a
          href="https://www.linkedin.com/in/liu-samuel/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white" }}
        >
          LinkedIn <FaLinkedin size={30} />
        </a>
      </div>
      <div className="control" data-id="about">
        <a
          href="https://github.com/samliudev"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white" }}
        >
          Github <FaGithub size={30} />
        </a>
      </div>
      <div className="control" data-id="portfolio">
        Email <HiOutlineMail size={30} />
      </div>
      <div className="control" data-id="blogs">
        Resume <BsFillPersonLinesFill size={30} />
      </div>
    </div>
  );
};
//
