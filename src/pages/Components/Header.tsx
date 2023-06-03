import Navbar from "./Navbar";

const Header: React.FC = () => {
  return (
    <header className="border-b h-16 py-4">
      <div className="flex items-center justify-between mx-4">
        <h1 className="text-2xl">
          <span className="bg-blue-500 text-white font-bold px-2 py-1 rounded">
            Post Cards
          </span>{" "}
          from the siege
        </h1>

        <Navbar />
      </div>
    </header>
  );
};

export default Header;
