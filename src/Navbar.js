const Navbar = () => {
	return ( 
		<nav className="navbar">
			<h1><a className="site-name" href="/">The Harv Blog</a></h1>
			<div className="links">
				<a href="/">Home</a>
				<a href="/create" style={{
					color: "white",
					backgroundColor: "#f1356d",
					borderRadius: "8px"
				}}>New Blog</a>
			</div>
		</nav>
	 );
}
 
export default Navbar;