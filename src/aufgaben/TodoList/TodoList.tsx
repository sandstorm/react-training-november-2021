import { memo, useEffect, useState } from "react"
import TodoListItem from "./TodoListItem"

type Todo = {
    userId: number
    id: number
    title: string
    completed: boolean
}

const fetchTodos = async (url: string) => {
    const response = await fetch(url)
    const todoList = await response.json() as unknown

    // HINT: here we should verify, that the API response looks exactly like we expect (e.g. with JSON validation or type guards)
    // For the purpose of this example we just assume it's correct and tell TS that todoList has the type TodoList
    // WARNING: not do this in production!
    return todoList as Array<Todo>
}

type Props = {
    url: string
}

const TodoList = (props: Props) => {
    const [todos, setTodos] = useState<Array<Todo>>([])

    useEffect(() => {
        fetchTodos(props.url).then(setTodos)
    }, [props.url, setTodos])

    return (
        <div>
            <h2>TodoList</h2>
            <ul>
                {todos.map(todo => <TodoListItem key={todo.id} completed={todo.completed} title={todo.title} />)}
            </ul>
        </div>
    )
}

export default memo(TodoList)