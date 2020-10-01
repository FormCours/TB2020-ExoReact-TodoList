import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {LOW, NORMAL, HIGH} from './../../enums/priority-enum';

import style from './form-todo.module.css';

class FormTodo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name : '',
            desc: '',
            priority: NORMAL,
            nameError: false
        }
    }

    handleInput = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    activeErrorName = () => {
        // Active le background d'erreur en quittant l'input name
        this.setState((state) => ({
            nameError: state.name === ''
        }));
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if(this.state.name !== '') {
            // Test pour bloqué l'envois

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
    }

    render() {
        const {name, desc, priority, nameError} = this.state;

        return (
            <form onSubmit={this.handleSubmit} className={style.form}>
                <label>
                    Nom: *
                    <input type="text" name="name" value={name} required
                            onChange={this.handleInput} onBlur={this.activeErrorName}
                            className={nameError && name === '' ? style.requiredName : ''}/>
                </label>
                <label>
                    Description:
                    <input type="text" name="desc" value={desc} onChange={this.handleInput}/>
                </label>
                <label>
                    Priorité:
                    <select name="priority" value={priority} onChange={this.handleInput}>
                        <option value={LOW}>Basse</option>
                        <option value={NORMAL}>Normal</option>
                        <option value={HIGH}>Haute</option>
                    </select>
                </label>
                <div>
                    <input className={style.addBtn} type="submit" value="Ajouter" disabled={name === ''}/>
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