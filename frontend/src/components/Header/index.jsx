import * as React from 'react';
import {Link} from 'react-router-dom'

import {Navbar} from 'react-bootstrap'

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
                </Navbar>
            </div>
        );
    }
}