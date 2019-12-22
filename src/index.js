import React from "react";
import ReactDom from 'react-dom';

const TodoList = () => {
    let items = ['Learn react 1', 'Build Awesome App 2'];
    return <ul>
        <li>{items[0]}</li>
        <li>{items[1]}</li>
    </ul>;
};

const SearchPanel = () => {
    const searchText = 'Type here to search...';
    return <input placeholder={searchText}/>;
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