import styled from 'styled-components';

export const Span = styled.span`
  width: 1038px;
  height: 334px;
  display: block;
  font-family: Roboto,sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 36px;
  text-transform: lowercase;
`;

export const Header = styled.header`
  width: 187px;
  height: 36px;
  margin-bottom: 33px;
  
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 36px;
  text-transform: uppercase;
  color: #9B5900;
`;

export const Img = styled.img`
  width: 320px;
  height: 483px;
`;

export const Button = styled.button`
  width: 388px;
  height: 94px;
  background: #9B5900;
  border-radius: 20px;

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 36px;
  text-align: center;
  text-transform: uppercase;
  color: aliceblue;
`;

export const SectionContent = styled.section`
  display: flex;
  justify-content: space-between;
  
  & div:first-child {
    margin-right: 41px;
  }
`;

export const Main = styled.main`
  padding: 0 20px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
`;