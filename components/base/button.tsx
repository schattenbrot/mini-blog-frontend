import { MouseEventHandler } from "react";
import styled from "styled-components";

export type ButtonType = "button" | "submit" | "reset" | undefined;

export type ButtonProps = {
  type: ButtonType;
  className: string;
  onClick?: MouseEventHandler;
};

const ButtonStyle = styled.button`
  background-color: white;
  border-radius: 1em;
  border: 0.125rem solid ${(props) => props.theme.colors.primary};

  &.ok {
    &:hover {
      box-shadow: 0 0.25em 1em ${(props) => props.theme.colors.primary};
    }
  }

  &.warn {
    background-color: ${(props) => props.theme.colors.status.warn};
    border: 0.125rem solid ${(props) => props.theme.colors.status.warn};

    &:hover {
      box-shadow: 0 0.25em 1em ${(props) => props.theme.colors.status.warn};
    }
  }

  &.danger {
    background-color: ${(props) => props.theme.colors.status.danger};
    border: 0.125rem solid ${(props) => props.theme.colors.status.danger};

    &:hover {
      box-shadow: 0 0.25em 1em ${(props) => props.theme.colors.status.danger};
    }
  }

  &:hover {
    scale: 1.1;
  }
`;

const Button: React.FC<ButtonProps> = (props) => {
  if (props.onClick) {
    return (
      <ButtonStyle
        type={props.type}
        className={props.className}
        onClick={props.onClick}
      >
        {props.children}
      </ButtonStyle>
    );
  }

  return (
    <ButtonStyle type={props.type} className={props.className}>
      {props.children}
    </ButtonStyle>
  );
};

export default Button;
