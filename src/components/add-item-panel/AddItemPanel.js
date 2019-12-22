import React from "react";

export default class AddItemPanel extends React.Component {
    state = {
        label: ''
    };

    render() {
        return (
            <form className="add-item-panel d-flex"
                  onSubmit={this.onSubmit}>
                <input type="text"
                       placeholder="What need's to be done?"
                       onChange={this.onLabelChange}
                       value={this.state.label}/>
                <button className="btn btn-info">
                    Add
                </button>
            </form>
        );
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        })
    };
};