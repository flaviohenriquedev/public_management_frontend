import tw from 'tailwind-styled-components'

interface TabProps {
    active: boolean
}
export const Tab = tw.div<TabProps>`
    ${(p) => p.active && 'tab-active'}

    tab
    tab-lifted
    tab-sm
`