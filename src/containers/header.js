import React from "react";
import Header from "../components/header";
import * as ROUTES from "../constants/Routes";
import Logo from "../logo.png";

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Mask>
        <Header.Logo to={ROUTES.HOME} src={Logo} alt="Logo Braket TV" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
        </Header.Mask>
      </Header.Frame>
      {children}
    </Header>
  );
}
