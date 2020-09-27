import React, { createContext, useContext, useState } from 'react'
import { Container, Title, Item, Header, Body } from './styles/accordion'

const ToggleContext = createContext()



export default function Accordion({ children, ...restProps }) {

    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
    const [isActive, setIsActive] = useState(false)
    return (
        <ToggleContext.Provider value={{ isActive, setIsActive }}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    )
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
    const { isActive, setIsActive } = useContext(ToggleContext)
    return (
        <Header onClick={() => setIsActive((isActive) => !isActive)} {...restProps}>
            {children}
            {isActive ? (<img src="/images/icons/close-slim.png" alt="Close" />) :
                (<img src="/images/icons/add.png" alt="Open" />)}
        </Header>
    )
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
    const { isActive } = useContext(ToggleContext)
    return (
        isActive && <Body {...restProps}>
            {children}
        </Body>
    )
}