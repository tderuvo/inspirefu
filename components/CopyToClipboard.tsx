// remove tailwind css classes if you don't want to use them.
import React, { useState } from "react";

export default function CopyBtnDemo({
  textToCopy = "How high you fly is derived from how big you think",
}) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        setCopied(true);
        // changing back to default state after 2 seconds.
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      },
      (err) => {
        console.log("failed to copy", err.message);
      }
    );
  };

  const btnStyle = copied ? "bg-gray-500 text-white" : "";

  return (
    <div className="text-center py-100 my-5 z-40">
      <button
        onClick={copyToClipboard}
        className={
          btnStyle +
          " text-sm border w-36 border-gray-500 rounded p-2 transition"
        }
      >
        {copied ? "Copied" : "Copy to clipboard"}
      </button>
    </div>
  );
}
