import { ButtonHTMLAttributes } from "react";

import { Content } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean
}

export function Button({isOutlined = false, ...props}: ButtonProps) {
    return (
        <Content
            className={`button ${isOutlined ? 'outlined' : ''}`}
            {...props} 
        />
    );
}