import React from "react";

const Buttons: React.FC = () => {
  const handleButtonClick = (path: string) => {
    window.location.href = path;
  };

  return (
    <div className="flex space-x-4">
      <button className="btn-62" onClick={() => handleButtonClick("/theme")}>
        <span>Theme</span>
      </button>
      <button className="btn-62" onClick={() => handleButtonClick("/stories")}>
        <span>Stories</span>
      </button>
      <button className="btn-62" onClick={() => handleButtonClick("/artists")}>
        <span>Artists</span>
      </button>
    </div>
  );
};

export default Buttons;
