import styled from "styled-components";
import IconButton from "@mui/material/IconButton";

export const Wrapper = styled.div`
    margin-top: 40px;
    margin-right: 80px;
    margin-left: 40px;
    margin-bottom: 40px;
`;

export const CustomButton = styled(IconButton)`
    position: fixed;
    z-index: 1000;
    right: 20px;
    top: 40px;
`