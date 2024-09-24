import { Outlet } from "react-router-dom";
import CommonFooter from "../common/Footer/CommonFooter";
import CommonHeader from "../common/Header/CommonHeader";




const CommonLayout = () => {
	return (
		<div className="bg-black ">
			<CommonHeader/>
			<Outlet />
			<CommonFooter/>
			
		</div>
	);
};
export default CommonLayout;
