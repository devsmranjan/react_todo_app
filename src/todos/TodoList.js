import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import { markTodoAsCompleted, removeTodo } from './actions';
import './TodoList.css';
import { loadTodos } from './thunks';

const TodoList = ({
    isLoading,
    todos,
    onRemovePressed,
    onCompletedPressed,
    startLoadingTodos,
}) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);

    const loadingMessage = <div>Loading todos...</div>;

    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map((todo, i) => (
                <TodoListItem
                    key={i}
                    todo={todo}
                    onRemovePressed={onRemovePressed}
                    onCompletedPressed={onCompletedPressed}
                />
            ))}
        </div>
    );

    return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
    todos: state.todos,
    isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: (text) => dispatch(removeTodo(text)),
    onCompletedPressed: (text) => dispatch(markTodoAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
