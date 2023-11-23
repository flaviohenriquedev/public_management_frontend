import * as S from "./style";
import {ReactNode} from "react";

interface PageFooterProps {
    children: ReactNode
}

export function PageFooter({ children } : PageFooterProps) {
    return (
        <S.Footer id="page_layout_footer">
            {children}
        </S.Footer>
    )
}