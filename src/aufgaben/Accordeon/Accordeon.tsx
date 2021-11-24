import { FC, useCallback, useState } from "react"
import './Accordeon.css'

type Props = {
    title: string
}

const Accordeon: FC<Props> = (props) => {
    // this component re-renders every time this state (isExpanded) changes (exactly like props)
    const [isExpanded, setExpanded] = useState(false)
    
    const handleClick = useCallback(() => setExpanded(prev => !prev), [])

    return (
        <div className="accordeon">
            <h2 className="accordeon__title" onClick={handleClick}>{props.title}</h2>
            {/* if isExpanded == true (truthy) then everything after the "&&" is evaluated (rendered) */}
            {isExpanded && props.children}
        </div>
    )
}

export default Accordeon