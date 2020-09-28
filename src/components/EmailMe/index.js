import React from 'react'
import { Container, Input, Button, Text, Break } from "./styles/EmailME";

function EmailMe({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

EmailMe.Input = function EmailMeInput({ ...restProps }) {
    return <Input {...restProps} />
}

EmailMe.Button = function EmailMeButton({ children, ...restProps }) {
    return <Button {...restProps}>{children} <img src="/images/icons/chevron-right.png" alt="Right-Arrow" /></Button>
}

EmailMe.Text = function EmailMeText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

EmailMe.Break = function EmailMeBreak({ ...restProps }) {
  return <Break {...restProps} />;
};

export default EmailMe
