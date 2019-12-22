import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({items}) => {

    const elements = items.map((item) => {
        return (
            <li>
                <TodoListItem {...item}/>
            </li>
        );
    });
    return <ul>
        {elements}
    </ul>;
};

export default TodoList;