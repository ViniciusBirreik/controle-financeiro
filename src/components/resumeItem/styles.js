import styled from "styled-components";

export const constainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    padding: 5px 15px;
    width: 30%;

    @media(max-width: 750px) {
        width: 20%;
        p {
            font-size: 17px;
        }
        
        span {
            font-size: 20px;
        }
        
        svg {
            display: none;
        }
    }
`;

export const header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 10px;
    margin-top: 20px;
    margin-bottom: 20px;

    svg {
        width: 25px;
        height: 25px;
    }
`;

export const headerTitle = styled.p`
    font-size: 20px;
`;

export const total = styled.span`
    font-size: 30px;
    font-weight: bold;
`;