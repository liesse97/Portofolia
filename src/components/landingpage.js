import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import go from '../images/go.jpg';
//import liesse from '../images/liesse.jpg';
//import mo from '../images/mo.jpg';


class Landing extends Component {


    render() {
        return (

            /* <div style={{
                 backgroundImage: `url(${mo})`, backgroundRepeat: 'repeat-x', height: '100%',
             }
             }>*/


            <Grid className="landing">
                <Cell col={12}>
                    <img
                        src={go}
                        alt="avatar"
                        className="me"
                    />

                    <div className="text">
                        <h1>Frontend Developer</h1>
                        <p className="nam">Hi, My name is Liesse and I am frontend developer from Sweden. I create beautiful and functional website.  </p>
                        <p className="text1">HTML/CSS | Flexbox | JavaScript | React </p>

                    </div>
                </Cell>
            </Grid>


        )
    }
}


export default Landing;