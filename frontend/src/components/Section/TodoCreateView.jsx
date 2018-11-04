import * as React from 'react';
import {Redirect} from 'react-router-dom'

import {FormGroup, ControlLabel, FormControl, Button, HelpBlock, Glyphicon} from 'react-bootstrap';

import DatePicker from 'react-datepicker';

import {TodoAPI} from '../API/TodoAPI';

import './TodoEntryView.sass'

export class TodoCreateView extends React.Component {

    constructor(props) {
        super(props)
        
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange     = this.handleDateChange.bind(this);
        this.handleClick          = this.handleClick.bind(this);
        
        this.state = {
            title: "", 
            description: "",
            priority: "3", 
            deadline: null
        }
    }

    handleTitleChange(e) {
        this.setState({ title: e.target.value });
    }

    handleDescriptionChange(e) {
        this.setState({ description: e.target.value });
    }

    handlePriorityChange(e) {
        this.setState({ priority: e.target.value });
    }

    handleDateChange(date) {
        this.setState({ deadline: date});
    }

    
    handleClick() {

        var deadline = null

        if(this.state.deadline !== null)
            deadline = this.state.deadline.format("YYYY-MM-DD") + "T00:00"

        var data = {
            completed: false,
            title: this.state.title,
            description: this.state.description,
            priority: this.state.priority,
            deadline: deadline
        }

        TodoAPI.post('/todo/', data).then((res) => console.log(res.data))

        this.props.history.push('/')

        window.location.reload()
    }

    render() {
        let PRIORITY_COLOR = ["", "red", "yellow", "purple", "black"]

        return (            
            <form>

                <FormGroup controlId="formBasicText">
                    <ControlLabel>어떤 일을 할 건 가요?</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.title}
                        placeholder="Enter text"
                        onChange={this.handleTitleChange}
                    />
                </FormGroup>

                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>구체적으로 어떻게 일할 건가요?</ControlLabel>
                    <FormControl 
                        componentClass="textarea" 
                        placeholder="textarea" 
                        value={this.state.description}
                        onChange={this.handleDescriptionChange}
                        />
                </FormGroup>

                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>우선순위를 정해주세요</ControlLabel>
                    <div className={"priority priority-" + PRIORITY_COLOR[parseInt(this.state.priority)]}>
                        <Glyphicon glyph="unchecked"/>
                    </div>
                    <FormControl componentClass="select"        
                                placeholder="select"
                                onChange={this.handlePriorityChange}
                                >
                        <option value="1">
                            긴급
                        </option>
                        <option value="2">
                            중요한 일
                        </option>
                        <option value="3">
                            평범한 일
                        </option>
                        <option value="4">
                            사소한 일
                        </option>
                    </FormControl>
                </FormGroup>

                <ControlLabel>마감기한을 정해두세요</ControlLabel>
                <DatePicker
                        selected={this.state.deadline}
                        onChange={this.handleDateChange}
                />
                
                <Button type="submit"
                        onClick={this.handleClick}>Submit</Button>

            </form>
        )
    }
}