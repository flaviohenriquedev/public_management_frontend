import * as S from "./style";
import {ReactNode} from "react";

interface PageLayoutFooterProps {
    children: ReactNode
}

export function PageLayoutFooter({ children } : PageLayoutFooterProps) {
    return (
        <S.Footer id="page_layout_footer">
            {children}
        </S.Footer>
    )
}