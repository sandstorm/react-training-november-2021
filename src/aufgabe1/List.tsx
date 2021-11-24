type ListProps = {
    items: Array<{ id: string, content: string}>
}

const List = (props: ListProps) => (
    <ul>
        {/* WARNING: key prop has to be unique and should be the identity of the entry in it's domain */}
        {props.items.map(item => <li key={item.id}>{item.content}</li>)}
    </ul>
)

export default List
