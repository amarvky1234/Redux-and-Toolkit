import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, setFilter, toggleTodo } from "./todoSlice";

function TodoList() {
    const [title, setTitle] = useState("");

    const dispatch = useDispatch();

    const { todos, filter } = useSelector(
        (state) => state.todolistR
    );

    const handleAdd = () => {
        if (!title.trim()) return;

        dispatch(addTodo(title));
        setTitle("");
    }

    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    })

    return (
        <div className="container mt-5">
            <div className="card shadow">
                <div className="card-header">
                    <h2>Redux Todo App</h2>
                </div>

                <div className="card-body">

                    <div className="input-group mb-3">
                        <input type="text"
                            className="form-control"
                            placeholder="Enter Todo"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <button className="btn btn-primary"
                            onClick={handleAdd}
                        >
                            Add
                        </button>
                    </div>

                    <div className="mb-3">
                        <button className={`btn me-2 ${filter === "all"
                                ? "btn-dark" : "btn-outline-dark"
                            }`}
                            onClick={() => dispatch(setFilter("all"))}
                        >
                            All
                        </button>

                        <button className={`btn me-2 ${filter === "active"
                                ? "btn-warning" : "btn-outline-warning"
                            }`}
                            onClick={() => dispatch(setFilter("active"))}
                        >
                            Active
                        </button>

                        <button className={`btn ${filter === "completed"
                                ? "btn-success" : "btn-outline-success"
                            }`}
                            onClick={() => dispatch(setFilter("completed"))}
                        >
                            Completed
                        </button>
                    </div>

                    <ul className="list-group">
                        {filteredTodos.map((todo) => (
                            <li key={todo.id}
                                className="list-group-item fw-bold d-flex justify-content-between align-items-center"
                            >
                                <span style={{
                                    textDecoration: todo.completed
                                        ? "line-through" : "none",
                                }}
                                >
                                    {todo.title}
                                </span>

                                <div>
                                    <button className="btn btn-success btn-sm me-2"
                                        onClick={() => dispatch(toggleTodo(todo.id))}
                                    >
                                        {todo.completed ? "Undo" : "Done"}
                                    </button>

                                    <button className="btn btn-danger btn-sm"
                                        onClick={() => dispatch(deleteTodo(todo.id))}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {filteredTodos.length === 0 && (
                        <h5 className="text-center mt-3">
                            No Todos Found
                        </h5>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TodoList;