import { Outlet } from "react-router-dom";
import HeaderFive from "../common/Header/HeaderFive";
import FooterFive from "../common/Footer/FooterFive";

const LayoutFive = () => {
	return (
		<div className="bgc-light">
			<HeaderFive />
			<Outlet />
			<FooterFive />
		</div>
	);
};
export default LayoutFive;
