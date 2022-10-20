import React from "react";
import CopyBtnDemo from "./CopyToClipboard";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Either you run the day or the day runs you"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-0 items-center justify-center">
      {/* Background Circles */}
      <BackgroundCircle />
      {/* Typewriter Effect */}
      <h1 className=" text-2xl lg:text-6xl font-semibold px-10 text-white">
        <span className="mr-3">{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
      {/* Copy to Clipboard */}
      <CopyBtnDemo />
    </div>
  );
}
