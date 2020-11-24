import { motion } from "framer";
import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CopyButton } from "./theme";

const CopyToClipboardComponent = ({ text }) => {
  const copiedText = (
    <motion.h1
      initial={{ x: -10 }}
      animate={{ x: 0 }}
      className="px-4 py-2 mt-7 ml-20 bg-black absolute text-white rounded-lg"
    >
      Copied!
    </motion.h1>
  );
  const [isCopied, setIsCopied] = useState(false);

  function handleClick() {
    setIsCopied((prev) => !prev);
    setTimeout(() => {
      setIsCopied((prev) => !prev);
    }, 1000);
  }

  return (
    <div>
      <CopyToClipboard text={text}>
        <CopyButton onClick={handleClick} />
      </CopyToClipboard>

      {isCopied && copiedText}
    </div>
  );
};

export default CopyToClipboardComponent;
