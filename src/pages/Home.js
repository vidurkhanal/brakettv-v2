import React from "react";
import { FAQContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { JumbotronContainer } from "../containers/jumbotron";
import EmailMe from "../components/EmailMe";
import Feature from "../components/feature";

function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Join Braket TV Today.</Feature.Title>
          <Feature.SubTitle>
            There are no cancellation fees – start or stop your account at any
            time.
          </Feature.SubTitle>
          <EmailMe>
            <EmailMe.Input placeholder="Enter Your Email Address" />
            <EmailMe.Button>Join Today</EmailMe.Button>
            <EmailMe.Break />
            <EmailMe.Text>
              We Will Inform You When We Get Geniune Content in the Platform
            </EmailMe.Text>
          </EmailMe>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FAQContainer />
      <FooterContainer />
    </>
  );
}

export default Home;
