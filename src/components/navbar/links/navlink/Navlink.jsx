import Link from "next/link";

const Navlink = ({ item, handleClick }) => {
  return (
    <Link
      href={item.path}
      onClick={handleClick}
      className="px-3 py-2 hover:bg-[#27A5EF] hover:text-black md:hover:bg-[#27A5EF] md:hover:text-white"
    >
      {item.title}
    </Link>
  );
};

export default Navlink;
