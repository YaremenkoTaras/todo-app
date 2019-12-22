import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import React from "react";
import './app.css';

export default class App extends React.Component {
    state = {
        data: [
            {id: 1, label: 'Drink Coffee', important: false},
            {id: 2, label: 'Learn React !!', important: true},
        ]
    };

    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex((el) => el.id === id);
            const newArr = [
                ...data.slice(0, index),
                ...data.slice(index + 1)
            ];
            return {
                data: newArr
            };
        });
    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader active={3} done={1}/>
                <div className="d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList items={this.state.data} deleteItem={this.deleteItem}/>
            </div>
        );
    }
}