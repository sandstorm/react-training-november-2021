import { memo, useEffect, useState } from "react"
import Accordeon from "../Accordeon/Accordeon"
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
    const [isCompletedFilterActive, setIsCompletedFilterActive] = useState(false)
    const [titleFilter, setTitleFilter] = useState('')

    useEffect(() => {
        fetchTodos(props.url).then(setTodos)
    }, [props.url, setTodos])

    const handleIsCompletedFilterChange = () => setIsCompletedFilterActive(!isCompletedFilterActive)

    const handleTitleFilterChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setTitleFilter(event.target.value)
    }

    const filteredTodosByCompleted = isCompletedFilterActive
        ? todos.filter(todo => todo.completed === false)
        : todos

    const filteredTodosByTitle = titleFilter.length > 0
        ? filteredTodosByCompleted.filter(todo => todo.title.includes(titleFilter))
        : filteredTodosByCompleted

    return (
        <div>
            <h2>TodoList</h2>
            
            <Accordeon title="Filters">
                <input type="text" value={titleFilter} onChange={handleTitleFilterChange} placeholder="search" />
            
                <input id="filterCompleted" type="checkbox" checked={isCompletedFilterActive} onChange={handleIsCompletedFilterChange} />
                <label htmlFor="filterCompleted">hide completed todos</label>
            </Accordeon>
            
            <ul>
                {filteredTodosByTitle.map(todo => <TodoListItem key={todo.id} completed={todo.completed} title={todo.title} />)}
            </ul>
        </div>
    )
}

export default memo(TodoList)