import React from "react";
import styles from "./container.module.scss";
import { cleanUndefined, cx } from "@utils";

type ContainerProps = {
  justifyContent?: React.CSSProperties["justifyContent"];
  parts?: number;
  debug_border_red?: boolean;
  debug_border_blue?: boolean;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const getStyleProps = (props: ContainerProps) => {
  const debugBorder =
    props.debug_border_blue || props.debug_border_red
      ? `1px solid ${props.debug_border_blue ? "blue" : "red"}`
      : undefined;
  return cleanUndefined({
    justifyContent: props.justifyContent,
    flexGrow: props.parts,
    border: debugBorder,
  });
};

export const Vertical = (props: ContainerProps) => {
  const { className, children, ...rest } = props;
  return (
    <div
      className={cx(styles.container, styles.container_vertical, className)}
      style={getStyleProps(props)}
      {...rest}
    >
      {children}
    </div>
  );
};
export const Horizontal = (props: ContainerProps) => {
  const { className, children, ...rest } = props;
  return (
    <div
      className={cx(styles.container, styles.container_horizontal, className)}
      style={getStyleProps(props)}
      {...rest}
    >
      {children}
    </div>
  );
};
