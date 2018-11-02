import * as React from 'react';
import {Glyphicon} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

import './TodoEntryView.sass'


export class TodoEntryView extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        let PRIORITY_COLOR = ["", "red", "orange", "purple", "black"]
        let color_code = this.props.data.priority
        let showing_status = [<br/>]

        if(this.props.data.completed) {
            showing_status = <Glyphicon glyph="ok"/>
        } else {
            showing_status = <Glyphicon glyph="unchecked"/>
        }

        return (
        <div className="todo">
            <div className={"priority priority-" + PRIORITY_COLOR[color_code]}>
                {showing_status}
            </div>
            <div className="title">
                <NavLink to={"/todo/" + this.props.data.id }>
                    {this.props.data.title}
                </NavLink>
            </div>
            <div className="deadline">{this.props.data.deadline}</div>
        </div>);
    }
}