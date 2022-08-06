import React from 'react';
import classNames from 'classnames';
import hCardAvatarStyle from './hCardAvatarStyle';
import { makeStyles } from '@mui/styles';

export type HCardAvatarProps = {
  children: any | JSX.Element;
  className?: string;
  plain?: boolean;
  profile?: boolean;
  testimonial?: boolean;
  testimonialFooter?: boolean;
  component?: (
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
  ) => JSX.Element;
  classes?: typeof hCardAvatarStyle;
  rest?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
};

export default function HCardAvatar(props: HCardAvatarProps) {
  const {
    children,
    className,
    plain,
    profile,
    testimonial,
    testimonialFooter,
    component,
    ...rest
  } = props;
  const classes = Object.assign(
    makeStyles(hCardAvatarStyle)(props),
    props.classes
  );

  const RenderedComponent =
    component ||
    ((
      props: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
      >
    ) => <div {...props} />);

  const cardAvatarClasses = classNames({
    [classes.cardAvatar]: true,
    [classes.cardAvatarProfile]: profile,
    [classes.cardAvatarPlain]: plain,
    [classes.cardAvatarTestimonial]: testimonial,
    [classes.cardAvatarTestimonialFooter]: testimonialFooter,
    [className || '']: className !== undefined,
  });
  return (
    <RenderedComponent className={cardAvatarClasses} {...rest}>
      {children}
    </RenderedComponent>
  );
}
