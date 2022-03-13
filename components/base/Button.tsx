import { MouseEventHandler } from "react";
import styles from "../../styles/components/Button.module.scss";

export type ButtonType = "button" | "submit" | "reset" | undefined;

export type ButtonProps = {
  type: ButtonType;
  className?: string;
  onClick?: MouseEventHandler;
};

const Button: React.FC<ButtonProps> = (props) => {
  const buttonClassList: string[] = ["button"];
  if (props.className) {
    buttonClassList.push(...props.className.split(" "));
  }

  const buttonClass: string = buttonClassList
    .map((cls) => styles[cls])
    .join(" ");

  if (props.onClick) {
    return (
      <button type={props.type} className={buttonClass} onClick={props.onClick}>
        {props.children}
      </button>
    );
  }

  return (
    <button type={props.type} className={buttonClass}>
      {props.children}
    </button>
  );
};

export default Button;
