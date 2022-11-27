import styled from "styled-components";
import { chooseColor } from "./Input";

const Label = styled.div`
    {
        color: ${({ Type }) => chooseColor(Type)};
        font: 25px bold;
        font-family: 'Rubik Microbe', cursive; 
        margin: 10px 70px;
    }
`;

export default Label;