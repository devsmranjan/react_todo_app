import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
    const handleRemoveButton = () => {
        onRemovePressed(todo.text);
    };
    const handleCompletedButton = () => {
        onCompletedPressed(todo.text);
    };

    return (
        <div className="todo-item-container">
            <h3>{todo.text}</h3>
            <div className="buttons-container">
                {!todo.isCompleted ? (
                    <button
                        className="completed-button"
                        onClick={handleCompletedButton}
                    >
                        Mark As Completed
                    </button>
                ) : null}
                <button className="remove-button" onClick={handleRemoveButton}>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default TodoListItem;
