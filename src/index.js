import React from "react";
import ReactDom from 'react-dom';
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";
import AppHeader from "./components/AppHeader";

const App = () => {
    return (<div>
        <AppHeader/>
        <SearchPanel/>
        <TodoList/>
    </div>);
};

ReactDom.render(<App/>, document.getElementById('root'));