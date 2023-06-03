import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex items-center justify-end">
      <ul className="flex space-x-4">
        <li>
          <Link href="/stories" passHref>
            <span
              className={`text-white ${
                router.pathname === "/stories" ? "text-blue-600 font-bold" : ""
              }`}
            >
              Stories{" "}
            </span>
          </Link>
        </li>

        <li>
          <Link href="/artists" passHref>
            <span
              className={`text-white ${
                router.pathname === "/artists" ? "text-blue-600 font-bold" : ""
              }`}
            >
              Artists{" "}
            </span>
          </Link>
        </li>
        <li>
          <Link href="/gallery" passHref>
            <span
              className={`text-white ${
                router.pathname === "/gallery" ? "text-blue-600 font-bold" : ""
              }`}
            >
              Gallery{" "}
            </span>
          </Link>
        </li>

        <li>
          <Link href="/history" passHref>
            <span
              className={`text-white ${
                router.pathname === "/history" ? "text-blue-600 font-bold" : ""
              }`}
            >
              History{""}
            </span>
          </Link>
        </li>

        <li>
          <Link href="/theme" passHref>
            <span
              className={`text-white ${
                router.pathname === "/theme" ? "text-blue-600 font-bold" : ""
              }`}
            >
              Themes{""}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
