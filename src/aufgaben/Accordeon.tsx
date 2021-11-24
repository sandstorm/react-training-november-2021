import { useCallback, useState } from "react"

const Accordeon = () => {
    // this component re-renders every time this state (isExpanded) changes (exactly like props)
    const [isExpanded, setExpanded] = useState(false)
    
    // this callback is recreated every time any variable in the dependency array ([isExpanded]) changes
    // this also rerenders the component
    // Hint: In this scenario it is obviously not neccessary to wrap the click handler into "useCallback", but
    //       if a component gets more state, it becomes a viable performance optimization
    const handleClick = useCallback(() => setExpanded(!isExpanded), [isExpanded])

    return (
        <div>
            <p onClick={handleClick}>Titel</p>
            {/* if isExpanded == true (truthy) then everything after the "&&" is evaluated (rendered) */}
            {isExpanded && <div>Content</div>}
        </div>
    )
}

export default Accordeon