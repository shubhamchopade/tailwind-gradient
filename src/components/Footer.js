import React from "react";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="m-8 flex justify-center text-center">
      <a target="_blank" href="https://instagram.com/tech.sapien">
        <FaInstagram
          size={30}
          className="text-gray-700 hover:text-gray-900 cursor-pointer"
        />
      </a>
    </div>
  );
};

export default Footer;
