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
                <Route path="/todo/:id" component={TodoDetailView} />
                <Route path="/todo/new" component={TodoCreateView} />
                <Route path="/todo/:id/edit" component={TodoCreateView} />
            </Col>
        );
    }
}