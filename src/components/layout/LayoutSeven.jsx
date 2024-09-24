import { Outlet } from "react-router-dom";
import HeaderSeven from "../common/Header/HeaderSeven";
import FooterSeven from "../common/Footer/FooterSeven";



const LayoutSeven = () => {
	return (
		<div className="bg-black">
			<HeaderSeven/>
			<Outlet />
			<FooterSeven/>
			
		</div>
	);
};
export default LayoutSeven;
