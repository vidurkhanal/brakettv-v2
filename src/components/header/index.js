import React from "react";
import { Link } from "react-router-dom";
import { Background, Container, Logo, ButtonLink } from "./styles/header";

function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <Link to={to}>
      <Logo {...restProps} />
    </Link>
  );
};

Header.ButtonLink = function HeaderButtonLink({ to, children, ...restProps }) {
  return (
    <ButtonLink {...restProps} to={to}>
      {children}
    </ButtonLink>
  );
};

export default Header;
