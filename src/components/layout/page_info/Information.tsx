import {HTMLAttributes} from "react";

interface Information extends HTMLAttributes<HTMLDivElement> {
    title?: string
    description?: string
}

export default function Information({ title, description } : Information) {
    return (
        <div>
            <div>
                <label className="font-bold">{title}</label>: <label>{description}</label>
            </div>
        </div>
    )
}