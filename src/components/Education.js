import React, {Component} from 'react';

class Education extends Component {
    render() {
        return (
            <div>
                <div className='card blue lighten-5'>
                    <div className='card-content'>
                        <h6>
                            <strong>EDUCATION</strong>
                        </h6>
                        <table className='striped'>
                            <thead>
                                <tr>
                                    <th>Certificate</th>
                                    <th>Institution</th>
                                    <th>Period</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Oracle Certified Associate - Java SE8 Programmer</td>
                                    <td>Oracle</td>
                                    <td>Oct 2020 </td>
                                </tr>
                                <tr>
                                    <td>Higher Certificate in Software Engineering (NQF5)</td>
                                    <td>WeThinkCode</td>
                                    <td>Jun 2018 - May 2020</td>
                                </tr>
                                <tr>
                                    <td>Bachelor of Science - International Marketing</td>
                                    <td>Chinhoyi University of Technology</td>
                                    <td>Jan 2018 - May 2020</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;