import {
  FunctionComponent,
  useEffect,
  useState,
  createContext,
  useContext,
} from "react";
import KonoLogo from "../UI/SVG/KonoLogo";
import { Link } from "react-router-dom";
import { menu } from "../../utils/constants";
import { AppContext, IAppContext } from "../Context/AppContext";

const Navbar: FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState<number>(0);
  const [navVisiable, setNavVisiable] = useState<boolean>(true);
  const [scrollTop, setScrollTop] = useState<number>(0);
  const { setGlobalProperty } = useContext<IAppContext>(AppContext);

  const handleScroll = () => {
    setScrolled((prev: number) => {
      if (prev >= window.scrollY) {
        const top = prev - window.scrollY;
        !window.scrollY && setNavVisiable(true);
        setNavVisiable(true);
        setScrollTop((prev: number) => {
          prev > 300 && window.scrollY
            ? setNavVisiable(false)
            : setNavVisiable(true);
          return prev + top;
        });
      } else {
        setNavVisiable(false);
        setScrollTop(0);
      }
      return window.scrollY;
    });
  };

  const handleOpenMenu = () => {
    setMenuOpen(!menuOpen);
    setGlobalProperty(!menuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`def-case-shadow bg-[#2e2e2e] tr-2 fixed top-0 left-0 w-full ${
        navVisiable ? "top-0" : "top-[-100px]"
      }`}
    >
      <div className="def-container text-[#fff]">
        <div className="relative flex items-center justify-between flex-wrap">
          <Link to="/" className="ml-3">
            <KonoLogo />
          </Link>
          <div
            // menuOpen
            className={`
            md:relative absolute top-[70px] md:h-auto h-[calc(100vh_-_70px)] tr-2 py-7 px-3 md:w-auto w-full md:bg-transparent bg-[#272727]
            ${menuOpen ? "left-0 opacity-1" : "left-[-100%] opacity-0"}
            `}
          >
            <ul className="flex items-center gap-9">
              {menu.map((item: IMenuItem, index: number) => (
                <li key={index} className="md:w-max w-full">
                  <Link className="nav-link" to={item.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="burger relative w-9 h-4 mr-3 cursor-pointer md:hidden block"
            onClick={handleOpenMenu}
          >
            <div className="w-full absolute h-[2px] top-[50%] l-0 translate-y-[-50%] bg-[#0080ff]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
