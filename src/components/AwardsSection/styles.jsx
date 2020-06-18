import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 56px;
  margin: 143px 0 181px;
  background: url("assets/filter_space.svg");

  .content-header {
    display: grid;
    grid-template-columns: minmax(auto, 155px) 1.5fr 2fr minmax(auto, 155px);

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
    grid-template-columns: minmax(auto, 155px) 1fr minmax(auto, 155px);

    .content-alignment-flex {
      grid-column: 2/3;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .content-alignment-responsive {
      display: none;
    }
  }

  @media ${({ theme }) => theme.breakpoint.tablet} {
    .content-item {
      .content-alignment-flex {
        display: none;
      }

      .content-alignment-responsive {
        grid-column: 2/3;
        display: grid;
        grid-template-rows: repeat(3, 1fr);

        justify-items: center;

        .align-top-left {
          grid-column: 1/2;
        }
        .align-top-center {
          grid-column: 2/3;
        }
        .align-top-right {
          grid-column: 3/4;
        }
      }
    }
    .content-header {
      margin: 0 32px;
      display: grid;
      grid-template-columns: minmax(auto, 32px) 1fr minmax(auto, 32px);
      grid-template-rows: repeat(2, 1fr);

      .title {
        width: 100%;
        h4 {
          width: 296px;
        }
      }

      .border {
        grid-column: 2/3;
        grid-row: 2/3;
      }
    }
  }

  @media ${({ theme }) => theme.breakpoint.mobileL} {
    .content-header {
      margin: 0;

      .border {
        width: 296px;

        img {
          width: 100%;
        }
      }
    }
  }
`;

export const Item = styled.div`
  width: 96px;
  height: 96px;
  background: url("assets/Ellipse.svg") bottom border-box no-repeat;
  animation: spin 5s linear infinite;
  transition: 3s;

  &:hover {
    animation: none;

    .circle {
      animation: none;
    }
  }

  .circle {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 9px;
    animation: spinoff 5s linear infinite;
    transition: 3s;
  }

  #years {
    font-weight: 500;
    font-size: 8px;
    line-height: 9px;
    letter-spacing: 0.08em;
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 20px;
  }

  .local {
    font-weight: 600;
    font-size: 9px;
    line-height: 11px;
    text-align: center;
    text-transform: uppercase;
    margin: 7px 0;
  }
  .fontSize {
    font-size: 8px;
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
