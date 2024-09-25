import { Link, NavLink, useLocation } from "react-router-dom";
import logoDark from "/img/logo-dark.png";
import vamboLogo from "/img/vambologo.png"
import { BsList } from "react-icons/bs";
import { menuItems } from "../../../utils/menuItem";
import { useContext, useEffect, useRef } from "react";
import { debounce, handleScroll } from "./scrollUtils";
import MyContext from "../../context/myContext";
const HeaderFive = () => {
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
		<header
			ref={headerRef}
			className={`header header--5 header--fixed py-lg-12 ${
				openMobileMenu ? "menu-open" : ""
			}`}
		>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<nav className="menu d-lg-flex justify-content-lg-between align-items-lg-center py-3 py-lg-0">
							<div className="d-flex align-items-center justify-content-between">
								<Link
									to="/"
									className="logo link d-inline-flex align-items-center flex-shrink-0"
								>
									<img src={vamboLogo} alt="logo" className="" height={50} />
								</Link>
								<button
									onClick={toggleMobileMenu}
									className="menu-toggle w-8 h-8 p-0 border-0 lh-1  :clr-neutral-100 transition :bg-primary-300 rounded flex-shrink-0 d-lg-none order-sm-3 fs-24"
									style={{ backgroundColor: "#AB1515" }}
								>
									<BsList />
								</button>
							</div>
							<div className="menu-nav d-flex align-items-lg-center flex-column flex-lg-row flex-grow-1 gap-4 pb-4 pb-lg-0 rounded">
								<ul className="list list-lg-row mx-lg-auto rounded-3">
									{menuItems.map((menuItem, index) => (
										<li key={index} className="menu-list">
											<NavLink
												onClick={() => toggleSubmenu(index)}
												to={menuItem.submenuItems ? "#" : menuItem.link}
												className={({ isActive }) =>
													`link menu-link ${menuItem?.style} ${
														isActive &&
														(menuItem.link === location.pathname ||
															(menuItem.submenuItems &&
																menuItem.submenuItems.some(
																	(subItem) =>
																		subItem.link === location.pathname
																)))
															? "active"
															: ""
													}`
												}
												style={{
													color:
														menuItem.link === location.pathname
															? "#AB1515"
															: "#737373",
												}}
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
														<li
															onClick={() => setOpenMobailmenu(false)}
															key={subIndex}
															className="menu-sub-list"
														>
															<Link
																to={subItem.link}
																className="link menu-sub-link gap-3"
															>
																<span className="d-none d-lg-inline-block">
																	{subItem.icon && (
																		<img
																			src={subItem.icon}
																			alt="image"
																			className="img-fluid"
																		/>
																	)}
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
								<ul className="list list-row gap-xl-6 gap-lg-4 bg-transparent align-items-center">
									<li className="menu-list mx-4 mx-lg-0">
										<Link
											to="https://app.vambo.ai"
											className="link d-inline-flex justify-content-center py-2 px-xl-5 px-4 fs-14 fw-bold text-center clr-primary-10 py-2 px-4 rounded-1 h5-btn-border-left bg-white-12"
											style={{
												border: "solid #AB1515",
												color: "#AB1515",
											}}
										>
											Log In
										</Link>
									</li>
									<li className="menu-list menu-list-border-none mx-4 mx-lg-0">
										<Link
											to="https://app.vambo.ai"
											className="link py-3 px-xl-5 px-4 bg-primary-10 :bg-primary-40 rounded-1 fs-14 fw-bold text-center clr-white"
											style={{ color: "#ffffff", backgroundColor: "#AB1515" }}
										>
											Get Started
										</Link>
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
export default HeaderFive;
