import React from 'react';
import classNames from 'classnames';
import useHTableStyle from './hCardBodyStyle';
import { makeStyles } from '@mui/styles';

export type HCardBodyProps = React.DetailedHTMLProps<
React.HTMLAttributes<HTMLDivElement>,
HTMLDivElement
> & {
  classes?: typeof useHTableStyle;
  className?: string;
  children: any | JSX.Element;
  background?: boolean;
  plain?: boolean;
  formHorizontal?: boolean;
  pricing?: boolean;
  signup?: boolean;
  color?: boolean;
  profile?: boolean;
  calendar?: boolean;
  component?: (
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
  ) => JSX.Element;
};

export default function HCardBody({ ...props }: HCardBodyProps) {
  const classes = Object.assign(
    makeStyles(useHTableStyle)(props),
    props.classes
  );
  const {
    className,
    children,
    background,
    plain,
    formHorizontal,
    pricing,
    signup,
    color,
    profile,
    calendar,
    component,
    ...rest
  } = props;

  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [classes.cardBodyBackground]: background,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyFormHorizontal]: formHorizontal,
    [classes.cardPricing]: pricing,
    [classes.cardSignup]: signup,
    [classes.cardBodyColor]: color,
    [classes.cardBodyProfile]: profile,
    [classes.cardBodyCalendar]: calendar,
    [className || '']: className !== undefined,
  });

  const RenderedComponent =
    component ||
    ((
      props: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
      >
    ) => <div {...props} />);

  return (
    <RenderedComponent className={cardBodyClasses} {...rest}>
      {children}
    </RenderedComponent>
  );
}
