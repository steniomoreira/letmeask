import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        transition: .8s;
    }

    body, input, button, textarea {
        font: 400 16px 'Roboto', sans-serif;
    }

    input {
        &:focus {
            outline: none;
        }
    }

    textarea {
        transition: .9s;
        background: ${props => props.theme.colors.input};
        border: 0;
        color: ${props => props.theme.colors.text};

        &:focus {
            outline: none;
        }        
    }
`;