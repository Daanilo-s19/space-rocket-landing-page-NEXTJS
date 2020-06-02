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
    grid-template-columns: 155px 1.5fr 2fr 155px;

    .title {
      grid-column: 2/3;
      max-width: 427px;
    }
    .border {
      align-self: center;
      img {
        width: 100%;
      }
    }
  }

  .content-item {
    grid-row: 2/3;
    display: grid;
    grid-template-columns: 155px 1fr 155px;

    .content-alignment-flex {
      grid-column: 2/3;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
`;

export const Item = styled.div`
  width: 96px;
  height: 96px;
  background: url("assets/ellipse.svg") bottom border-box no-repeat;

  .circle {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #years {
    font-weight: 500;
    font-size: 8px;
    line-height: 9px;
    letter-spacing: 0.08em;
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 20px;
  }

  #local {
    font-weight: 600;
    font-size: 9px;
    line-height: 11px;
    text-align: center;
    text-transform: uppercase;
    margin: 7px 0;
  }
  #awards {
    font-size: 8px;
    line-height: 9px;
    letter-spacing: 0.08em;
    color: #ffffff;
    opacity: 0.8;
    margin-bottom: 20px;
  }
`;
