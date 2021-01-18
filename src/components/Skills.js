import React, {Component} from 'react';
export default class Skills extends Component {

    render() {
        return (
            <div>
                <div className='card blue lighten-5'>
                    <div className='card-content'>
                        <h6>
                            <strong>PROFESSIONAL SKILLS</strong>
                        </h6>
                        <div className='row mt-top'>
                            <div className='col s6'>
                                <p>Java</p>
                                <div className='progress grey lighten-1'>
                                    <div className='determinate blue lighten-1' style={{ width: '90%'}}></div>
                                </div>
                            </div>
                            <div className='col s6'>
                                <p>Spring Boot</p>
                                <div className='progress grey lighten-1'>
                                    <div className='determinate blue lighten-1' style={{ width: '85%'}}></div>
                                </div>
                            </div>
                            <div className='col s6'>
                                <p>JBoss - WildFly</p>
                                <div className='progress grey lighten-1'>
                                    <div className='determinate blue lighten-1' style={{ width: '85%'}}></div>
                                </div>
                            </div>
                            <div className='col s6'>
                                <p>Docker</p>
                                <div className='progress grey lighten-1'>
                                    <div className='determinate blue lighten-1' style={{ width: '85%'}}></div>
                                </div>
                            </div>
                            <div className='col s6'>
                                <p>Maven</p>
                                <div className='progress grey lighten-1'>
                                    <div className='determinate blue lighten-1' style={{ width: '88%'}}></div>
                                </div>
                            </div>
                            <div className='col s6'>
                                <p>Gradle</p>
                                <div className='progress grey lighten-1'>
                                    <div className='determinate blue lighten-1' style={{ width: '78%'}}></div>
                                </div>
                            </div>
                            <div className='col s6'>
                                <p>PrimeFaces</p>
                                <div className='progress grey lighten-1'>
                                    <div className='determinate blue lighten-1' style={{ width: '85%'}}></div>
                                </div>
                            </div>
                            <div className='col s6'>
                                <p>React</p>
                                <div className='progress grey lighten-1'>
                                    <div className='determinate blue lighten-1' style={{ width: '78%'}}></div>
                                </div>
                            </div>
                            <div className='col s6'>
                                <p>VueJs</p>
                                <div className='progress grey lighten-1'>
                                    <div className='determinate blue lighten-1' style={{ width: '78%'}}></div>
                                </div>
                            </div>
                            <div className='col s6'>
                                <p>PostgreSQL</p>
                                <div className='progress grey lighten-1'>
                                    <div className='determinate blue lighten-1' style={{ width: '85%'}}></div>
                                </div>
                            </div>
                            <div className='col s6'>
                                <p>Microsoft SQL Server</p>
                                <div className='progress grey lighten-1'>
                                    <div className='determinate blue lighten-1' style={{ width: '85%'}}></div>
                                </div>
                            </div>
                            <div className='col s6'>
                                <p>Jira</p>
                                <div className='progress grey lighten-1'>
                                    <div className='determinate blue lighten-1' style={{ width: '94%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}