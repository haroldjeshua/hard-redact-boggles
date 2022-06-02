const Home = () => {
    let name = 'Harold'

    const handleClick = (e) => {
        console.log('Hello, jeshuas', e);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name }</p>
            <button onClick={handleClick}>Click me</button>.
        </div>
     );
}
 
export default Home;