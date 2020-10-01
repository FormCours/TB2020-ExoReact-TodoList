import React from 'react';
import PropTypes from 'prop-types';
import { HIGH } from '../../enums/priority-enum';

import style from './list-todo.module.css';

const ListTodoItem = (props) => {
    const {id, name, desc, priority, isDone, onFinish, onDelete} = props;
 
    return (
        <li className={`${style.task} ${isDone && style.isDone}`}>
            <div className={style.taskInfo}>
                <p>{name} {priority === HIGH && <span className={style.high}>(Urgent)</span>}</p>
                <p>{desc}</p>
            </div>
            <div className={style.taskCommand}>
                <button onClick={() => onFinish(id)} disabled={isDone}>Terminer</button>
                <button onClick={() => onDelete(id)}>Supprimer</button>
            </div>
        </li>
    );
}

ListTodoItem.defaultProps = {
    desc: '',
    isDone: false,
    onDelete: () => {},
    onFinish: () => {}
}

ListTodoItem.propTypes = {
    id: PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    desc: PropTypes.string,
    priority: PropTypes.string.isRequired,
    isDone: PropTypes.bool,
    onDelete: PropTypes.func,
    onFinish: PropTypes.func
}

export default ListTodoItem;