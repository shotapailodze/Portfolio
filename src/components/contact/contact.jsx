import './contact.scss'
import location from '../../images/MiscImages/location.png'
import mail from '../../images/MiscImages/mail.png'

export const Contact = () => {
    return (
        <div className="contact">
            <h2>Contact</h2>
            <div className='contact-form'>
                <div className='location'>
                    <img src={location}></img>
                    <h3>Location</h3>
                    <p>Georgia, Tbilisi</p>
                </div>
                <div className='mail'>
                    <img src={mail} className='mailimg'></img>
                    <h3>Mail</h3>
                    <a href='mailto:shotapailodze1@gmail.com'><p>shotapailodze1@gmail.com</p></a>
                </div>
            </div>
        </div>
    )
}


export default Contact;