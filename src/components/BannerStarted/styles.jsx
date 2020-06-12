import styled from "styled-components";

export const Banner = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 160px;
  background: #552ee5;
  border-radius: 10px;
  margin: 76px auto 132px;
  padding: 0 56px;

  display: grid;
  grid-template-columns: 3fr 5fr 1fr;
  column-gap: 24px;
  align-items: center;

  img {
    width: 100%;
    max-width: 502px;
  }

  span {
    margin-top: 8px;
    font-size: 14px;
    line-height: 16px;
    opacity: 0.8;
  }
  @media ${({ theme }) => theme.breakpoint.mobileL} {
    max-width: 600px;
    height: 200px;
    justify-items: center;
    border-radius: 0px;

    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto 1fr;

    div {
      text-align: center;
    }
    h4 {
      width: auto;
    }
  }
`;
