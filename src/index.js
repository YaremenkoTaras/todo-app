import React from "react";
import ReactDom from 'react-dom';

const TodoList = () => {
    return <ul>
        <li>Learn react</li>
        <li>Build Awesome App</li>
    </ul>;
};

const SearchPanel = () => {
    return <input placeholder="search"/>;
};

const AppHeader = () => {
    return <h1>My ToDo list</h1>;
};

const App = () => {
    return <div>
        <AppHeader/>
        <SearchPanel/>
        <TodoList/>
    </div>;
};


ReactDom.render(<App/>, document.getElementById('root'));