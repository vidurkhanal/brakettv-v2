import React from 'react'
import * as ROUTES from '../constants/Routes'
import Logo from '../logo.png'
import Header from "../components/header";
import { Profiles } from '../components/profiles'

export const SelectProfileContainer = ({ user, setProfile }) => {
    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src={Logo} alt="Braket TV Logo." />
                </Header.Frame>
            </Header>
            <Profiles>
                <Profiles.Title>Who's Watching ?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User onClick={() => {
                        const newProfile = { displayName: user.displayName, photoURL: user.photoURL }
                        // setTimeout(() => {
                        setProfile(newProfile)
                        sessionStorage.setItem('currentProfile', JSON.stringify(newProfile))
                        // }, 3000);

                    }}>
                        <Profiles.Picture src={user.photoURL} />
                        <Profiles.UserName>{user.displayName}</Profiles.UserName>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    )
}