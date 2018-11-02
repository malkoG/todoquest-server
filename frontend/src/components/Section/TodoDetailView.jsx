import * as React from 'react';
import {Panel} from 'react-bootstrap'


import {TodoAPI} from '../API/TodoAPI'

export class TodoDetailView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: {}
        }
    }

    componentDidMount() {
        TodoAPI.get("/todo/" + this.props.match.params.id)
            .then((res) => this.setState({todo: res.data}))
    }

    render() {
        return (
            <div>
                <Panel bsStyle="primary">
                    <Panel.Heading >
                        <Panel.Title componentClass="h3">뭘 해야하지?</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        {this.state.todo.title}
                    </Panel.Body>
                </Panel>
                
                <Panel>
                    <Panel.Heading>
                        구체적으로 어떻게 해야하더라...
                    </Panel.Heading>
                    <Panel.Body>
                        {this.state.todo.description}
                    </Panel.Body>
                </Panel>
            </div>)
    }
}