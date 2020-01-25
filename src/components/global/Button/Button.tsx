import React from 'react';
import './Button.scss';

interface Button {
    href?: string | undefined;
    label: string;
    target?: string | boolean | undefined;
    classes?: string | undefined;
    toggle?: boolean | undefined;
    border?: string | undefined;
    borderSize?: number | undefined;
    type?: string | undefined;
    color?: string | undefined;
    text?: string | undefined;
    width?: string | undefined;
}

export interface Options {
    [option: string]: string | boolean | undefined;
}

function Button(props: Button) {
  const {
    href = false,
    label,
    target = "_self",
    classes = "",
    toggle = "false",
    border = "border-red",
    borderSize = "1",
    type = "button",
    color = "bg-red",
    text = "white",
    width = 0,
  } = props;

  const opts: Options = {target};

  if (toggle) {
    opts["uk-toggle"] = toggle;
  }

  if (href) {
    opts["href"] = href;
  }

  const widths = ["small", "third", "half", "full"];

  // TODO: make this component read cleaner - create function to genereate className
  return (
    // TODO: make it so internal links use Link component
    <a
      className={`${type} ${color} ${text} button-${widths[Number(width)]}
      ${border} border-size-${borderSize} hvr-ripple-out
      ${classes}`}
      {...opts}
    >
      {label}
    </a>
  );
}

export default Button;
