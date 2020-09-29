import React from "react";
import { Link } from "react-router-dom";
import { Background, Container, Logo, ButtonLink, Feature, Text, FeatureCallOut, Mask, DarkMask } from "./styles/header";

function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Mask = function HeaderMask({ children, ...restProps }) {
  return <Mask {...restProps}>{children}</Mask>;
}

Header.DarkMask = function HeaderDarkMask({ children, ...restProps }) {
  return <DarkMask {...restProps}>{children}</DarkMask>;
}

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
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
