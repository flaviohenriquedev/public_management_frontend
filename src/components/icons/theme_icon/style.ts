import tw from 'tailwind-styled-components'

interface ThemeIconProps {
    bg: string
}


export const Container = tw.div`
    flex
    gap-2
    p-3
    bg-base-300
`

export const ThemeIcon = tw.div<ThemeIconProps>`

    ${(p) => p.bg}

    w-4
    h-9
    rounded-md
`