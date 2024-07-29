// src/Todo.js
import React, { useState } from 'react';

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editTask, setEditTask] = useState('');

    const addTask = () => {
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const startEdit = (index) => {
        setEditIndex(index);
        setEditTask(tasks[index]);
    };

    const saveEdit = () => {
        const updatedTasks = tasks.map((t, i) => (i === editIndex ? editTask : t));
        setTasks(updatedTasks);
        setEditIndex(null);
        setEditTask('');
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={addTask}>Add</button>
            <ul>
                {tasks.map((t, index) => (
                    <li key={index}>
                        {editIndex === index ? (
                            <div>
                                <input
                                    type="text"
                                    value={editTask}
                                    onChange={(e) => setEditTask(e.target.value)}
                                />
                                <button onClick={saveEdit}>Save</button>
                                <button onClick={() => setEditIndex(null)}>Cancel</button>
                            </div>
                        ) : (
                            <div>
                                {t}
                                <button onClick={() => startEdit(index)}>Edit</button>
                                <button onClick={() => deleteTask(index)}>Delete</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
