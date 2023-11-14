import { PropsWithChildren } from "react";
import styled from "styled-components";

interface ButtonProps extends PropsWithChildren {
    color?: string;
    $backgroundcolor?: string;
    width?: string;
    height?: string;
    fontSize?: string;
}

export const Button = styled.button<ButtonProps>`
    color: ${({color}) => color};
    background-color: ${({$backgroundcolor, theme}) => $backgroundcolor || theme.white};
    width: ${({width}) => width};
    height: ${({height}) => height};
    font-size: ${({fontSize}) => fontSize || "2.4rem"};
    display: flex;
    border: none;
    justify-content: center;
    align-items: center;
    padding: 5px 15px;
    font-weight: 700;
    border-radius: 12px;
    transition: 200ms all ease-in;
    cursor: pointer;
    
    &:hover {
        filter: saturate(200%);
        text-shadow: 0px 0px 2px;  background-color: cyan;
    }
`