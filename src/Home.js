import { useState } from "react";

const Home = () => {
	// let name = 'Harold'
	const [name, setName] = useState('Harold')
	const [age, setAge] = useState(25);

	const handleClick = () => {
		setName('Jeshua')
		setAge(27)
	}
	return ( 
		<div className="home">
			<h2>Homepage</h2>
			<p>{ name } is { age } years old</p>
			<button onClick={handleClick}>Click me</button>
		</div>
	 );
}
 
export default Home;