import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import React from "react";
import './app.css';

const App = () => {
    const data = [
        {id: 1, label: 'Drink Coffee', important: false},
        {id: 2, label: 'Learn React !!', important: true},
    ];

    return (
        <div className="todo-app">
            <AppHeader active={3} done={1}/>
            <div className="d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <TodoList items={data}/>
        </div>);
};

export default App;