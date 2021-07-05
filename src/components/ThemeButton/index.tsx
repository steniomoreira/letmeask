import { useContext } from 'react';
import Switch from 'react-switch';
import { shade } from 'polished';
import { ThemeContext } from 'styled-components';

import { Content } from './styles';

interface PropsThemeButton {
    toogleTheme(): void; 
}

export function ThemeButton(props: PropsThemeButton) {
    const {name, colors} = useContext(ThemeContext);
    return(
        <Content>
            <Switch 
                onChange={props.toogleTheme} 
                checked={name === 'dark'}
                onColor={shade(0.9, colors.primary)}
                onHandleColor={colors.background}
                activeBoxShadow="0px 0px 1px 2px #fffc35"
                checkedIcon={
                    <div
                        style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%"
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 159 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M27.463 0C27.4214 1.11733 27.4004 2.24085 27.4004 3.37038C27.4004 52.047 66.7995 91.5145 115.392 91.5145C131.009 91.5145 145.661 87.4096 158.358 80.2575C149.558 115.116 117.992 140.915 80.4 140.915C35.9963 140.915 0 104.918 0 60.5146C0 36.3844 10.6302 14.737 27.463 0Z" fill="#F9ED32"/>
                        </svg>
                    </div>
                }
                uncheckedIcon={
                    <div
                        style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%"
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14 0L16.4897 4.3125C17.4404 4.55615 18.3364 4.93579 19.1558 5.42969L23.9771 4.17847L22.6499 8.97925C23.105 9.76172 23.4575 10.6116 23.6875 11.5103L28 14L23.6875 16.4897C23.5059 17.1975 23.249 17.875 22.9258 18.5132C22.8149 18.7322 22.6963 18.9465 22.5703 19.1558L23.8218 23.9768L19.021 22.6499C18.2383 23.105 17.3887 23.4573 16.4897 23.6875L14 28L11.5103 23.6875C10.5596 23.4438 9.66309 23.064 8.84375 22.5698L4.02295 23.8213L5.34961 19.0208C4.89453 18.2383 4.54248 17.3884 4.3125 16.4897L0 14L4.3125 11.5103C4.42627 11.0671 4.56934 10.6357 4.73975 10.2185C4.93506 9.74072 5.16602 9.28149 5.42969 8.84424L4.17822 4.02319L8.979 5.3501C9.76172 4.89502 10.6113 4.54272 11.5103 4.3125L14 0Z" fill="#F9ED32"/>
                        </svg>
                    </div>
                }
            />
        </Content>
    );
}