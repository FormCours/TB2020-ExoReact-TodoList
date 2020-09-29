import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {LOW, NORMAL, HIGH} from './../../enums/priority-enum';

class FormTodo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name : '',
            desc: '',
            priority: NORMAL
        }
    }

    handleInput = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.onNewTask({
            name: this.state.name,
            desc: this.state.desc,
            priority: this.state.priority
        })

        this.setState({
            name : '',
            desc: '',
            priority: NORMAL
        })
    }

    render() {
        const {name, desc, priority} = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nom:
                    <input type="text" name="name" value={name} onChange={this.handleInput}/>
                </label>
                <br/>
                <label>
                    Description:
                    <input type="text" name="desc" value={desc} onChange={this.handleInput}/>
                </label>
                <br/>
                <label>
                    Priorité:
                    <select name="priority" value={priority} onChange={this.handleInput}>
                        <option value={LOW}>Basse</option>
                        <option value={NORMAL}>Normal</option>
                        <option value={HIGH}>Haute</option>
                    </select>
                </label>
                <div>
                    <input type="submit" value="Ajouter"/>
                </div>
            </form>
        );
    }
 
}

FormTodo.defaultProps = {
    onNewTask: () => {}
}


FormTodo.propTypes = {
    onNewTask: PropTypes.func
}

export default FormTodo;