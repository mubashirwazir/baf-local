import Navbar from "./Navbar";

const Header: React.FC = () => {
  // const text = "Post Cards from the siege";
  // const words = text.split(" ");
  return (
    <header>
      <div>
        <h1 className="text-4xl">
          <span className="text-blue-500 font-bold">Post Cards</span> from the
          siege
        </h1>
      </div>
      <div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
