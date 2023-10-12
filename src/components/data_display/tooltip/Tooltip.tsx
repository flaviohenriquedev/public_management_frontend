import {ReactNode} from "react";

interface TooltipProps {
    children: ReactNode
    message: string
}

export function Tooltip({children, message} : TooltipProps) {
    return (
        <div className="tooltip" data-tip={message}>
            {children}
        </div>
    )
}