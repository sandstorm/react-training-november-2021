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
            <h3 className="accordeon__title" onClick={handleClick}>{isExpanded ? '-' : '+'} {props.title}</h3>
            {/* if isExpanded == true (truthy) then everything after the "&&" is evaluated (rendered) */}
            {isExpanded && props.children}
        </div>
    )
}

export default Accordeon