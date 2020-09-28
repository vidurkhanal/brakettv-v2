import React, { useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import Form from "../components/form";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../constants/Routes";

function SignIn() {
  const { firebase } = useContext(FirebaseContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const isInvalid = password === "" || email === "";
  const history = useHistory();

  const handleSignIn = (ev) => {
    ev.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        // Push To Browse...
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
          <Form.Base onSubmit={handleSignIn}>
            <Form.Title>Sign In</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
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
              // onClick={handleSignIn}
            >
              Sign In{" "}
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New To BraketTV !?{" "}
            <Form.Link to={ROUTES.SIGN_UP}>Join Today</Form.Link>.
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

export default SignIn;
