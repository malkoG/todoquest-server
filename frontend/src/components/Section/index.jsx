import * as React from 'react';
import {Col} from 'react-bootstrap'
import {Route} from 'react-router-dom'

import {TodayView} from './TodayView'
import {TodoDetailView} from './TodoDetailView'
import {TodoCreateView} from './TodoCreateView'
import {HistoryView} from './HistoryView'

import {NotificationsView} from './NotificationsView'

export class Section extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Col xs={10} id="section">  
                <Route exact path="/" 
                        render={(props) => 
                            <TodayView {...props}  />}
                                />
                <Route exact path="/todo/new"
                        component={TodoCreateView} />
                <Route path="/todo/:id([0-9]+)" 
                        render={(props) =>
                                <TodoDetailView {...props} />} />
                <Route exact path="/history"
                        component={HistoryView} />
                <Route exact path="/notifications"
                        component={NotificationsView} />
            </Col>
        );
    }
}