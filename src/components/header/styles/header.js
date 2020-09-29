import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) =>
        src ? `../images/misc/${src}.jpg` : "../images/misc/home-bg.jpg"})
      top left / cover no-repeat;
  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && `background: none;`}
  }
`;

export const Mask = styled.div`
display: flex;
flex-direction: column;
background: linear-gradient(
    to right,
    rgba(16, 41, 31, 0.8),
    rgba(23, 23, 49, 0.8)
  )
`

export const DarkMask = styled.div`
display: flex;
flex-direction: column;
background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.8)
  )
`


export const Container = styled.div`
display: flex;
margin: 0 56px;
height: 64px;
min-height: fit-content;
padding: 18px 0;
justify-content: space-between;
align-items: center;
a {
  display: flex;
}
@media (max-width: 1000px) {
  margin: 0 30px;
}
`;
export const Feature = styled(Container)`
padding: 150px 0 500px 0;
flex-direction: column;
align-items: normal;
width: 50%;
@media (max-width: 1100px) {
  display: none;
}

`

export const Link = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === "true" ? "700" : "normal")};
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export const Logo = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100px;
  margin-right: 40px;
  @media (min-width: 1449px) {
    padding-top: 30px;
    width: 167px;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #fa914b;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-weight: 800;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  transition: background 300ms ease;
  &:hover {
    background: #8a5029;
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const FeatureCallOut = styled.p`
color: white;
font-size: 50px;
line-height: normal;
font-weight: bold;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
margin: 0;
`;
