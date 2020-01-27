import React from 'react';
import './Button.scss';

interface Button {
    href?: string | undefined;
    label: string;
    target?: string | boolean | undefined;
    callback?: Function;
    form?: string | undefined;
    classes?: string | undefined;
    toggle?: boolean | undefined;
    border?: string | undefined;
    borderSize?: number | undefined;
    type?: "button" | "submit" | "reset" | undefined;
    color?: string | undefined;
    text?: string | undefined;
    width?: string | undefined;
}

export interface Options {
    [option: string]: any;
}

function getClass(options: Options) {
  const widths = ["small", "third", "half", "full"];
  const {color, text, width, border, borderSize, classes} = options;

  return `button ${color} ${text} button-${widths[Number(width)]}
  ${border} border-size-${borderSize} hvr-ripple-out
  ${classes}`;
}

function Button(props: Button) {
  const {
    href = false,
    type = "submit",
    form = undefined,
    callback = undefined,
    label,
    target = "_self",
    classes = "",
    toggle = "false",
    border = "border-primary",
    borderSize = "1",
    color = "bg-primary",
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

  const handleClick = () => {
    if (form) {
      const getForm = document.querySelector(`form#${form}`) as HTMLFormElement;

      if (getForm) {
        getForm.addEventListener('submit', (event) => {
          event.preventDefault();
          if (getForm.checkValidity() && callback) callback();
        });
      }
    }
  };

  return (
    <button type={type} className={getClass({color, text, width, border, borderSize, classes})} {...opts} onClick={handleClick} >
      {label}
    </button>
  );
}

export default Button;
