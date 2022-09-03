import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
	const [blogs, setBlogs] = useState([
		{ title: "My new blog", body: "lorem ipsum...", author: "harold", id: 1 },
		{ title: "Welcome blog", body: "lorem ipsum...", author: "jeshua", id: 2 },
		{ title: "Web dev tips", body: "lorem ipsum...", author: "edrav", id: 3 }
	])

	return (
		<div className="home">
			<BlogList blogs={blogs} title="All Blogs!" />
		</div>
	 );
}
 
export default Home;