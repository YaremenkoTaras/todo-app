import React from "react";
import './search-panel.css';

export default class SearchPanel extends React.Component {
    state = {
        query: ''
    };

    render() {
        const searchText = 'Type here to search...';
        return (
            <input placeholder={searchText}
                   onChange={this.onChange}
                   value={this.state.query}/>
        );
    }

    onChange = (e) => {
        const query = e.target.value;
        this.setState({
            query: query
        });
        this.props.onFilterChanged({
            query: query
        });
    }
}