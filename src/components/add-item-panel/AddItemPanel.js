import React from "react";

const AddItemPanel = ({onItemAdded}) => {
    return (
        <div className="d-flex">
            <input placeholder="Add new todo's note"
                   onSubmit={() => console.log('clicked add')}/>
            <button type="button" className="btn btn-info"
                    onClick={() => onItemAdded("new item")}>
                Add
            </button>
        </div>
    );
};

export default AddItemPanel;