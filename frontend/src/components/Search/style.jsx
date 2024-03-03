import styled from "styled-components"

export const SearchContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    height: 5vh;
    padding-top: 3vh;
    z-index: 10;
    padding-left: 41.5%;
`;

export const SearchInput = styled.input`
    padding: 10px;
    font-size: 16px;
    border-radius: 30px;
    border: 3px solid #000;
    width: 300px;
    background-image: url(${props => props.icon});
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: 10px center;
    padding-left: 40px;
    outline: none;
`;

export const SearchIcon = styled.img`
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
`;
