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
              className={` ${
                router.pathname === "/stories"
                  ? "text-black text-lg font-bold"
                  : ""
              }text-white font-bold`}
            >
              Stories{" "}
            </span>
          </Link>
        </li>

        <li>
          <Link href="/artists" passHref>
            <span
              className={` ${
                router.pathname === "/artists"
                  ? "text-black text-lg  font-bold"
                  : ""
              } font-bold text-white`}
            >
              Artists{" "}
            </span>
          </Link>
        </li>
        <li>
          <Link href="/gallery" passHref>
            <span
              className={` ${
                router.pathname === "/gallery"
                  ? "text-black text-lg  font-bold"
                  : ""
              } font-bold text-white`}
            >
              Gallery{" "}
            </span>
          </Link>
        </li>

        <li>
          <Link href="/history" passHref>
            <span
              className={` ${
                router.pathname === "/history"
                  ? "text-black text-lg  font-bold"
                  : ""
              } font-bold text-white`}
            >
              History{""}
            </span>
          </Link>
        </li>

        <li>
          <Link href="/theme" passHref>
            <span
              className={` ${
                router.pathname === "/theme"
                  ? "text-black text-lg  font-bold"
                  : ""
              } font-bold text-white`}
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
