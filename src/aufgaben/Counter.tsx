import React, { useCallback, useState } from "react"

type Props = {
    step: number
}

const Counter = (props: Props) => {
    // this component re-renders every time "count" changes
    const [count, setCount] = useState(0)

    // this function will be memoized and only created again (with new references) every time the "setCount" function or "props.step" changes
    const handleIncrease = useCallback(() => setCount(prevCount => prevCount + props.step), [setCount, props.step])
    // this function will be memoized and only created again (with new references) every time the "setCount" function, "count" or "props.step" changes
    const handleDecrease = useCallback(() => setCount(count - props.step), [count, setCount, props.step])

    // Event handlers are functions that (like in JS DOM) get an event as argument
    const clickHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        console.log(`you clicked this: ${event.currentTarget.innerHTML}`)
    }

    return (
        <div className="counter">
            <p>count: {count}</p>
            <button onClick={handleDecrease}>Decrease</button>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={clickHandler}>log me to console</button>
        </div>
    )
}

export default React.memo(Counter)
