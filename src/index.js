import React from "react";
import ReactDom from 'react-dom';
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";
import AppHeader from "./components/AppHeader";

const App = () => {

    const data = [
        {id: 1, label: 'Drink Coffee', important: false},
        {id: 2, label: 'Learn React !!', important: true},
    ];

    return (<div>
        <AppHeader/>
        <SearchPanel/>
        <TodoList items={data}/>
    </div>);
};

ReactDom.render(<App/>, document.getElementById('root'));