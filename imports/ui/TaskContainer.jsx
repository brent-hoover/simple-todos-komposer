import React, { Component, PropTypes } from 'react';
import ReactDOM from "react-dom";
import Task from "./Task";
import { Tasks } from "/imports/api/tasks";
import { composeWithTracker } from "/imports/api/komposer";

class TaskContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmit(event) {
        event.preventDefault();

        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

        Tasks.insert({
            text,
            createdAt: new Date()
        });

        ReactDOM.findDOMNode(this.refs.textInput).value = '';
    }

    renderTasks() {
        return this.props.tasks.map((task) => (
            <Task key={task._id} task={task} />
        ));
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Todo List</h1>

                    <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                        <input
                            type="text"
                            ref="textInput"
                            placeholder="Type to add new tasks"
                        />
                    </form>
                </header>

                <ul>
                    {this.renderTasks()}
                </ul>
            </div>
        );
    }
}

TaskContainer.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object),
};

function composer(props, onData) {
    const taskSub = Meteor.subscribe("Tasks");
    let tasks = [];

    if (taskSub.ready()) {
      tasks = Tasks.find({}).fetch();
    }

    onData(null, {
        tasks: tasks
    });
}

export default composeWithTracker(composer)(TaskContainer)
