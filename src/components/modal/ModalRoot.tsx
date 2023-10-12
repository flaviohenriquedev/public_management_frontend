import {ReactNode} from "react";
import * as S from './style'
import {closeModal} from "@/functions/functions";

interface ModalRootProps {
    id: string
    children: ReactNode
    title?: string
    loading?: boolean
    clearModal: () => void
}

export function ModalRoot({id, children, title, loading = false, clearModal}: ModalRootProps) {

    function handleCloseModal() {
        closeModal(id);

        setTimeout(() => {
            clearModal();
        }, 800);
    }

    return (
        <S.Container id={id}>
            <S.Children>
                <div className="flex items-center w-full bg-base-200 rounded-lg px-2">
                    <div className="flex justify-start w-full">
                        {title}
                    </div>
                    <div className="flex items-center justify-end w-full h-10 gap-2"
                    >
                        <S.Button type="minimalizer">
                            -
                        </S.Button>

                        <S.Button type="close" onClick={() => handleCloseModal()}>
                            X
                        </S.Button>
                    </div>
                </div>
                {children}
            </S.Children>
        </S.Container>
    )
}