import React, { useContext, useEffect, useState } from 'react'
import { SelectProfileContainer } from './profiles'
import Fuse from "fuse.js";
import { FirebaseContext } from '../context/firebase'
import * as ROUTES from '../constants/Routes'
import Logo from '../logo.png'
import Loading from '../components/loading'
import Header from '../components/header'
import Card from '../components/card'
import Player from '../components/player'
import {FooterContainer} from '../containers/footer'

export function BrowserContainer({ slides }) {
    const [category,setCategory] = useState('films')
    const [searchTerm, setSearchTerm] = useState("");
    const [profile, setProfile] = useState(JSON.parse(sessionStorage.getItem('currentProfile')))
    const [loading, setLoading] = useState(true)
    const { firebase } = useContext(FirebaseContext)
    const user = firebase.auth().currentUser || {}
    const [slideRows,setSlideRows] = useState([])

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, [profile])
          // CHANGE THE VALUE TO 3000 WHILE DEPLOYING.
    const signOut = () => {
        firebase.auth().signOut()
        sessionStorage.removeItem('currentProfile')
    }

    useEffect(()=>{
        setSlideRows(slides[category])
    },[slides,category])

    const videoRandomizer = () => {
      return Math.floor((Math.random()*3)+1)
    }

    return profile ? (
      <>
        {loading ? <Loading src={profile.photoURL} /> : <Loading.ReleaseBody />}
        <Header src="enolaholmes" dontShowOnSmallViewPort>
          <Header.DarkMask dontShowOnSmallViewPort>
            <Header.Frame>
              <Header.Group>
                <Header.Logo to={ROUTES.HOME} src={Logo} alt="Logo Braket TV" />
                <Header.TextLink active={category === 'films' ? 'true': 'false'}
                onClick={()=> setCategory('films')}
                >Movies</Header.TextLink>
                <Header.TextLink active={category === 'series' ? 'true': 'false'}
                onClick={()=> setCategory('series')}>Series</Header.TextLink>
              </Header.Group>
              <Header.Group>
                <Header.Search
                  setSearchTerm={setSearchTerm}
                  searchTerm={searchTerm}
                />
                <Header.Profile>
                  <Header.Picture src={user.photoURL} />
                  <Header.Dropdown>
                    <Header.Group>
                      <Header.Picture src={user.photoURL} />
                      <Header.TextLink>{user.displayName}</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                      <Header.TextLink onClick={signOut}>
                        Log Out
                      </Header.TextLink>
                    </Header.Group>
                  </Header.Dropdown>
                </Header.Profile>
              </Header.Group>
            </Header.Frame>
            <Header.Feature>
              <Header.FeatureCallOut>
                Watch Enola Holmes Now.
              </Header.FeatureCallOut>

              <Header.Text>
                When Enola Holmes-Sherlock's teen sister-discovers her mother
                missing, she sets off to find her, becoming a super-sleuth in
                her own right as she outwits her famous brother and unravels a
                dangerous conspiracy around a mysterious young Lord.
              </Header.Text>
              <Header.PlayButton>Play</Header.PlayButton>
            </Header.Feature>
           
          </Header.DarkMask>
        </Header>

        <Card.Group>
{slideRows.map(slideItem=> (
    <Card key={`${category}=${slideItem.title.toLowerCase()}`}>
        <Card.Title>{slideItem.title}</Card.Title>
        <Card.Entities>
            {slideItem.data.map(item=>(
                <Card.Item key={item.docId} item={item}>
                    <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}/>
                    <Card.Meta>
                        <Card.SubTitle>{item.title}</Card.SubTitle>
                        <Card.Text>{item.description}</Card.Text>
                    </Card.Meta>
                </Card.Item>
            ))}
        </Card.Entities>
        <Card.Feature category={category}>
          <Player>
              <Player.Button/>
              <Player.Video src={`/videos/${videoRandomizer()}.mp4`}/>
          </Player>
        </Card.Feature>
    </Card>
    
))}
        </Card.Group>
        <FooterContainer />
      </>
    ) : (
      <SelectProfileContainer user={user} setProfile={setProfile} />
    );


}