type ComponentWithFragmentProps = {
    title: string
}

const ComponentWithFragment = (props: ComponentWithFragmentProps) => (
    <>
        <h1>{props.title}</h1>
        <p>Text</p>
    </>
)

export default ComponentWithFragment
