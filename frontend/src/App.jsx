
import * as React from 'react'
import {Grid, Row,Col} from 'react-bootstrap'


import './app.sass'

import 'react-datepicker/dist/react-datepicker.css';


import {Header, Section, Footer} from './components'
import { AsideBar } from './components/AsideBar';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Grid id="content">
                    <Row className="show-grid">
                        <AsideBar id='side-bar' />
                        <Section id='section'  />
                    </Row>
                </Grid>
                <Footer />
            </div>
        );        
    }
}

export default App;
