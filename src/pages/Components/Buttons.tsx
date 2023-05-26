import React from "react";
import Link from "next/link";

const Buttons: React.FC = () => {
  const handleButtonClick = (path: string) => {
    window.location.href = path;
  };

  return (
    <div>
      <button onClick={() => handleButtonClick("/theme")}>Theme</button>
      <button onClick={() => handleButtonClick("/stories")}>Stories</button>
      <button onClick={() => handleButtonClick("/artists")}>Artists</button>
    </div>
  );
};

export default Buttons;
