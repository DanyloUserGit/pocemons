import styled from "styled-components";
import { chooseColor } from "./Input";

const Button = styled.div`
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    width: 150px;
    height: 50px;
    background-color: #548f66;
    color: #ffffff;
    transition: 0.5s;
    cursor: pointer;
    position: relative;
    left: 140px;
    top: 50px;
    
    &:hover, &:focus{
        background-color: ${({ Type }) => chooseColor(Type)};
    }
`;

export default Button;