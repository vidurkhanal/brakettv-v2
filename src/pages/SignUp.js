import React, { useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import Form from "../components/form";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../constants/Routes";

function SignUp() {
  const { firebase } = useContext(FirebaseContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const isInvalid = password === "" || email === "" || name === "";
  const history = useHistory();

  const handleSignUp = (ev) => {
    ev.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        response.user.updateProfile({
          displayName: name,
          photoURl: Math.floor(Math.random() * 5) + 1,
        });
      })
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setError(error.message);
        setPassword("");
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Base onSubmit={handleSignUp}>
            <Form.Title>Sign Up</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Input
              placeholder="Enter Your Name"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <Form.Input
              placeholder="Enter Email Address"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              placeholder="Enter Your Password"
              autocomplete="off"
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit
              disabled={isInvalid}
              type="submit"
              style={{ backgroundColor: "#123070" }}
            >
              Sign Up{" "}
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already A Member !?{" "}
            <Form.Link to={ROUTES.SIGN_IN}>Log In</Form.Link>.
          </Form.Text>
          <Form.SmallText>
            Spamming The Form May Lead To permanent ban of your IP Address. So
            Don't Spam It.
          </Form.SmallText>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}

export default SignUp;
