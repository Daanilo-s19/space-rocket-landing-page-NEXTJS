import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 56px;
  margin: 143px 0 181px;

  .content-header {
    display: grid;
    grid-template-columns: 155px 1fr 1fr 155px;

    .title {
      grid-column: 2/3;
      max-width: 427px;
      h3 {
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: 10px;
      }
      strong {
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
      }
    }
    .border {
      width: 100%;
      max-width: 805px;
    }
  }
  .content-item {
    grid-row: 2/3;
    display: grid;
    grid-template-columns: 155px 1fr 155px;

    div {
      grid-column: 2/3;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }
`;
