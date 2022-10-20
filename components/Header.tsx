import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="uppercase  py-5 text-center text-white max-w-7xl text-2xl tracking-widest">
      <div>
        <h1>InspireFu</h1>
      </div>
    </header>
  );
}
