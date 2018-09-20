import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const faq = () => {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
}

let scroll = (id) => {

    let  el = document.getElementById(`${id}`)
    window.scrollTo({'behavior': 'smooth','left': 0,'top': el.offsetTop})
}

class App extends Component {

    componentDidMount() {
        faq()
    }

    render() {
        return (
          <div className="App">
            <header className="App-header">
              <img
                src='https://static.wixstatic.com/media/61e634_a9c94dd33cc94e03b6ccd05880a076ba~mv2_d_2000_2000_s_2.png/v1/fill/w_40,h_40,al_c,q_80,usm_0.66_1.00_0.01/61e634_a9c94dd33cc94e03b6ccd05880a076ba~mv2_d_2000_2000_s_2.webp'
                className="App-logo"
                alt="logo"
                onClick={() => window.scrollTo({'behavior': 'smooth','top': 0})}
                 />

              <ul className="navcontainer">
                <li onClick={() => scroll('about')}>About</li>
                <li onClick={() => scroll('faq')}>FAQ</li>
              </ul>
            </header>

            <div id="intro">

                <div id="eddi">
                    <img data-type="image" src="https://static.wixstatic.com/media/61e634_c6e027c44f41462ca0db6e7c169a21e3~mv2.gif" style={{width: '240px', height: '180px', objectFit: 'cover'}} />

                    <h1> Hi, I'm Eddii. </h1>
                    <p>Your health management buddy.
                        I track your data. <br/> Keep you motivated.
                        Connect you to others.
                    </p>
                </div>

                <div id="subscribe">

                    <div>
                        <h5>Join Our Beta</h5>
                        <input placeholder="Choose username" />
                        <input placeholder="Email" />
                        <button>Join Now</button>
                    </div>

                </div>

            </div>

            <div id="about">
                <div>

                    <i className="fas fa-medkit fa-5x"></i>

                    <h2> Your health buddy </h2>

                    <p>We are in this together.  I am happy for you when
                    you do healthy things, and when you don't, I'm not
                    in a great mood</p>


                </div>

                <div>
                    <i className="fas fa-heartbeat fa-5x"></i>

                    <h2> Keep Track</h2>
                    <p>I will help keep track of your essential health metrics</p>

                </div>

                <div>
                    <i className="fa fa-users fa-5x"></i>
                    <h2> Community </h2>
                    <p>You can talk to others on the platform, not just me.
                     We'll be so well connected</p>
                </div>

                <div>
                    <i className="far fa-grin-alt fa-5x"></i>
                    <h2> Have fun together </h2>
                   <p>You will see me do crazy things when I'm happy</p>
                </div>



            </div>

            <div id="app">

            </div>

            <div id="faq">

                <button className="collapsible">WHO IS EDDI?</button>
                    <div className="content">
                      <p>Eddii is a virtual character who helps you monitor your diabetes.
                        Eddii's health and vitality are linked to yours.
                       Every time you interact with Eddii and tell him about your
                       health, or post popular things on the community page, Eddii is happy and his spending power increases.
                       nversely, when you ignore him, Eddii is sad.</p>
                    </div>

                    <button className="collapsible">HOW DOES IT WORK?</button>
                    <div className="content">
                      <p>Eddii is built using a combination of reward psychology, fun animation and simple conversation.</p>
                    </div>

                    <button className="collapsible">HOW CAN I GET EDDI?</button>
                    <div className="content">
                      <p>Eddii is currently available to an exclusive group of members who have joined our beta test. To join the test please click here.</p>
                    </div>

                    <button className="collapsible">WHO'S IT FOR</button>
                    <div className="content">
                      <p>We have built Eddii targeting young adults and children with diabetes in mind. However, we encourage everyone living with diabetes to try it and see if Eddii is a good fit for you.</p>
                    </div>

            </div>


          </div>
        );
  }
}



export default App;
