import React from "react";
import TodoListItem from "../todo-list-item/TodoListItem";
import './todo-list.css';

const TodoList = ({items, onItemDeleted, onToggleDone, onToggleImportant}) => {

    const elements = items.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                <TodoListItem {...itemProps}
                              onItemDeleted={() => onItemDeleted(id)}
                              onToggleDone={() => onToggleDone(id)}
                              onToggleImportant={() => onToggleImportant(id)}/>
            </li>
        );
    });
    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;