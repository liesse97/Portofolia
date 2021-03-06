import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <div className="projects">
                    {/* Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >Quire</CardTitle>

                        <CardActions border>
                            <a href="https://github.com/MarcelR1998/fe19tp1_teamEraser" target="_blank" rel="noopener noreferrer"><Button colored>GitHub</Button></a>
                            <a href="http://quire.se/" target="blank"><Button colored>LiveDemo</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >

                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }
                    }>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >Portofolia</CardTitle>

                        <CardActions border>
                            <a href="https://github.com/liesse97/Portofolia" target="_blank" rel="noopener noreferrer"><Button colored>GitHub</Button></a>
                            <a href="/"><Button colored>LiveDemo</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >Form website</CardTitle>

                        <CardActions border>
                            <a href="https://github.com/liesse97/formular-side" target="_blank" ><Button colored>GitHub</Button></a>
                            <a href="http://127.0.0.1:5501/index.html" target="blank"><Button colored>LiveDemo</Button></a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >

                </div >

            )
        }

    }



    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>My Projects</Tab>

                </Tabs>


                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>


            </div>
        )
    }
}

export default Projects;