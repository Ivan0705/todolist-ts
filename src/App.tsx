import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

export  type FilterValuesType = "all" | "completed" | "active";

function App() {
    let initTasks: Array<TaskType> = [
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ];

    let [tasks, setTasks] = useState<Array<TaskType>>(initTasks);
    let [filter, setFilter] = useState<FilterValuesType>('completed');

    function removeTask(id: number) {
        tasks = tasks.filter(t => t.id !== id);
        setTasks(tasks);
    }

    let tasksForTodoList = tasks;
    if (filter === 'completed') {
        tasksForTodoList = tasks.filter(t => t.isDone === true)
    }
    if (filter === 'active') {
        tasksForTodoList = tasks.filter(t => t.isDone === false)
    }

    function changerFilter(value: FilterValuesType) {
        setFilter(value);
    }

    return (
        <div className="App">
            <TodoList title={"What to learn"} tasks={tasksForTodoList} removeTasks={removeTask}
                      changerFilter={changerFilter}/>
        </div>
    );
}

export default App;
