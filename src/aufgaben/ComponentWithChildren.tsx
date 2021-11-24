import React from "react"

type Props = {
    children: React.ReactNode
}

const ComponentWithChildren = (props: Props) => (
    <div className="parent">
        {props.children}
    </div>
)

export default ComponentWithChildren
