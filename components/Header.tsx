import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <motion.div
      initial={{
        x: -100,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-row text-center bg-gray-500"
    >
      <div className="justify-center items-center">
        <h1 className="uppercase px-5 py-5 flex-center text-center justify-center text-white max-w-7xl items-center text-2xl tracking-widest">
          InspireFu
        </h1>
      </div>
    </motion.div>
  );
}
