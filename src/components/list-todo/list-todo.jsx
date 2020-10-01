import React from 'react';
import PropTypes from 'prop-types';
import ListTodoItem from './list-todo-item';

import style from './list-todo.module.css';

const ListTodo = ({taskList, onTaskFinish, onTaskDelete}) => {

    const itemsJSX = taskList.map(
        task => <ListTodoItem key={task.id} {...task} 
                              onFinish={onTaskFinish} 
                              onDelete={onTaskDelete} />
    );

    return (
        <ul className={style.taskList}>{itemsJSX}</ul>
    );
}

ListTodo.defaultProps = {
    taskList: [],
    onTaskDelete: () => {},
    onTaskFinish: () => {}
}

ListTodo.propTypes = {
    taskList: PropTypes.array,
    onTaskDelete: PropTypes.func,
    onTaskFinish: PropTypes.func
}

export default ListTodo;