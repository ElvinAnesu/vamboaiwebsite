import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements,BrowserRouter,Routes } from "react-router-dom";
import LayoutOne from "./components/layout/LayoutOne";
import LayoutTwo from "./components/layout/LayoutTwo";
import LayoutThree from "./components/layout/LayoutThree";
import LayoutFour from "./components/layout/LayoutFour";
import LayoutFive from "./components/layout/LayoutFive";
import Home from "./pages/Home/Home";
import HomeSass from "./pages/Home/HomeSass";
import BlogOne from "./pages/Blog/BlogOne";
import BlogTwo from "./pages/Blog/BlogTwo";
import HomeChat from "./pages/Home/HomeChat";
import HomeContentCreator from "./pages/Home/HomeContentCreator";
import HomeVoiceCreator from "./pages/Home/HomeVoiceCreator";
import HomeVideoCreator from "./pages/Home/HomeVideoCreator";
import LayoutSix from "./components/layout/LayoutSix";
import HomeWritebot from "./pages/Home/HomeWritebot";
import LayoutSeven from "./components/layout/LayoutSeven";
import CommonLayout from "./components/layout/CommonLayout";
import Pricing from "./pages/Pricing/Pricing";
import BlogDetails from "./pages/Blog/BlogDetails";
import Featured from "./pages/Featured/Featured";
import About from "./pages/About/About";
import UseCases from "./pages/UseCases/UseCases";
import Copywrite from "./pages/Copywrite/Copywrite";
import Faq from "./pages/Faq/Faq";
import ScrollToTop from "./components/common/scrollToTop/ScrollToTop";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsService from "./pages/TermsService/TermsService";



const AppRoutes = ({ setOpenMobailmenu, openMobileMenu }) => (
	<BrowserRouter>
		<ScrollToTop />
		<Routes>
			<Route
				path="/"
				element={
					<LayoutFive
						setOpenMobailmenu={setOpenMobailmenu}
						openMobileMenu={openMobileMenu}
					/>
				}
			>
				<Route path="" element={<HomeVoiceCreator />} />
			</Route>
			<Route path="/" element={<LayoutTwo />}>
				<Route path="/home-saas" element={<HomeSass />} />
			</Route>
			<Route path="/" element={<LayoutThree />}>
				<Route path="/home-chat" element={<HomeChat />} />
			</Route>
			<Route path="/" element={<LayoutFour />}>
				<Route path="/home-content-creator" element={<HomeContentCreator />} />
			</Route>
			<Route path="/" element={<LayoutFive />}>
				<Route path="" element={<HomeVoiceCreator />} />
				<Route path="/about" element={<About />} />
				<Route path="/faq" element={<Faq />} />
				<Route path="/pricing" element={<Pricing />} />
				<Route path="/use-cases" element={<UseCases />} />
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
			</Route>
			<Route path="/" element={<LayoutSix />}>
				<Route path="/home-video-creator" element={<HomeVideoCreator />} />
			</Route>
			<Route path="/" element={<LayoutSeven />}>
				<Route path="/home-writebot" element={<HomeWritebot />} />
			</Route>
			<Route path="/" element={<CommonLayout />}>
				<Route path="/featured" element={<Featured />} />
				<Route path="/copywrite" element={<Copywrite />} />

				<Route path="/terms-service" element={<TermsService />} />
				<Route path="/blog-1" element={<BlogOne />} />
				<Route path="/blog-2" element={<BlogTwo />} />
				<Route path="/blog-details" element={<BlogDetails />} />
			</Route>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Routes>
	</BrowserRouter>
);
  
  export default AppRoutes;