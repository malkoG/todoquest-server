import * as React from 'react'
import {ListGroup, ListGroupItem, Col, Badge, Glyphicon} from 'react-bootstrap'

import {NavLink} from 'react-router-dom'

import {TodoAPI} from '../API/TodoAPI'

import './sidebar.sass'

export class AsideBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notifications: 0
        }
    }

    componentDidMount() {
        TodoAPI.get('/notifications/').then(
            (res) => this.setState({notifications: res.data.length}))
    }

    render() {
        return (
            <Col xs={2} id="side-bar">   
                <ListGroup>
                    <ListGroupItem>
                        <NavLink to="/notifications">  
                            <Glyphicon glyph="envelope"/> Inbox <Badge>{this.state.notifications}</Badge>
                        </NavLink>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Glyphicon glyph="home"/>
                        <NavLink to="/">Home</NavLink>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Glyphicon glyph="list-alt"/> <NavLink to="/history">History</NavLink>
                    </ListGroupItem>            
                </ListGroup>
            </Col>
        );
    }
}