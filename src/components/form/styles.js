import styled from "styled-components";

export const container = styled.div`
    max-width: 1120px;
    width: 98%;
    margin: 20px auto;
    background-color: #fff;
    box-shadow: 2px 1px 2px;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    padding: 15px 0px;
    gap: 10px;

    @media (max-width: 750px) {
        display: grid;
    }
`;

export const inputContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const label = styled.label``;

export const input = styled.input`
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid #ccc;
`;

export const radiosGroup = styled.div`
    display: flex;
    align-items: center;

    input {
        margin-left: 20px;
        accent-color: black;
        margin-top: 0;
    }
`;

export const button = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: teal;
`;