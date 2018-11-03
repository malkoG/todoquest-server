import * as React from 'react';
import {Link} from 'react-router-dom'

import {Navbar, Nav, NavItem} from 'react-bootstrap'

export class Header extends React.Component {
    render() {
        return (
            <div id="header">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to='/'>TodoQuest</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem href="/todo/new">
                                New Task
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}