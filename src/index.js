import React from "react";
import ReactDom from 'react-dom';

const app = <>
    <div>
        <h1>My ToDo list</h1>
        <input placeholder="search"/>
        <ul>
            <li>Learn react</li>
            <li>Build Awesome App</li>
        </ul>
    </div>
</>;

ReactDom.render(app, document.getElementById('root'));