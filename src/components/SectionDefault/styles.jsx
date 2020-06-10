import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: minmax(auto, 123px) 1fr minmax(auto, 123px);
  margin: 56px 0 181px;

  .content-item {
    grid-column: 2/3;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 36px;
  }
`;
