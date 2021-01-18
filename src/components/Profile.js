import React, {Component} from 'react';
import ImgProfile from '../images/confidence.jpg'
import {HashLink as Link} from "react-router-hash-link";

class Profile extends Component {
    render() {
        return (
            <div>
                <div className='card blue lighten-5'>
                    <div className='card-image'>
                        <img className='activator' src={ImgProfile} alt='Confidence Mukwindidza'/>
                        <Link className='btn-floating halfway-fab waves-effect waves-light blue lighten-1'>
                            <i className='material-icons activator'>more_vert</i>
                        </Link>
                    </div>
                    <div className='card-content'>
                        <span className='card-title activator grey-text text-darken-4'>
                            Java Developer
                        </span>
                        <p>Oracle Certified Associate | Java SE8</p>
                    </div>
                    <div className='card-reveal'>
                        <span className='card-title grey-text text-darken-4'>
                            Follow Me
                            <i className='material-icons right'>close</i>
                        </span>
                        <p className='flex-container'>
                            <td onClick={()=> window.open('https://www.facebook.com/mukwindidzacp/')}>
                                <i className='fab fa-facebook-f grey-text text-darken-4 social-style'></i>
                            </td>
                            <td onClick={()=> window.open('https://twitter.com/Mukwindidzacp')}>
                                <i className='fab fa-twitter grey-text text-darken-4 social-style'></i>
                            </td>
                            <td onClick={()=> window.open('https://www.instagram.com/confidencep_m/')}>
                                <i className='fab fa-instagram grey-text text-darken-4 social-style'></i>
                            </td>
                            <td onClick={()=> window.open('https://github.com/ConfidenceP/')}>
                                <i className='fab fa-github grey-text text-darken-4 social-style'></i>
                            </td>
                            <td onClick={()=> window.open('https://www.linkedin.com/in/confidence-mukwindidza-93b59847/')}>
                                <i className='fab fa-linkedin grey-text text-darken-4 social-style'></i>
                            </td>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;