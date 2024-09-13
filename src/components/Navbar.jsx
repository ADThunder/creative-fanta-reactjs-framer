import { MdMenu } from "react-icons/md";
import Logo from "../assets/logo.png";
import { FaRegUser } from "react-icons/fa";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "Categories",
    link: "#",
  },
  {
    id: 3,
    title: "Blog",
    link: "#",
  },
  {
    id: 4,
    title: "About",
    link: "#",
  },
  {
    id: 5,
    title: "Contact",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <div className=" text-white py-8">
      <div className="container flex justify-between items-center">
        {/* logo section */}
        <div>
          <img src={Logo} alt="logo" className="max-w-[100px] invert" />
        </div>
        {/* menu section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 relative z-40">
            {NavbarMenu.map((item) => (
              <li
                key={item.link}
                className="inline-block text-base font-semibold py-2 px-3 uppercase"
              >
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
            <button className="text-xl ps-14">
              <FaRegUser />
            </button>
          </ul>
        </div>
        {/* hamburger icon */}
        <div className="md:hidden">
          <MdMenu className="text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;