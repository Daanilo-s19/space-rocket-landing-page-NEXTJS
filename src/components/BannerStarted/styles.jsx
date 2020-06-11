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
`;
