import * as React from 'react'

import {Glyphicon, Button} from 'react-bootstrap'

import {TodoAPI} from '../API/TodoAPI'

import './notification.sass'

export class NotificationEntry extends React.Component {
    constructor(props) {
        super(props)
        this.handleRead         = this.handleRead.bind(this);
    }
    
    handleRead() {
        TodoAPI.put('/notifications/' +this.props.data.id + '/check')

        window.location.reload()
    }

    render() {
        let CATEGORIES = ['', 'tags']
        let category = CATEGORIES[parseInt(this.props.data.category)]
        let icon = (<Glyphicon glyph={category}/>)

        return (
            <div className="notification">
                <div className="noti noti-icon">{icon}</div>
                <div className="noti noti-detail">{this.props.data.detail}</div>
                <div className="noti noti-datetime">{this.props.data.created_at}</div>
                <Button onClick={this.handleRead}>Mark as Read</Button>
            </div>
        )
    }
}