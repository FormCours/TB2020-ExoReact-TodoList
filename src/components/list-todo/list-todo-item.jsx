import React from 'react';
import PropTypes from 'prop-types';
import { HIGH } from '../../enums/priority-enum';

const ListTodoItem = (props) => {
    const {id, name, desc, priority, isDone, onFinish, onDelete} = props;
 
    return (
        <li>
            {isDone && "Fini !"}
            <p>{name} {priority === HIGH && <span>(Urgent)</span>}</p>
            <p>{desc}</p>
            <button onClick={() => onFinish(id)} disabled={isDone}>Terminer</button>
            <button onClick={() => onDelete(id)}>Supprimer</button>
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