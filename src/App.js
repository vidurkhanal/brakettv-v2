import React from "react";
import { JumbotronContainer } from "./containers/jumbotron";
import { FooterContainer } from './containers/footer'
import FAQ from "./containers/faqs";

function App() {
  return (
    <>
      <JumbotronContainer />
      <FAQ />
      <FooterContainer />
    </>
    );
}

export default App;
