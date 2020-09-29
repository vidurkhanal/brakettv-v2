import React from 'react'
import { Container, Picture, Title, UserName, List, Item } from "./styles/profiles";

export const Profiles = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Profiles.Picture = function ProfilesPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`} />
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Profiles.UserName = function ProfilesUserName({ children, ...restProps }) {
    return <UserName {...restProps}>{children}</UserName>
}

Profiles.User = function ProfilesUser({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>
}

Profiles.List = function ProfilesList({ children, ...restProps }) {
    return <List {...restProps}>{children}</List>
}