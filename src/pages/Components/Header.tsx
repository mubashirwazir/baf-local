import Navbar from "./Navbar";

const Header: React.FC = () => {
  const text = "Post Cards from the siege";
  const words = text.split(" ");
  return (
    <header>
      <div className="header-left">
        <h1>
          <span className="highlight">
            {words[0]} {words[1]}
          </span>{" "}
          {words.slice(2).join(" ")}
        </h1>
      </div>
      <div className="header-right">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
