import * as React from 'react'
import {Col} from 'react-bootstrap'

import {NavLink} from 'react-router-dom'

import './sidebar.sass'

export class AsideBar extends React.Component {

    render() {
        return (
            <Col xs={2} id="side-bar">   
                <NavLink to="/">Home</NavLink>
            </Col>
        );
    }
}