import React from "react";

const AddItemPanel = ({addItem}) => {
    return (
        <div className="d-flex">
            <input placeholder="Add new todo's note"
                   onSubmit={() => console.log('clicked add')}/>
            <button type="button" className="btn btn-info"
                    onClick={() => addItem("new item")}>
                Add
            </button>
        </div>
    );
};

export default AddItemPanel;