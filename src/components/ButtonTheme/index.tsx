import { useTheme } from '../../hooks/useTheme';
import { lighten } from 'polished';
import { FiSun } from 'react-icons/fi';

import { Content } from './styles';

interface PropsThemeButton {
    toggleTheme(): void; 
}

export default function ButtonTheme(props: PropsThemeButton) {
    const {theme} = useTheme();
    
    return(
        <Content>
            <FiSun 
                onClick={props.toggleTheme}
                title={theme.mode === 'dark' ? 'Modo light' : 'Modo dark'} 
                color={theme.mode === 'dark' ? lighten(0.1, theme.colors.secondary) : theme.colors.primary}
            />
        </Content>
    );
}