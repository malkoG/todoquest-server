import * as React from 'react';
import {TodoAPI} from '../API/TodoAPI'

import {TodoEntryView} from './TodoEntryView'

class TodoListView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let outdated = []
        let remaining = []

        for(var i = 0; i < this.props.todo.length; ++i) {
            if(this.props.todo[i].outdated)
                outdated.push(this.props.todo[i])
            else
                remaining.push(this.props.todo[i])
        }

        let outdated_todo  = [<br key={1e+9}/>]
        let remaining_todo = [<br key={1e+8}/>]

        if(outdated.length != 0)
            outdated_todo = outdated.map((e, i) => {
                return <TodoEntryView key={e.id} data={e} />;
            })

        if(remaining.length != 0)
            remaining_todo = remaining.map((e, i) => {
                return <TodoEntryView key={e.id} data={e} />;
            })

        return (
            <div>
                <div id="outdated">
                    <h2>기한이 지남</h2>
                    { outdated_todo }
                </div>
                <div id="remaining">
                    <h2>앞으로 할 일</h2>
                    { remaining_todo }
                </div>
            </div>
        )
    }
}


export class TodayView extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: [],
            isLoading: true,
            catch: {}
        }
    }

    componentDidMount() {
        TodoAPI.get('/today')
            .then((res) => { this.setState({ todo: res.data, isLoading: false }) })
            .catch((err) => this.setState({ error, isLoading: false }))
    }


    render() {
        return (
            <div>
                <TodoListView todo={this.state.todo} />
            </div>
        )
    }
}