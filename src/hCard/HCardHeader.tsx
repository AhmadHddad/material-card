import React from "react";
import classNames from "classnames";
import useHCardHeaderStyles from "./hCardHeaderStyle";
import { makeStyles } from "@mui/styles";

export type HCardHeaderProps = {
  classes?: typeof useHCardHeaderStyles,
  className?: string,
  children: any | JSX.Element,
  text?: boolean,
  plain?: boolean,
  image?: boolean,
  stats?: boolean,
  signup?: boolean,
  contact?: boolean,
  color?: ("warning" |
    "success" |
    "danger" |
    "info" |
    "primary" |
    "rose"),
  icon?: boolean,
  component?: (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => JSX.Element,
  rest?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
}

export function HCardHeader(props: HCardHeaderProps) {
  const {
    className,
    children,
    color,
    plain,
    image,
    contact,
    component,
    signup,
    stats,
    icon,
    text,
    ...rest
  } = props;

  const classes = Object.assign(makeStyles(useHCardHeaderStyles)(props), props.classes) as any;

  const RenderedComponent = component || ((props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => <div {...props} />);

  return (
    <RenderedComponent className={classNames({
      [classes.cardHeader]: true,
      [classes.cardHeaderPlain]: plain,
      [classes.cardHeaderImage]: image,
      [classes.cardHeaderContact]: contact,
      [classes.cardHeaderSignup]: signup,
      [classes.cardHeaderStats]: stats,
      [classes[color + "CardHeader"]]: !!color,
      [classes.cardHeaderIcon]: icon,
      [classes.cardHeaderText]: text,
      [className || ""]: className !== undefined,
    })} {...rest}>
      {children}
    </RenderedComponent >
  );
}
