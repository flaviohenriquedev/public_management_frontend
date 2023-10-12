import * as S from './style'
import {HTMLAttributes, ReactNode} from "react";
import {Table} from "@/components/data_display/table/index";

interface TableRowProps extends HTMLAttributes<HTMLDivElement>{
    children: ReactNode
    withIndex?: boolean
}
export function TableRow({children, onDoubleClick, withIndex = true} : TableRowProps) {
    return (
        <S.Row onDoubleClick={onDoubleClick}>
            {children}
        </S.Row>
    )
}