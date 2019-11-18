import React, { Component } from 'react';

export default class Projects extends Component {
    render() {
        return (
            <div class="projectcontainer">
                <div class="title">
                    <h1>PROJECTS</h1>
                </div>
                <div class="incontainer3">
                    <div class="title">
                        <h2>Artificial
                        <br></br>
                            Intelligence
                    </h2>
                    </div>
                    <div class="name">
                        <h2>Genetic Algorithm that maximises creature survival</h2>
                    </div>
                    <div class="desc">
                        <ul>
                            <li>Simulation of world with creatures and monsters</li>
                            <li>Tries to maximise the survival of creatures using a genetic algorithm</li>
                            <li>Written using python</li>
                            <li>Uses different concepts such as selection, crossover, and mutation to breed new population</li>
                            <li><b>Link to GitHub repository:</b> <a href="https://github.com/qjatj/COSC343">https://github.com/qjatj/COSC343</a></li>
                        </ul>
                    </div>
                </div>
                <div class="incontainer2">
                    <div class="title">
                        <h2>Effective
                        <br></br>
                            Programming
                    </h2>
                    </div>
                    <div class="name">
                        <h2>Arithmetic Calculator</h2>
                    </div>
                    <div class="desc">
                        <ul>
                            <li>Calculator that takes command line input</li>
                            <li>Takes a set of input numbers and target value</li>
                            <li>Tries to create target value by placing + or * between numbers</li>
                            <li>Uses two methods (Normal arithmetic that follows normal BEDMAS or left to right computation)</li>
                            <li>Written in Java</li>
                            <li>Emphasises optimisation of search</li>
                            <li><b>Link to GitHub repository:</b> <a href="https://github.com/qjatj/COSC326/tree/master/Etude%208">https://github.com/qjatj/COSC326/tree/master/Etude%208</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}