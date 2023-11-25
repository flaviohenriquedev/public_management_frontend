import { TButton } from '@/types/Global'
import tw from 'tailwind-styled-components'

interface ButtonProps {
    classbutton: TButton
    height?: string
}

export const Container = tw.button<ButtonProps>`

    ${(p) => p.classbutton === 'primary' ? "btn btn-info" :
        p.classbutton === 'success' ? "btn btn-success" :
            p.classbutton === 'warning' ? "btn btn-warning" :
                p.classbutton === 'danger' ? "btn btn-error" : "btn btn-info"}
                
    ${(p) => p.height && p.height.length > 0 ? `${p.height}` : "max-h-[1.8rem]"}

    flex
    justify-center
    items-center
    w-auto
    px-3
    min-w-[6rem]
    min-h-[2rem]
    rounded-md
    
    text-[10pt]
    text-white

    transition-all
    duration-100
    
    active:scale-95
`
export const Title = tw.p``

export const Icon = tw.div``