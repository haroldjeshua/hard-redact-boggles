import { Link } from 'react-router-dom';
 
const Navbar = () => {
	return ( 
		<nav className="navbar">
			<h1><a className="site-name" href="/">The Harv Blog</a></h1>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/create" style={{
					color: "white",
					backgroundColor: "#6627b9",
					borderRadius: "8px"
				}}>New Blog</Link> 
			</div>
		</nav>
	 );
}
 
export default Navbar;