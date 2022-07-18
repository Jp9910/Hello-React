import './Footer.css'

const Footer = () => {
    // target="_blank" Opens the linked document in a new window or tab (https://www.w3schools.com/tags/att_a_target.asp)
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                            <img src="images/fb.png" alt="facebook"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                            <img src="images/tw.png" alt="twitter"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                            <img src="images/ig.png" alt="instagram"/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="images/logo.png" alt="Organo logo"/>
            </section>
            <section>
                <p>Desenvolvido por JP</p>
                <ul>
                    <li>
                        <a href="https://www.github.com/jp9910" target="_blank" rel="noreferrer">
                            <img src="images/github.png" alt="GitHub logo"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/joao-paulo-secundo/" target="_blank" rel="noreferrer">
                            <img src="images/linkedin.png" alt="Linkedin Logo"/>
                        </a>
                    </li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer