import styled from "styled-components";

export const Button = styled.button`
    height: 40px;
    border-radius: 8px;
    overflow: hidden;
    margin-right: 15px;

    background:${props => props.theme.colors.background};
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    cursor: pointer;

    display: flex;
    transition: .9s;

    div {
        background: ${props => props.theme.colors.primary};
        padding: 0 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    span {
        display: block;
        align-self: center;
        flex: 1;
        padding: 0 16px 0 12px;
        min-width: 230px;
        font-size: 14px; 
        font-weight: 500;
    }    

    @media (max-width: 530px) {
        display: none;
    }
`;