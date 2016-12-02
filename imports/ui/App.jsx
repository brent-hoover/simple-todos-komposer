import React, { Component, PropTypes } from 'react';
import TaskContainer from "./TaskContainer";


// App component - represents the whole app
export default class App extends Component {

    render() {
        console.log("rendering App");
        return (
            <TaskContainer/>
        );
    }
}
