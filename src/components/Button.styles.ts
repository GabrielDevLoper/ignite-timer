import styled, { css } from "styled-components";

export type ButtonVariants = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
    variant: ButtonVariants;
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 80px;

    ${props => css`
        background: ${buttonVariants[props.variant]}
    `}
`;