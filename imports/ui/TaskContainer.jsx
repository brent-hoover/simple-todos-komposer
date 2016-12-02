import React, { Component, PropTypes } from 'react';
import { compose } from "react-komposer";
import Task from "./Task";

class TaskContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Task></Task>
        )
    }
}

function composer(props, onData) {
    const tasks = Meteor.subscribe("Tasks")

    onData(null, {
        tasks: tasks
    });
}

export default compose(composer)(Task)