import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { List, ListItem, ListItemContent } from 'react-mdl';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={6}>
                        <div >

                            <div className="contact-body">
                                <h2>Contact Me</h2>
                                <div className="contact-list">
                                    <List>
                                        <ListItem>
                                            <ListItemContent>
                                                <i class="fa fa-phone-square" aria-hidden="true"></i>
                                                0737804853
        </ListItemContent>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemContent>
                                                <a style={{ color: 'black' }} href="mailto:ishimmwelieish@gmail.com"><i class="fa fa-envelope-open" aria-hidden="true"></i>
                                                    ishimmwelieish@gmail.com</a>

                                            </ListItemContent>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemContent>
                                                <a style={{ color: 'black' }} href="mailto:https://www.linkedin.com/in/liesse-ishimwe-35982b194/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BPjLnbdytTt2Rpv%2B1cVRxYA%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-nav.settings_view_profile"> <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                                    Liesse Ishimwe</a>
                                            </ListItemContent>
                                        </ListItem>
                                    </List>

                                </div>


                            </div>



                        </div>


                    </Cell>

                    <Cell className="resume-right-col" col={4}>

                        <h2>Liesse Ishimwe</h2>
                        <h4 style={{ color: 'grey' }}>Frontend Developer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p className='stor'> I'am a 23 year's old frontend developer.
                            My interest is traveling, dancing and reading books.
                            I also like working out and spending time with my friends and family.<br />

                            I have worked in finance, warehousing and service.
                             It has improved my independence and ability to work in groups which I have benefited greatly in my life.</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Cell>



                </Grid>
            </div >
        )
    }
}

export default Resume;
