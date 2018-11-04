import * as React from 'react';
import {Col} from 'react-bootstrap'
import {Route} from 'react-router-dom'

import {TodayView} from './TodayView'
import {TodoDetailView} from './TodoDetailView'
import {TodoCreateView} from './TodoCreateView'

import {TodoAPI} from '../API/TodoAPI'

export class Section extends React.Component {

    constructor(props) {
        super(props)

        this.handleCompleteSubmit = this.handleCompleteSubmit.bind(this)
        this.handleIncompleteSubmit = this.handleIncompleteSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(id, e) {
        TodoAPI.delete('/todo/' + id)
    }

    handleCompleteSubmit(id, e) {
        TodoAPI.put('/todo/' + id + '/complete')
    }

    handleIncompleteSubmit(id, e) {
        TodoAPI.put('/todo/' + id + '/incomplete')
    }

    render() {
        return (
            <Col xs={10} id="section">  
                <Route exact path="/" 
                        render={(props) => 
                            <TodayView {...props} 
                                    handleCompleteSubmit={this.handleCompleteSubmit} 
                                    handleIncompleteSubmit={this.handleIncompleteSubmit}
                                    handleDelete={this.handleDelete}
                                    />}
                                />
                <Route exact path="/todo/new"
                        component={TodoCreateView} />
                <Route path="/todo/:id([0-9]+)" 
                        render={(props) =>
                                <TodoDetailView {...props}
                                handleCompleteSubmit={this.handleCompleteSubmit} 
                                handleIncompleteSubmit={this.handleIncompleteSubmit}/>}
                                handleDelete={this.handleDelete}
                                    />
                <Route path="/todo/:id([0-9]+)/edit" component={TodoCreateView} />
            </Col>
        );
    }
}