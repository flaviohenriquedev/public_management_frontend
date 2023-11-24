import tw from 'tailwind-styled-components'

interface Props {
    alignment?: "left" | "center" | "right"
}

export const Container = tw.div<Props>`
    ${(p) => p.alignment === "left" ? "justify-start" :
                                                        p.alignment === "center" ? "justify-center" :
                                                        p.alignment === "right" ? "justify-end" : "justify-start"}
        
    flex
    flex-wrap
    items-end
    w-full
    mb-4
    gap-3
`