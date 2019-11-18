import React, { Component } from 'react';

export default class Work extends Component {
    render() {
        return (
            <div class="workcontainer">
                <div class="title">
                    <h1>WORK</h1>
                </div>
                <div class="incontainer">
                    <div class="title">
                        <h2>Harry's Kitchen
                        <br></br>
                            Dunedin
                        <br></br>
                            New Zealand
                    </h2>
                    </div>
                    <div class="name">
                        <h2>Cashier / Waiter</h2>
                    </div>
                    <div class="date">
                        <em><b>02/2017 - 11/2018</b></em>
                    </div>
                    <div class="desc">
                        <p>I have learnt many important skills during my time working at Harry's Kitchen such as communication, time management, customer service, and teamwork.</p>
                    </div>
                </div>
                <div class="incontainer2">
                    <div class="title">
                        <h2>Allied Press
                        <br></br>
                            Dunedin
                        <br></br>
                            New Zealand
                    </h2>
                    </div>
                    <div class="name">
                        <h2>Newspaper Printing</h2>
                    </div>
                    <div class="date">
                        <em><b>09/2013 - 12/2013</b></em>
                    </div>
                    <div class="desc">
                        <p>My job at Allied Press consisted of inserting pamphlets into daily mail before it was sent off for delivery.</p>
                    </div>
                </div>
            </div>
        );
    }
}