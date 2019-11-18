import React, { Component } from 'react';

export default class Education extends Component {
    render() {
        return (
            <div class="resumecontainer">
                <div class="title">
                    <h1>EDUCATION</h1>
                </div>
                <div class="incontainer">
                    <div class="title">
                        <h2>University of Otago
                        <br></br>
                            Dunedin
                        <br></br>
                            New Zealand
                    </h2>
                    </div>
                    <div class="name">
                        <h2>Bachelor of Science</h2>
                    </div>
                    <div class="date">
                        <em><b>02/2017 - 11/2019</b></em>
                    </div>
                    <div class="desc">
                        <ul>
                            <li><b>Major:</b> Computer Science</li>
                            <li><b>Minor:</b> Information Science</li>
                            <li>My studies in University covered many topics such as data science, effective programming, software project management, web development, artificial intelligence, and cloud computing.</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}