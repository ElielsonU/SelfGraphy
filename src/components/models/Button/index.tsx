import { PropsWithChildren } from "react";
import styled from "styled-components";

interface ButtonProps extends PropsWithChildren {
    color?: string;
    bgcolor?: string;
    width?: string;
    height?: string;
    fontSize?: string;
}

export const Button = styled.button<ButtonProps>`
    color: ${({color}) => color};
    background-color: ${({bgcolor}) => bgcolor};
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
    transition: 200ms filter ease-in;

    :hover {
        filter: brightness(90%);
    }
`