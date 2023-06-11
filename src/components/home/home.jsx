import './home.scss'
import ProfilePic from '../../images/profilepic/profile.jpg'
import Html from '../../images/skillimgs/HTML5.png'
import Css from '../../images/skillimgs/css.png'
import Javascript from '../../images/skillimgs/js.png'
import Scss from '../../images/skillimgs/scss.png'
import ReactImg from '../../images/skillimgs/react.png'
import github from '../../images/skillimgs/github.png'
import linkedin from '../../images/MiscImages/linkedin.png'
import facebook from '../../images/MiscImages/fb.png'
import instagram from '../../images/MiscImages/ig.png'

export const Home = () => {
    return (
        <div className="main">
            <div className="content">
                <div className="descriptions">
                    <div className="descriptions-text">
                        <h1>Front-End Developer 👋</h1>
                        <p>
                            Hi, I'm Shota Pailodze. A passionate Front-End Developer based in Tbilisi, Georgia 📍
                        </p>
                        <a href='https://github.com/shotapailodze' target='_blank'><img src={github}></img></a>
                        <a href='https://www.linkedin.com/in/pailodze/' target='_blank'><img src={linkedin}></img></a>
                        <a href='https://www.facebook.com/pailodzesh/' target='_blank'><img src={facebook}></img></a>
                        <a href='https://www.instagram.com/pailodzee/' target='_blank'><img src={instagram}></img></a>
                    </div>

                    <div className='skills'>
                        <h2>Tech Skills |</h2>
                        <img src={Html}></img>
                        <img src={Css}></img>
                        <img src={Javascript}></img>
                        <img src={Scss}></img>
                        <img src={ReactImg}></img>
                    </div>

                </div>

                <div className="img-div">
                    <img src={ProfilePic}></img>
                </div>

            </div>
        </div>
    )
}

export default Home;