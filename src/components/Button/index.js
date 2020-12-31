import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import "./index.scss";

export default function Button(props) {
  const className = [props.className];
  if (props.isPrimary) className.push("btn btn-primary");
  if (props.isPrimaryOutline) className.push("btn btn-primary-outline");
  if (props.isLarge) className.push("btn btn-lg");

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={className.join(" ")}
          onClick={onClick}
          style={props.style}
        >
          {props.children}
        </Link>
      );
    }
  }
  return (
    <button
      className={className.join(" ")}
      onClick={onClick}
      style={props.style}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  className: propTypes.string,
  type: propTypes.string,
  isPrimary: propTypes.bool,
  isPrimaryOutline: propTypes.bool,
  isExternal: propTypes.bool,
  isLarge: propTypes.bool,
  type: propTypes.oneOf(["button", "link"]),
  onClick: propTypes.func,
  href: propTypes.string,
};
