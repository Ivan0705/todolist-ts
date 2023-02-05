import React from "react";
import {FilterValuesType} from "./App";

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

type PropsType = {
    title: string,
    tasks: Array<TaskType>,
    removeTasks: (id: number) => void,
    changerFilter: (value: FilterValuesType) => void
}

function TodoList(props: PropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {
                    props.tasks.map((el, index) =>
                        <li key={index}><input type='checkbox' checked={el.isDone}/>
                            <span>{el.title}</span>
                            <button onClick={() => {
                                props.removeTasks(el.id);
                            }}>x
                            </button>
                        </li>)
                }
            </ul>
            <div>
                <button onClick={() => {
                    props.changerFilter("all")
                }}>All
                </button>
                <button onClick={() => {
                    props.changerFilter("active")
                }}>Active
                </button>
                <button onClick={() => {
                    props.changerFilter("completed")
                }}>Completed
                </button>
            </div>
        </div>
    );
}

export default TodoList;
