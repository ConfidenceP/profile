import React, {Component} from 'react';

export default class About extends Component {
    render() {
        return (
            <div>
                <div className='card blue lighten-5'>
                    <div className='card-content'>
                        <h6 className='mt-bottom'>
                            <strong>ABOUT ME</strong>
                        </h6>
                        <p>
                            Confidence is a Software Developer with interest biased towards Java and it's related technologies. Of
                            recent, I started exploring ReactJs and I am falling in love with the framework. I still
                            have a special place in my heart for Digital Marketing technologies. Sometimes I create and
                            manage WordPress sites and social media pages for amazing people. I also love chess, music
                            and coffee.
                        </p>
                    </div>
                    <div className='card-action'>
                        <h6>
                            <strong>PERSONAL INFO</strong>
                        </h6>
                        <div className='row mt'>
                            <div className='col s12 m6 l6 xl6'>
                                <p>
                                    <strong>Full Name:</strong> Confidence Paidamoyo Mukwindidza
                                </p>
                                <p>
                                    <strong>Email:</strong> mukwindidzacp@gmail.com
                                </p>
                                <p>
                                    <strong>Phone:</strong> 074 867 8735
                                </p>
                            </div>
                            <div className='col s12 m6 l6 xl6'>
                                <p>
                                    <strong>Location:</strong> Krugersdorp, Gauteng, South Africa
                                </p>
                                <p>
                                    <strong>Availability:</strong> Immediate
                                </p>
                                <p>
                                    <strong>Relocate:</strong> Yes
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}