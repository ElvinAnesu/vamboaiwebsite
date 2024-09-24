import Breadcrumb from "@components/blog/common/Breadcrumb";
import PerformingSeo from "../../components/blog/blogOne/performingSeo/PerformingSeo";
import InsightResource from "../../components/blog/blogOne/insightResource/InsightResource";
import PopularPost from "../../components/blog/blogOne/popularPost/PopularPost";
import Cta from "../../components/common/cta/Cta";


const BlogOne = () => {
	return (
		<>
		<Breadcrumb name="Blog Listing" title="Blog Listing"/>
		<PerformingSeo/>
		<InsightResource/>
		<PopularPost/>
		<Cta/>
		</>
	);
};
export default BlogOne;
