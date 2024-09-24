import { Outlet } from "react-router-dom";
import HeaderFour from "../common/Header/HeaderFour";
import FooterFour from "../common/Footer/FooterFour";

const LayoutFour = () => {
	return (
		<div className="bg-black">
			<HeaderFour />
			<Outlet />
			<FooterFour />
		</div>
	);
};
export default LayoutFour;
