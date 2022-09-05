import { Link } from "react-router-dom";
import NotFoundImage from "./media/404.svg"

const NotFound = () => {
	return ( 
		<div className="not-found">

			<img src={NotFoundImage} alt="404" width={256}/>
			<h2>Sorry</h2>
			<p>The page doesn't exist!</p>
			<Link to="/">
				Back to Home
			</Link>
		</div>
	 );
}
 
export default NotFound;