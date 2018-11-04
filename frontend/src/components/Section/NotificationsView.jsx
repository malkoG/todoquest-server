import * as React from 'react'

import {TodoAPI} from '../API/TodoAPI'

import {NotificationEntry} from './NotificationEntry'

export class NotificationsView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notifications: []
        }
    }

    componentDidMount() {
        TodoAPI.get('/notifications/').then(
            (res) => this.setState({notifications: res.data}))
    }

    render() {
        let notifications_view = <br/>

        if(this.state.notifications !== [])
            notifications_view = this.state.notifications.map((e,i) =>
                <NotificationEntry key={e.id} data={e} />
            )

        return (<div>
            <h1>확인하지 않은 알림 목록</h1>
            {notifications_view}
        </div>)
    
    }

}