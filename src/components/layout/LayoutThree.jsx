import { Outlet } from "react-router-dom";
import HeaderThree from "../common/Header/HeaderThree";
import FooterThree from "../common/Footer/FooterThree";

const LayoutThree = () => {
	return (
		<div className="bgc-light">
			<HeaderThree />
			<Outlet />
			<FooterThree />
		</div>
	);
};
export default LayoutThree;
