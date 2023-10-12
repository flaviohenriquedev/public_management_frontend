import dynamic from 'next/dynamic'

const ToggleThemeNoSSR= dynamic(() => import('../../../actions/toggle_theme/ToggleTheme'), {ssr: false})

export const HeaderThemes = () => {
    return (
        <ToggleThemeNoSSR/>
    );
};
