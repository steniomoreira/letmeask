import { useTheme } from '../../hooks/useTheme';

import logoImg from './../../assets/images/logo.svg';
import logoImgWhite from './../../assets/images/logoWhite.svg';

import { HeaderContent } from './styles';

type HeaderProps = {
    children?: React.ReactNode
}

export default function Header(props: HeaderProps) {
    const { theme } = useTheme();

    return (
        <HeaderContent>
            <div className="content">
                <img src={theme.mode === 'dark' ? logoImgWhite : logoImg} alt="Letmeask" />
                <div>
                    { props.children }
                </div>
            </div>
        </HeaderContent>
    );
}