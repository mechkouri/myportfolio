import { Link } from "react-scroll";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight;

      // Calculate the scroll position relative to the total scrollable height
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

      // Adjust this value based on when you want the navbar to appear
      const thresholdPercentage = 96; // Change this value as needed

      setIsHidden(scrollPercentage >= thresholdPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50 ${isHidden ? "hidden" : "container mx-auto"}`}>
      <div className="w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] items-center mx-auto px-5 flex justify-between text-2xl text-white/50">
        <Link
          to="home"
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-200}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
        >
          <BiHomeAlt strokeWidth={0}  />
        </Link>
        <Link
          to="about"
          activeClass="active"
          smooth={true}
          spy={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
        >
          <BiUser />
        </Link>
        <Link
          to="services"
          activeClass="active"
          smooth={true}
          spy={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
        >
          <BsClipboardData strokeWidth={0}  />
        </Link>
        <Link
          to="works"
          activeClass="active"
          smooth={true}
          spy={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
        >
          <BsBriefcase strokeWidth={0} />
        </Link>
        <Link
          to="contact"
          activeClass="active"
          smooth={true}
          spy={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
        >
          <BsChatSquare strokeWidth={0} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
