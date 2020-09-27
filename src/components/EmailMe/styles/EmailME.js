import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 40px;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width:600px){
    margin-left:auto;
    margin-right:auto;
    max-width:90vw;
    width:90vw;
  }
`;

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
  font-size:20px;
  outline:none;
  @media (max-width:600px){
    font-size:15px;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
  height: 70px;
  background: #123070;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  outline:none;
  cursor: pointer;
  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;
    @media (max-width: 1000px) {
      width: 16px;
    }
  }
  &:hover {
    background: #0d1c3d;
  }
  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;