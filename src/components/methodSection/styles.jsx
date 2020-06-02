import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 56px;
  margin: 143px 0 181px;

  .content-section {
    grid-row: 2/3;
    display: grid;
    grid-template-columns: 155px 1fr 155px;

    div {
      grid-column: 2/3;
      background: red;
    }
  }
`;
// background: url("assets/ellipse.svg") bottom border-box no-repeat;
