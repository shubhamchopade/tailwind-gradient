import { motion } from "framer";
import React from "react";

export const About = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="max-w-md mx-auto mt-32 px-2"
    >
      <h1 className="text-2xl">Welcome 😉</h1>
      <p className="text-xl">
        A very simple tool for developers using Gradients in TailwindCSS. These
        colors are for{" "}
        <a className="underline" href="https://tailwindcss.com/docs">
          Tailwind CSS v2.0.2
        </a>
        . Hope this helps ❤{" "}
      </p>
    </motion.div>
  );
};
