import Link from "next/link";

const Navlink = ({ item, handleClick }) => {
  return (
    <Link
      href={item.path}
      onClick={handleClick}
      className="px-3 py-3 hover:bg-white hover:text-black md:hover:bg-black md:hover:text-white"
    >
      {item.title}
    </Link>
  );
};

export default Navlink;
