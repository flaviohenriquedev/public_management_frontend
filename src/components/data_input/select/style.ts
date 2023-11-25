import tw from 'tailwind-styled-components'

interface SelectProps {
    width?: string
}

export const Select = tw.select<SelectProps>`
    
    ${(p) => p.width ? p.width : "flex-1" }
    
    text-secondary-content
    
    select
    select-bordered
    select-sm
`