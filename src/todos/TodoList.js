import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
    getTodos,
    getTodosLoading,
    getCompletedTodos,
    getIncompleteTodos,
} from './selectors';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';
import {
    loadTodos,
    markTodoAsCompletedRequest,
    removeTodoRequest,
} from './thunks';

const TodoList = ({
    isLoading,
    completedTodos,
    incompleteTodos,
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

            <h3>Incomplete: </h3>

            {incompleteTodos.map((todo, i) => (
                <TodoListItem
                    key={i}
                    todo={todo}
                    onRemovePressed={onRemovePressed}
                    onCompletedPressed={onCompletedPressed}
                />
            ))}

            <h3>Completed: </h3>
            {completedTodos.map((todo, i) => (
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
    // todos: getTodos(state),
    isLoading: getTodosLoading(state),
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
    onCompletedPressed: (id) => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
