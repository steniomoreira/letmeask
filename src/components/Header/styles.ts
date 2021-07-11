import styled from "styled-components";;

export const HeaderContent = styled.header`
    padding: 24px;
    border-bottom: 1px solid #e2e2e2;

    .content {
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        > img {
            max-height: 45px;
        }

        svg {
            transition: .5s;
            cursor: pointer;
            font-size:20px;
            color: #835AFD;

            &:hover {
                color: #e559f9 !important;
            }

            &:last-child {
                font-size: 21px;
            }
        }

        > div {
            display: flex;
            align-items: center;
            gap: 16px;               

            button {
                height:40px;
                transition: .5s;
            }
        }
    }
`;