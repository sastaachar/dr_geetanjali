import React from "react";
import styles from "./container.module.scss";
import { cleanUndefined, cx } from "@utils";

type ContainerProps = {
  justifyContent?: React.CSSProperties["justifyContent"];
  parts?: number;
  debug_border_red?: boolean;
  debug_border_blue?: boolean;
  alignItem?: React.CSSProperties["alignItems"];
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const getRestProps = (
  props: ContainerProps
): React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> => {
  const keysToRemove: (keyof ContainerProps)[] = [
    "justifyContent",
    "alignItem",
  ];
  keysToRemove.forEach((key) => {
    delete props[key];
  });
  return props;
};

const getStyleProps = (props: ContainerProps): React.CSSProperties => {
  const debugBorder =
    props.debug_border_blue || props.debug_border_red
      ? `1px solid ${props.debug_border_blue ? "blue" : "red"}`
      : undefined;

  const overflow = props.parts !== undefined ? "auto" : undefined;

  return cleanUndefined({
    justifyContent: props.justifyContent,
    flexGrow: props.parts,
    border: debugBorder,
    alignItems: props.alignItem,
    overflow,
  });
};

export const Vertical = (props: ContainerProps) => {
  const { className, children, ...rest } = props;
  const restProps = getRestProps(rest);
  return (
    <div
      className={cx(styles.container, styles.container_vertical, className)}
      style={getStyleProps(props)}
      {...restProps}
    >
      {children}
    </div>
  );
};
export const Horizontal = (props: ContainerProps) => {
  const { className, children, ...rest } = props;
  const restProps = getRestProps(rest);
  return (
    <div
      className={cx(styles.container, styles.container_horizontal, className)}
      style={getStyleProps(props)}
      {...restProps}
    >
      {children}
    </div>
  );
};
