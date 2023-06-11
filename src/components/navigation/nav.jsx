import { Link } from "react-scroll";
import './nav.scss'



export const Nav = () => {
    return (
        <header>
            <h2 className="title">Pailodze.dev</h2>
            <nav>
                <ul>
                    <li>
                        <Link activeClass="active" smooth spy to="main">
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="about">
                        About
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="projects">
                        Projects
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" smooth spy to="contact">
                        Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


export default Nav;