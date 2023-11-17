import {TPageTab} from "@/types/Global";
import {useState} from "react";

interface TabsProps {
    tab: TPageTab;
}

export function Tabs({ tab } : TabsProps) {
    const [showBreadCrumb, setShowBreadCrumb] = useState<boolean>(false);
    return (
        <li onClick={() => setShowBreadCrumb(!showBreadCrumb)}
            className="w-auto text-[10pt] px-2 bg-primary rounded-sm relative hover:cursor-pointer">
            {tab.label}
            {tab.breadcrumbs && showBreadCrumb && (
                <ul className="absolute bg-base-200 w-full h-auto p-2 left-0">
                    {tab.breadcrumbs.map(bc => (
                        <li>
                            {bc.title}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    )
}