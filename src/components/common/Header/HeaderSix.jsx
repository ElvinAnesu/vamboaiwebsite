import { Link, NavLink, useLocation } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { debounce, handleScroll } from "./scrollUtils";
import { menuItems } from "../../../utils/menuItem";
import MyContext from "../../context/myContext";
const HeaderSix = () => {
	const location = useLocation();
	const headerRef = useRef(null);
  const {openMobileMenu,setOpenMobailmenu,toggleMobileMenu,openSubmenu,toggleSubmenu }=useContext(MyContext)
	useEffect(() => {
		const debouncedHandleScroll = debounce(handleScroll(headerRef), 100);
		window.addEventListener("scroll", debouncedHandleScroll);

		return () => {
			window.removeEventListener("scroll", debouncedHandleScroll);
		};
	}, []);
	return (
		<header className={`header header--1 header--fixed ${openMobileMenu?"menu-open":""}`}>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="menu d-lg-flex justify-content-lg-between align-items-lg-center py-3 py-lg-0">
            <div className="d-flex align-items-center justify-content-between">
              <Link href="index.html" className="logo link d-inline-flex align-items-center flex-shrink-0">
                <img src="/img/logo-light.png" alt="logo" className="img-fluid object-fit-contain"/>
              </Link>
              <button onClick={toggleMobileMenu} className="menu-toggle w-10 h-10 p-0 border-0 lh-1 bg-primary-50 clr-neutral-100 :clr-neutral-100 transition :bg-primary-300 rounded flex-shrink-0 d-lg-none order-sm-3 fs-24">
                <i className="bi bi-list"></i>
              </button>
            </div>
            <div className="menu-nav d-flex align-items-lg-center flex-column flex-lg-row flex-grow-1 gap-4 pb-4 pb-lg-0 rounded">
              <ul className="list list-lg-row mx-lg-auto">
              {menuItems.map((menuItem, index) => (
                                        <li key={index} className="menu-list">
                                            <NavLink
                                                onClick={() => toggleSubmenu(index)}
                                                  to={menuItem.submenuItems ? "#" : menuItem.link}
												  className={({ isActive }) =>
                                                    `link menu-link ${menuItem?.style} ${isActive && (menuItem.link === location.pathname || (menuItem.submenuItems && menuItem.submenuItems.some(subItem => subItem.link === location.pathname))) ? "active" : ""}`
                                                }
                                            >
                                                {menuItem.title}
                                            </NavLink>
                                            {menuItem.submenuItems && (
                                                <ul
                                                    className={`list menu-sub ${
                                                        openSubmenu === index ? "d-block" : ""
                                                    }`}
                                                >
                                                    {menuItem.submenuItems.map((subItem, subIndex) => (
                                                        <li onClick={() => setOpenMobailmenu(false)} key={subIndex} className="menu-sub-list">
                                                            <Link
                                                                to={subItem.link}
                                                                className="link menu-sub-link gap-3"
                                                                
                                                            >
                                                                <span className="d-none d-lg-inline-block">
                                                                    {
                                                                        subItem.icon && <img
                                                                        src={subItem.icon}
                                                                        alt="image"
                                                                        className="img-fluid"
                                                                    />
                                                                    }
                                                                </span>
                                                                {subItem.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
              </ul>
              <ul className="list list-lg-row gap-4 gap-lg-6">
                <li className="menu-list mx-4 mx-lg-0">
                  <Link to="/login" className="link d-inline-block py-3 px-4 ff-1 fs-14 fw-extrabold clr-white :clr-secondary-key"> Log In </Link>
                </li>
                <li className="menu-list mx-4 mx-lg-0">
                  <Link to="/register" className="link d-inline-block py-3 px-4 ff-1 fs-14 fw-extrabold clr-white bg-primary-50 :bg-primary-30 rounded"> Create Account </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
	);
};
export default HeaderSix;
