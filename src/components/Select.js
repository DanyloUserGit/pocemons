import styled from "styled-components";
import { chooseColor } from "./Input";

const types = {
    fire: "fire",
    grass: "grass",
    water: "water",
    electricity: "electricity"
}

const Select = styled.select`
    width: 200px;
    height: 25px;
    margin: 0px 15px;

    &:focus, &:hover, &:active {
        outline: none;
        box-shadow: 0px 0px 10px  ${({ Type }) => chooseColor(Type)};
    }
`;

export  {Select, types};