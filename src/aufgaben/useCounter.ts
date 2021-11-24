import { useState } from "react"

const useCounter = (initialCount: number, step: number) => {
    const [count, setCount] = useState(initialCount)

    const increment = () => setCount(count + step)
    const decrement = () => setCount(count - step)

    return {
        count,
        increment,
        decrement
    }
}

export default useCounter