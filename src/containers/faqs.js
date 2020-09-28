import React from 'react'
import faqdata from '../fixtures/faq.json'
import Accordion from '../components/accordion'
import EmailMe from '../components/EmailMe'

export function FAQContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqdata.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
     <EmailMe>
          <EmailMe.Input placeholder="Enter Your Email Address" />
          <EmailMe.Button>Try Today</EmailMe.Button>
          <EmailMe.Break />
          <EmailMe.Text>
            We Will Inform You When We Get Geniune Content in the Platform
          </EmailMe.Text>
        </EmailMe>
    </Accordion>
  );
}


