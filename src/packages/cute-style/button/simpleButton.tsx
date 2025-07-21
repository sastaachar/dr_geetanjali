import React from "react";
import styles from "./button.module.scss";

export const SimpleButton: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = (props) => {
  const className = props.className || styles.simpleButton;
  return (
    <button {...props} className={className}>
      {props.children}
    </button>
  );
};
