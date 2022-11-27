import styled from "styled-components"

const colors = {
    red : "#eb313b",
    blue : "#3e31eb",
    green : "#31eb63",
    violet : "#b631eb",
    white : "#ededed"
}

const chooseColor = Type => {
    switch (Type) {
        case "fire" :
            return colors.red;
        case "water" :
            return colors.blue;
        case "grass" :
            return colors.green;
        case "electricity" :
            return colors.violet;
        default:
            return colors.white;
    }
}

const Input = styled.input`
    width: 200px;
    height: 25px;
    margin: 0px 10px;
    color : #000000;

    &:focus, &:hover, &:active {
        outline: none;
        box-shadow: 0px 0px 10px  ${({ Type }) => chooseColor(Type)};
    }
`;
export {Input, chooseColor};