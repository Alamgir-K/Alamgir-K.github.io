import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 2px solid black;
    border-radius: 20px;
    
    button {
        border-radius: 0 0 20px 20px;
    }

    img {
        max-height: 200px;
        object-fit: contain;
        padding-top:20px
    }

    div h2, p, h3 {
        padding: 1rem;
        margin: 1rem;
    }

    div {
        padding-top: 2rem;
        margin-top: 2rem;
        height: 100%;
        background-color: rgb(0,0,0,0.1);
    }
`;