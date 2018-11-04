import * as React from 'react';
import {Glyphicon} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

import {TodoAPI} from '../API/TodoAPI'

import './TodoEntryView.sass'


export class TodoEntryView extends React.Component {

    constructor(props) {
        super(props)

        this.handleCompleteSubmit = this.handleCompleteSubmit.bind(this)
        this.handleIncompleteSubmit = this.handleIncompleteSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(id, e) {
        TodoAPI.delete('/todo/' + id)

        window.location.reload()
    }

    handleCompleteSubmit(id, e) {
        TodoAPI.put('/todo/' + id + '/complete')

        window.location.reload()
    }

    handleIncompleteSubmit(id, e) {
        TodoAPI.put('/todo/' + id + '/incomplete')

        window.location.reload()
    }

    render() {
        let PRIORITY_COLOR = ["", "red", "yellow", "purple", "black"]
        let color_code = this.props.data.priority
        let showing_status = [<br/>]

        if(this.props.data.completed) {
            showing_status = <Glyphicon 
            onClick={(e) => this.handleinCompleteSubmit(this.props.data.id, e)} glyph="ok"/>
        } else {
            showing_status = <Glyphicon 
            onClick={(e) => this.handleCompleteSubmit(this.props.data.id, e)} glyph="unchecked"/>
        }

        return (
        <div className="todo">
            <div  className={"priority priority-" + PRIORITY_COLOR[color_code]}>
                {showing_status}
            </div>
            <div className="title">
                <NavLink to={"/todo/" + this.props.data.id }>
                    {this.props.data.title}
                </NavLink>
            </div>
            <div className="deadline">{this.props.data.deadline}</div>
            <div className="delete-button">
                <Glyphicon 
                    onClick={(e) => this.handleDelete(this.props.data.id, e)}
                    glyph="trash"/> 
            </div>

        </div>);
    }
}