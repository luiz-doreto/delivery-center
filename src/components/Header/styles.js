import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 64px;
    background: #fe5200;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    img {
        height: 47px;
        width: 210px;
    }

    aside {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        strong {
            color: #fff;
            margin-bottom: 4px;
        }

        button {
            color: #fff;
            text-decoration: underline;
            border: 0;
            background: none;
            border-radius: 6px;
            padding: 2px 4px;
        }
    }
`;
