import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@mui/styles';
import hCardStyle from './hCardStyle';

export type HCardTextProps = {
  classes?: typeof hCardStyle;
  className?: string;
  children: any | JSX.Element;
  color?: 'warning' | 'success' | 'danger' | 'info' | 'primary' | 'rose';
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

export default function HCardText(props: HCardTextProps) {
  const { className, children, color, component, ...rest } = props;

  const classes = Object.assign(
    makeStyles(hCardStyle)(props),
    props.classes
  ) as any;

  const cardTextClasses = classNames({
    [classes.cardText]: true,
    [classes[color + 'CardHeader']]: !!color,
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
    <RenderedComponent className={cardTextClasses} {...rest}>
      {children}
    </RenderedComponent>
  );
}
