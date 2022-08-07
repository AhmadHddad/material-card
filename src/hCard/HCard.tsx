import React from "react";
import classNames from "classnames";
import useCardStyle from "./hCardStyle";
import { makeStyles } from "@mui/styles";


export type HCardProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  classes?: typeof useCardStyle,
  className?: string,
  children: any | JSX.Element,
  background?: boolean,
  plain?: boolean,
  blog?: boolean,
  pricing?: boolean,
  raised?: boolean,
  color?: ("primary" |
    "info" |
    "success" |
    ""|
    "warning" |
    "danger" |
    "rose"),
  profile?: boolean,
  product?: boolean,
  chart?: boolean,
  testimonial?: boolean,
  login?: boolean,
  component?: (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => JSX.Element,
}

export default function HCard(props: HCardProps) {
  const {
    className,
    children,
    plain,
    profile,
    blog,
    raised,
    component,
    background,
    pricing,
    color,
    product,
    testimonial,
    chart,
    login,
    ...rest
  } = props;
  const classes = Object.assign(makeStyles(useCardStyle)(props), props.classes)


  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile || testimonial,
    [classes.cardBlog]: blog,
    [classes.cardRaised]: raised,
    [classes.cardBackground]: background,
    [classes.cardPricingColor]:
      (pricing && color !== undefined) || (pricing && background !== undefined),
    [classes[color || "danger"]]: !!color,
    [classes.cardPricing]: pricing,
    [classes.cardProduct]: product,
    [classes.cardChart]: chart,
    [classes.cardLogin]: login,
    [className || ""]: className !== undefined,
  });

  const RenderedComponent = component || ((props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => <div {...props} />);

  return (
    <RenderedComponent className={cardClasses} {...rest}>
      {children}
    </RenderedComponent>
  );
}

