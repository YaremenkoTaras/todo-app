import React from "react";

const TodoListItem = ({label, important = false}) => {
    const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    };
    return <span className="todo-list-item">
        <span className="todo-list-item-label" style={style}>
            {label}
        </span>
    </span>;
};

export default TodoListItem;