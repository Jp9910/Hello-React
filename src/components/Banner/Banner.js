import "./Banner.css"

function Banner() {
    return (
        // Looks like HTML, but it isn't. 
        // This is JSX, which is how React reads these components and turn them into elements of the DOM
        <header className="banner">
            <img src="images/eldenring.jpg" alt="Main Banner"/>
        </header>
    )
}

export default Banner