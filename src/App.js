import React, { Component } from 'react';
import FormTodo from './components/form-todo/form-todo';
import shortid from 'shortid';
import ListTodo from './components/list-todo/list-todo';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      taskList: [
        {id: "egoOG99TM", name: "test", desc: "", priority: "high", isDone: true},
        {id: "qsdqdqcqc", name: "test", desc: "Hello World", priority: "normal", isDone: false},
        {id: "qsdqs", name: "test", desc: "", priority: "normal", isDone: false}
      ]
    }
  }

  componentDidMount() {
    document.title = 'Welcome on Todo List !';
  }

  componentDidUpdate() {
    const nbTask = this.state.taskList.filter(t => !t.isDone).length; 
    document.title = `${nbTask} task unfinish on Todo List`; 
  }

  handleNewTask = (task) => {
    const newTask = { id:shortid.generate(), ...task, isDone:false};
    console.log(task, newTask);

    this.setState((state) => ({
      taskList: [newTask, ...state.taskList]
    }));
  }

  handleTaskDelete = (id) => {
    this.setState((state) => ({
      taskList: state.taskList.filter(task => task.id !== id)
    }));
  }
  
  handleTaskFinish = (id) => {
    this.setState((state) => ({
      taskList: state.taskList.map(
        task => (task.id !== id) ? task : {...task, isDone: true}
      )
    }));
  }

  render() {
    return (
      <div className="App">
        <h2>Ajouter une nouvelle tâche</h2>
        <FormTodo onNewTask={this.handleNewTask} />
        <h2>Liste de tâches</h2>
        <ListTodo taskList={this.state.taskList}
                  onTaskFinish={this.handleTaskFinish} 
                  onTaskDelete={this.handleTaskDelete} />
      </div>
    );
  }
}

export default App;
