import React, { useContext, useEffect, useState } from 'react'
import { SelectProfileContainer } from './profiles'
import { FirebaseContext } from '../context/firebase'
import Loading from '../components/loading'
import Header from '../components/header'
import * as ROUTES from '../constants/Routes'
import Logo from '../logo.png'

export function BrowserContainer({ slides }) {
    const [profile, setProfile] = useState(JSON.parse(sessionStorage.getItem('currentProfile')))
    const [loading, setLoading] = useState(true)
    const { firebase } = useContext(FirebaseContext)
    const user = firebase.auth().currentUser || {}
    useEffect(() => {
        // setTimeout(() => {
        setLoading(false)
        // }, 3000);

    }, [profile])

    return profile ? (
        <>
            {loading ? <Loading src={profile.photoURL} /> : <Loading.ReleaseBody />}
            <Header src="enolaholmes">
                <Header.DarkMask>
                    <Header.Frame>
                        <Header.Logo to={ROUTES.HOME} src={Logo} alt="Logo Braket TV" />
                    </Header.Frame>
                    <Header.Feature>
                        <Header.FeatureCallOut>Watch Enola Holmes Now.</Header.FeatureCallOut>

                        <Header.Text>When Enola Holmes-Sherlock's teen sister-discovers her mother missing, she sets off to find her, becoming a super-sleuth in her own right as she outwits her famous brother and unravels a dangerous conspiracy around a mysterious young Lord.</Header.Text>
                    </Header.Feature>
                </Header.DarkMask>
            </Header>
        </>) : (<SelectProfileContainer user={user} setProfile={setProfile} />)


}