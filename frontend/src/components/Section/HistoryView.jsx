import * as React from 'react';
import {Glyphicon} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

import {TodoEntryView} from './TodoEntryView'

import {TodoAPI} from '../API/TodoAPI'

import './TodoEntryView.sass'


class TodoListView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let todolist = []
        let todo_entries = []

        for(var i=0; i<this.props.todo.length; ++i)
            todolist.push(this.props.todo[i])

        if(todolist.length != 0)
            todo_entries = todolist.map((e, i) => {
                return <TodoEntryView
                            key={e.id} data={e} />;
            })

        return (
            <div>
                <div id="todolist">
                    <h2>지금까지의 생성한 할 일 목록</h2>
                    { todo_entries }
                </div>
            </div>
        )
    }
}


export class HistoryView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [],
            isLoading: true,
            catch: {}
        }
    }

    componentDidMount() {
        TodoAPI.get('/todo/')
            .then((res) => { this.setState({ todo: res.data, isLoading: false }) })
            .catch((err) => this.setState({ error, isLoading: false }))
    }


    render() {
        return (
            <div>
                <TodoListView
                    todo={this.state.todo} />
            </div>
        )
    }
}