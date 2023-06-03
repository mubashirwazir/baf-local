import React from "react";
import Link from "next/link";

const Buttons: React.FC = () => {
  const handleButtonClick = (path: string) => {
    window.location.href = path;
  };

  return (
    <div className="flex space-x-4">
      <button
        className="bg-gray-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleButtonClick("/theme")}
      >
        Theme
      </button>
      <button
        className="bg-gray-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleButtonClick("/stories")}
      >
        Stories
      </button>
      <button
        className="bg-gray-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleButtonClick("/artists")}
      >
        Artists
      </button>
    </div>
  );
};

export default Buttons;
