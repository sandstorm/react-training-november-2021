import React from "react"
import useCounter from "./useCounter"

type Props = {
    step: number
}

const CounterWithCustomHook = (props: Props) => {
    const {count, decrement, increment} = useCounter(0, props.step)

    return (
        <div className="counter">
            <p>count: {count}</p>
            <button onClick={decrement}>Decrease</button>
            <button onClick={increment}>Increase</button>
        </div>
    )
}

export default React.memo(CounterWithCustomHook)
