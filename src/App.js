import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { BrowserRouter as Router, Link } from 'react-router-dom'
//import LandingPage from './components/landingpage';

const API = "http://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=f8384513fad5f91ea04d07a2cbf916ec&units=metric";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: ''
        };

    }
    componentDidMount() {
        console.log("CDM ran")
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({ weather: data.main.feels_like }));
    }
    render() {
        const { weather } = this.state;

        return (


            <Router>
                <Layout>
                    <Header className="color" title="Title" scroll>
                        <Navigation>
                            <Link to="/">Home</Link>
                            <Link to="/resume"> About Me</Link>

                            <Link to="/projects"> Projects</Link>

                        </Navigation>
                    </Header>
                    <Drawer title="Title">
                        <Navigation>
                            <Link to="/landingpage">Home</Link>
                            <Link to="/resume"> About Me</Link>

                            <Link to="/projects"> Projects</Link>


                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="temp" > The temperature right now is {weather || '?'}
                        </div>

                        <div className="page-content" />
                        {/* <LandingPage/> */}
                        <Main />
                    </Content>
                </Layout>
            </Router>


        );
    }
}

export default App;
