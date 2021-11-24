import { memo } from "react"
import './TodoListItem.css'

type Props = {
    title: string
    completed: boolean
}

const TodoListItem = (props: Props) => (
    <li className="todo-list-item">
        <input type="checkbox" checked={props.completed} readOnly />
        <span>{props.title}</span>
    </li>
)

export default memo(TodoListItem)