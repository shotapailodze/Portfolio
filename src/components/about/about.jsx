import './about.scss'
import image from '../../images/skillimgs/aboutmeimg.jpg'

export const About = () => {
    return (
        <div className="about">
            <div className='image-div'>
                <img src={image}></img>
            </div>
            <div className='text-div'>
                <h3>ABOUT ME</h3>
                <h1>A dedicated Front-End Developer</h1>
                <p>Highly motivated and talented junior front-end developer with a strong passion for web development and a solid foundation in HTML, CSS, and JavaScript. Eager to kick-start my career and contribute to dynamic projects while continually expanding my skill set. Though I may not have prior professional experience, I possess a deep understanding of modern web technologies and have completed several personal projects that showcase my abilities. With a keen eye for detail and a commitment to delivering exceptional user experiences, I am ready to collaborate with teams and contribute to creating impactful websites and applications. Seeking an opportunity to learn and grow in a supportive and challenging environment that fosters creativity and innovation.</p>
            </div>
        </div>
    )
}

export default About;