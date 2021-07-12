import styled from "styled-components";

export const Main = styled.main`
    max-width: 800px;
    margin: 0 auto;
    padding: 0 15px 25px;

    .room-title {
        margin: 32px 0 24px;
        display: flex;
        align-items: flex-start;

        span {
            margin-top: 5px;
            margin-left: 16px;
            background: ${props => props.theme.colors.secondary};
            border-radius: 9999px;
            padding: 8px 16px;
            color: #fff;
            font-weight: 500;
            font-size: 14px;
            min-width: 100px;
        }
    }
`;