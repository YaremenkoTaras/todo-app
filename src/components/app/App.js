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
        ],
        filter: {
            query: '',
            all: true,
            active: false,
            done: false,
        },
        hiddenData: [],
        get fullData() {
            return [...this.data, ...this.hiddenData];
        }
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
        const newItem = {
            id: this.idCounter++,
            important: false,
            label
        };
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            };
        });
    };

    markImportant = (id) => {
        this.setState(({data}) => {
            return this.toggleProperty(data, id, 'important');
        })
    };

    markDone = (id) => {
        this.setState(({data}) => {
            return this.toggleProperty(data, id, 'done');
        })
    };

    toggleProperty = (arr, id, property) => {
        const index = arr.findIndex((el) => el.id === id);
        const oldItem = arr[index];
        const newItem = {...oldItem, [property]: !oldItem[property]};
        const newArr = [
            ...arr.slice(0, index),
            newItem,
            ...arr.slice(index + 1)
        ];
        return {
            data: newArr
        };
    };

    setFilters = (filter) => {
        this.setState(({fullData, filter: oldFilter}) => {
                const newFilter = {...oldFilter, ...filter};
                let displayData = fullData.filter(el => el.label.includes(newFilter.query));
                if (newFilter.done) {
                    displayData = displayData.filter(el => el.done);
                }
                if (newFilter.active) {
                    displayData = displayData.filter(e => !e.done);
                }
                const filteredData = fullData.filter(e => !displayData.includes(e));
                return {
                    data: displayData,
                    hiddenData: filteredData,
                    filter: newFilter
                }
            }
        );
    };

    render() {
        const {fullData: data} = this.state;
        const doneCount = data.filter((e) => e.done).length;
        const todoCount = data.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader active={todoCount} done={doneCount}/>
                <div className="d-flex">
                    <SearchPanel onFilterChanged={this.setFilters}/>
                    <ItemStatusFilter onFilterChanged={this.setFilters}/>
                </div>
                <TodoList items={this.state.data}
                          onItemDeleted={this.deleteItem}
                          onToggleImportant={this.markImportant}
                          onToggleDone={this.markDone}/>
                <AddItemPanel onItemAdded={this.addItem}/>
            </div>
        );
    }
}
