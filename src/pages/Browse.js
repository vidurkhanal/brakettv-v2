import React, { useContext } from "react";
import { FirebaseContext } from "../context/firebase";

function Browse() {
  const { firebase } = useContext(FirebaseContext);
  const signOut = () => {
    firebase.auth().signOut();
  };
  return (
    <>
      <h1>HELLLO FROM BROWSE</h1>
      <button onClick={signOut}>Sign Out.</button>
    </>
  );
}

export default Browse;
