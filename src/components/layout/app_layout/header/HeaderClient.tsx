import Link from "next/link";
import * as S from "./style";

type HeaderClientProps = {
    clientName: string;
};

export const HeaderClient = ({clientName}: HeaderClientProps) => {
    return (
        <S.ClientContainer id="client_container">
            <Link
                target="_blank"
                href="https://inhumas.go.gov.br/"
                className="hover:border-b-2 border-neutral-content"
            >
                {clientName}
            </Link>
        </S.ClientContainer>
    );
};
