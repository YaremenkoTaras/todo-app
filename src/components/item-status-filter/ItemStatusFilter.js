import React, {Component} from "react";
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

    state = {
        all: true,
        active: false,
        done: false
    };

    render() {
        const activeClass = "btn btn-info";
        const standardClass = "btn btn-outline-secondary";

        return (
            <div>

                <button value={this.state.all} type="button" className={this.state.all ? activeClass : standardClass}
                        onClick={this.activateFilter}>
                    All
                </button>
                <button type="button" className={this.state.active ? activeClass : standardClass}
                        onClick={this.activateFilter}>
                    Active
                </button>
                <button type="button" className={this.state.done ? activeClass : standardClass}
                        onClick={this.activateFilter}>
                    Done
                </button>
            </div>
        );
    };

    activateFilter = (e) => {
        console.log(e.target.className);

    }
}