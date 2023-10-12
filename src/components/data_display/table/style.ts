import tw from 'tailwind-styled-components'

interface Props {
    alignment?: "left" | "center" | "right"
}

export const Table = tw.table`
    bg-base-100
    w-full
    border
    border-base-300
    rounded-lg
    overflow-auto
`

export const Header = tw.thead`
    bg-base-200
`

export const Body = tw.tbody`

`

export const Footer = tw.tfoot`

`

export const Row = tw.tr`
    group
`

export const Title = tw.th`
    text-[10pt]
    text-base-content
    border-2
    border-base-100
`

export const Value = tw.td<Props>`

    ${(p) => p.alignment === "left" ? "text-left" : 
                                                    p.alignment === "center" ? "text-center" :
                                                    p.align === "right" ? "text-right" : "text-left"}
    
    text-[9pt]
    px-2
    border
    border-base-200
    
    group-hover:cursor-pointer
    group-hover:bg-primary-focus
    group-hover:text-primary-content

`