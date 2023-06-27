import Navbar from "./Navbar";

const Header: React.FC = () => {
  return (
    <header className=" h-16 py-4">
      <div className="flex items-center justify-between mx-4">
        <h1 className="text-2xl ">
          <span className="font-bold text-3xl text-white px-2 py-1  font-serif">
            Post Cards from the siege
          </span>{" "}
        </h1>

        <Navbar />
      </div>
    </header>
  );
};

export default Header;
