import * as React from 'react';
import {Col} from 'react-bootstrap'
import {Route,hashHistory} from 'react-router-dom'

import {TodayView} from './TodayView'
import {TodoDetailView} from './TodoDetailView'
import {TodoCreateView} from './TodoCreateView'

export class Section extends React.Component {
    render() {
        return (
            <Col xs={10} id="section">  
                <Route exact path="/" component={TodayView}/>
                <Route exact path="/todo/new" component={TodoCreateView} />
                <Route path="/todo/:id([0-9]+)" component={TodoDetailView} />
                <Route path="/todo/:id([0-9]+)/edit" component={TodoCreateView} />
            </Col>
        );
    }
}