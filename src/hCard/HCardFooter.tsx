import React from 'react';
import classNames from 'classnames';
import useCardFooterStyles from './hCardFooterStyle';
import { makeStyles } from '@mui/styles';

export type HCardFooterProps = {
  classes?: typeof useCardFooterStyles;
  className?: string;
  children: any | JSX.Element;
  chart?: boolean;
  plain?: boolean;
  pricing?: boolean;
  stats?: boolean;
  testimonial?: boolean;
  profile?: boolean;
  product?: boolean;
  component?: (
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
  ) => JSX.Element;
  rest?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
};

export default function HCardFooter(props: HCardFooterProps) {
  const {
    className,
    children,
    plain,
    profile,
    pricing,
    testimonial,
    stats,
    chart,
    component,
    product,
    ...rest
  } = props;
  const classes = Object.assign(
    makeStyles(useCardFooterStyles)(props),
    props.classes
  );

  const cardFooterClasses = classNames({
    [classes.cardFooter]: true,
    [classes.cardFooterPlain]: plain,
    [classes.cardFooterProfile]: profile || testimonial,
    [classes.cardFooterPricing]: pricing,
    [classes.cardFooterTestimonial]: testimonial,
    [classes.cardFooterStats]: stats,
    [classes.cardFooterChart]: chart || product,
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
    <RenderedComponent className={cardFooterClasses} {...rest}>
      {children}
    </RenderedComponent>
  );
}
