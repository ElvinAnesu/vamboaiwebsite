import { Outlet } from "react-router-dom";
import HeaderOne from "../common/Header/HeaderOne";
import FooterOne from "../common/Footer/FooterOne";
import { useContext } from "react";
import MyContext from "../context/myContext";

const LayoutOne = () => {
	const {openMobileMenu}=useContext(MyContext)
	return (
		<>
			<div className={`bg-black ${openMobileMenu?"menu-open":""}`}>
				<HeaderOne  />
				<Outlet />
				<FooterOne />
			</div>
		</>
	);
};

export default LayoutOne;
