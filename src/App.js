import React, { Component } from 'react';
import Navbar from './Components/navbar'
import About from './Components/about'
import Education from './Components/education'
import Work from './Components/work'
import Projects from './Components/projects'
import Skills from './Components/skills'
import Footer from './Components/footer'

class App extends Component {
    render() {
        return (
            <div class="app">
                <div id="landing"><Navbar></Navbar></div>
                <div id="about"><About></About></div>
                <div id="education"><Education></Education></div>
                <div id="work"><Work></Work></div>
                <div id="projects"><Projects></Projects></div>
                <div id="skills"><Skills></Skills></div>
                <footer id="footer"><Footer></Footer></footer>
            </div>
        );
    }
}

export default App;