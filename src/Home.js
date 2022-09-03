import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
	const [blogs, setBlogs] = useState(null)
	const [isPending, setIsPending] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		fetch('http://localhost:8000/blogs')
			.then(res => {
				console.log(res)
				if (!res.ok) {
					throw Error('could not fetch the data for that resource	')	
				}
				return res.json()
			})
			.then(data => {
				console.log(data)
				setBlogs(data)
				setIsPending(false)
				setError(null)
			})
			.catch(err => {
				setIsPending(false)
				setError(err.message)
			})
	}, [])

	return (
		<div className="home">
			{ error && <div>{ error }</div>}

			{ isPending && <div>Loading...</div> }

			{blogs && <BlogList blogs={blogs} title="All Blogs!" />}
			{blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'harold')} title="Harold Blogs!" />}

			{console.log(blogs)}
		</div>
	 );
}
 
export default Home;