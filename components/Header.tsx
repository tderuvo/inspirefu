import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <div>
      <div className="bg-[rgb(39,39,39)]">
        <h1 className="uppercase  py-5 text-center text-white max-w-7xl text-2xl tracking-widest">
          InspireFu
        </h1>
      </div>
    </div>
  );
}
