import { Outlet } from "react-router-dom";
import HeaderTwo from "../common/Header/HeaderTwo";
import FooterTwo from "../common/Footer/FooterTwo";

const LayoutTwo = () => {
	return (
		<div className="bg-black">
			<HeaderTwo />
			<Outlet />
			<FooterTwo />
		</div>
	);
};
export default LayoutTwo;
