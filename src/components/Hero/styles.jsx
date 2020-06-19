import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 176px;

  h1 {
    width: 100%;
    max-width: 544px;
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    margin-bottom: 16px;
  }
  h2 {
    width: 100%;
    max-width: 624px;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    margin-bottom: 64px;
    color: rgba(255, 255, 255, 0.4);
  }
  @media ${({ theme }) => theme.breakpoint.mobileL} {
    h1 {
      width: 304px;
      font-size: 20px;
      line-height: 24px;
    }
    h2 {
      width: 296px;
      font-size: 14px;
      line-height: 16px;
    }
  }
`;
