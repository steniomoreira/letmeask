import "styled-components";

declare module 'styled-components'{
    export interface DefaultTheme {
        mode: string,
        colors: {
            primary: string,
            secondary: string,
            background: string,
            text: string,
            input: string,
            highlight: string,
            answer: string,
        },
    }
}

