import './projects.scss'
import github from '../../images/skillimgs/github.png'

export const Projects = () => {

    const projectsList = [
        {
            title: 'Crown Clothing',
            imgSrc: 'https://user-images.githubusercontent.com/55694002/241297257-ef274a90-dab4-4c18-bb0b-4a1c85fcb318.png',
            gitRepo: 'https://github.com/shotapailodze/crown-clothing',
            isAvailable: true,
        },
        {
            title: 'Robo Friends',
            imgSrc: 'https://i.imgur.com/Vt3IMIJ.png',
            gitRepo: 'https://github.com/shotapailodze/robo-friends',
        },
        {
            title: 'Calculator',
            imgSrc: 'https://imgur.com/GkNpssF.png',
            gitRepo: 'https://github.com/shotapailodze/calculator',
        },
        {
            title: 'Book Keeper',
            imgSrc: 'https://i.imgur.com/AiWY3v8.png',
            gitRepo: 'https://github.com/shotapailodze/Book-keeper',
        },
        {
            title: 'Custom Countdown',
            imgSrc: 'https://user-images.githubusercontent.com/55694002/237374947-ca69165a-76ee-4e66-bd63-9c24bc33ce53.png',
            gitRepo: 'https://github.com/shotapailodze/Custom-Countdown',
        },
        {
            title: 'Paint Clone',
            imgSrc: 'https://user-images.githubusercontent.com/55694002/238906239-d76465f5-1025-47bd-aa4e-6ff75e4ea2a9.png',
            gitRepo: 'https://github.com/shotapailodze/paint-clone',
        },
        {
            title: 'Pong',
            imgSrc: 'https://i.imgur.com/WvmSGay.png',
            gitRepo: 'https://github.com/shotapailodze/Pong',
        },
        {
            title: 'Light & Dark Mode',
            imgSrc: 'https://user-images.githubusercontent.com/55694002/237078058-9188d4a5-5fa2-4c0a-b584-6401815b15ff.gif',
            gitRepo: 'https://github.com/shotapailodze/light-dark-mode',
        },
        {
            title: 'Music Player',
            imgSrc: 'https://i.imgur.com/kY4UB70.png',
            gitRepo: 'https://github.com/shotapailodze/Music-Player',
        }
    ]

    return (
        <div className="projects">
            <h2>My Projects</h2>
            <div className="grid-container">
                {
                    projectsList && projectsList.map((element,index) => {
                        return (
                            <div className="grid-item">

                                <div className="imagePlaceholder" style={
                                    {
                                        backgroundImage: `url(${element.imgSrc})`
                                        
                                    }
                                }>
                                </div>

                                <h2> { element.title } </h2>

                                <a href={element.gitRepo} target='_blank'>
                                    <img src={github} className='logo'></img>
                                </a>

                                {
                                    element.isAvailable && (
                                        <a href='https://reactshopify-carts.netlify.app' target='_blank'>View Website</a>
                                    )
                                }

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects;