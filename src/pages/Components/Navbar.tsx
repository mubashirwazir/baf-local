import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/stories">Stories</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/artists">Artists</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/history">History</Link>
        </li>
        <li>
          <Link href="/theme">Themes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
