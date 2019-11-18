import React, { Component } from 'react';

export default class Skills extends Component {
    render() {
        return (
            <div class="skillscontainer">
                <div class="title">
                    <h1>SKILLS</h1>
                </div>
                <div class="incontainer4">
                    <div class="title">
                        <h2>Front End</h2>
                    </div>
                    <div class="skillbar">
                        <p><b>HTML</b></p>
                        <div class="skillcontainer">
                            <div class="skillshtml">.</div>
                        </div>
                        <p><b>CSS</b></p>
                        <div class="skillcontainer">
                            <div class="skillscss">.</div>
                        </div>
                        <p><b>Javascript</b></p>
                        <div class="skillcontainer">
                            <div class="skillsjs">.</div>
                        </div>
                        <p><b>React.js</b></p>
                        <div class="skillcontainer">
                            <div class="skillsreact">.</div>
                        </div>
                        <p><b>jQuery</b></p>
                        <div class="skillcontainer">
                            <div class="skillsjq">.</div>
                        </div>
                    </div>
                </div>
                <div class="incontainer5">
                    <div class="title">
                        <h2>Back End</h2>
                    </div>
                    <div class="skillbar">
                        <p><b>Java</b></p>
                        <div class="skillcontainer">
                            <div class="skillsjava">.</div>
                        </div>
                        <p><b>Python</b></p>
                        <div class="skillcontainer">
                            <div class="skillspy">.</div>
                        </div>
                        <p><b>PHP</b></p>
                        <div class="skillcontainer">
                            <div class="skillsphp">.</div>
                        </div>
                        <p><b>C++</b></p>
                        <div class="skillcontainer">
                            <div class="skillsc">.</div>
                        </div>
                        <p><b>Node.js</b></p>
                        <div class="skillcontainer">
                            <div class="skillsnode">.</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}