import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid black;
    padding-bottom: 20px; 

    div {
        flex: 1
    }

    .PriceButton {
        display: flex;
        justify-content: space-between;
    }

    img {
        max-width: 80px;
        object-fit: contain;
        margin-right: 40px;
    }
`;