import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div class="aboutcontainer">
                <div class="aboutimage"><img src="images/profile.png" alt="profile" id="image"></img></div>
                <div class="aboutme">
                    <h2>About Me</h2>
                    <p>I am a recent graduate from the University of Otago. I have loved my 3 years at University pursuing my passion in Software Development, learning lots of important skill sets along the way. These skills sets have allowed me to be experienced in different fields such as Object-Oriented programming, developing, testing and debugging code, designing interfaces, web development, and deploying to cloud using AWS. I am a self-driven person that enjoys working both in a team as well as in a self-directed setting. I love to code and am always working to improve myself both as a developer and an individual.</p>
                </div>
                <div class="contact">
                    <h2>Contact Details</h2>
                    <p class="address">
                        <span>Sean Kim</span>
                        <br></br>
                        <span>26 Hood Street, Wakari,
                            <br></br>
                            Dunedin, New Zealand, 9010       
                        </span>
                        <br></br>
                        <span>(+64) 21 189 3889</span>
                        <br></br>
                        <span>skim.12085@gmail.com</span>
                    </p>
                </div>
                <div class="download">
                <a href="/images/resume.pdf" download><button class="btn"><i class="fa fa-download"></i>Download Resume</button></a>
                </div>
            </div>
        );
    }
}