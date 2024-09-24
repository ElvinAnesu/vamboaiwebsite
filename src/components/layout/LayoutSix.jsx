import { Outlet } from "react-router-dom";
import HeaderSix from "../common/Header/HeaderSix";
import FooterSix from "../common/Footer/FooterSix";


const LayoutSix = () => {
	return (
		<div className="bg-black">
			<HeaderSix />
			<Outlet />
			<FooterSix />
		</div>
	);
};
export default LayoutSix;
