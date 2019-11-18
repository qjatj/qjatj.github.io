import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="nav">
                    <div class="container">
                        <div class="landing">
                            <a href="#landing">Portfolio</a>
                        </div>
                        <div id="mainListDiv" class="main_list">
                            <ul class="navlinks">
                                <li><a href="#about">About</a></li>
                                <li><a href="#education">Education</a></li>
                                <li><a href="#work">Work</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#skills">Skills</a></li>
                            </ul>
                        </div>
                        <span class="navTrigger">
                            <i></i>
                            <i></i>
                            <i></i>
                        </span>
                    </div>
                </nav>
                <section class="home"></section>
            </div>
        );
    }
}