import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@mui/styles';
import hCardIconStyle from './hCardIconStyle';

export type HCardIconProps = {
  classes?: typeof hCardIconStyle;
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

export default function HCardIcon(props: HCardIconProps) {
  const { className, children, component, color, ...rest } = props;

  const classes = Object.assign(
    makeStyles(hCardIconStyle)(props),
    props.classes
  ) as any;

  const cardIconClasses = classNames({
    [classes.cardIcon]: true,
    [classes[color + 'CardHeader']]: color,
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
    <RenderedComponent className={cardIconClasses} {...rest}>
      {children}
    </RenderedComponent>
  );
}
