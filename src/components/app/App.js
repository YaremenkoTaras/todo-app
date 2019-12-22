import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import React from "react";
import './app.css';
import AddItemPanel from "../add-item-panel";

export default class App extends React.Component {

    idCounter = 100;

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
    addItem = (label) => {
        const newItem = {id: this.idCounter++, label};
        this.setState(({data}) => {
            const newArr = [...data, newItem];
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
                <AddItemPanel addItem={this.addItem}/>
            </div>
        );
    }
}