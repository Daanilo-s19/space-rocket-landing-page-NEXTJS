import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: minmax(auto, 155px) 1fr minmax(auto, 155px);
  margin: 56px 0 181px;
  background: url("assets/filter_space.svg");

  .content {
    grid-column: 2/3;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
  }

  .content-main {
    justify-self: center;
    grid-column: 2/3;
    width: 100%;
    width: 270px; /*TODO*/
    height: 270px;
    background: url("assets/border_dash.svg");
    margin: 0 -50px;
    animation: spin 15s linear infinite;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      animation-play-state: paused;
      .circle {
        animation-play-state: paused;
      }
    }

    .circle {
      width: 100%;
      max-width: 224px;
      height: 224px;
      background: #1b1b34;

      backdrop-filter: blur(10px);
      border-radius: 50%;
      animation: spinoff 15s linear infinite;

      display: flex;
      justify-content: center;
      align-items: center;
    }
    .play {
      width: 100%;
      max-width: 96px;
      height: 96px;
      background: linear-gradient(40.72deg, #552ee5 14.56%, #ee5a59 85.55%);
      animation: spinoff 10s linear infinite;
      cursor: pointer;

      img {
        animation: spin 10s linear infinite;
      }

      box-shadow: 0px 5px 60px rgba(32, 44, 61, 0.1);
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background: linear-gradient(40.72deg, #552ee5 14.56%, #ee5a59 85.55%);
        max-width: 100px;
        height: 100px;
      }
    }
  }

  .content-left {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    justify-items: end;
    row-gap: 50px;
  }

  .content-right {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    row-gap: 50px;
  }

  @media ${({ theme }) => theme.breakpoint.tablet} {
    grid-template-columns: minmax(0, 32px) 1fr minmax(0, 32px);

    .content {
      grid-row: 1/2;
      grid-template-columns: 1fr;
      gap: 62px;
    }
    .content-main {
      grid-column: 1/2;
      grid-row: 1/2;
    }

    .content-left {
      grid-row: 2/3;
      display: grid;
      grid-template-rows: 1fr;
      justify-items: center;
    }
    .content-right {
      grid-row: 3/4;
      display: grid;
      grid-template-rows: 1fr;
      justify-items: center;
    }
  }
  @media ${({ theme }) => theme.breakpoint.mobileL} {
    grid-template-columns: 0 360px 0;
    justify-items: center;
  }
`;

export const MethodItem = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.align === "left"
      ? "minmax(auto, 256px) minmax(auto, 105px)"
      : "minmax(auto, 105px) minmax(auto, 256px) "};

  .content-item {
    width: 100%;
    display: grid;
    transition: 500ms;
    cursor: pointer;

    grid-template-columns: ${(props) =>
      props.align === "left"
        ? "minmax(auto, 256px) minmax(auto, 60px)"
        : "minmax(auto, 60px) minmax(auto, 256px)"};
    height: 48px;
    background: ${(props /*HACK*/) =>
      props.align === "left"
        ? "linear-gradient(270deg,rgba(255, 255, 255, 0) 0%,rgba(255, 255, 255, 0.1) 100%)"
        : "linear-gradient(270deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)"};
    /* backdrop-filter: blur(20px); */
    border-radius: 1000px;
    align-self: center;

    .description {
      max-width: 206px;
      align-self: center;
      margin-bottom: 8px;
      justify-self: ${(props) => (props.align === "left" ? "start" : "end")};

      .id-item {
        margin: 0 16px;
        color: ${({ theme }) => theme.colors.primary};
      }
      label {
        font-weight: bold;
        font-size: 14px;
        line-height: 17px;
      }
    }

    .icon-item {
      grid-column: ${(props) => (props.align === "left" ? "2/3" : "1/2")};
      width: 60px;
      height: 60px;
      margin-top: -7px;

      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 50%;

      transform: matrix(-1, 0, 0, 1, 0, 0);
      display: flex;
      justify-content: center;
    }
    .border-ellipse {
      width: 60px;
      height: 60px;
      background: url("assets/Ellipse_sm.svg");
      animation: rotation 15s linear infinite;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        animation: antiRotation 15s linear infinite;
      }
    }
  }

  .content-item-legend {
    opacity: 0;
    grid-column: 1/3;
    padding-top: 50px;
    max-width: 288px;
    height: 42px;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    transition: 1s;
  }

  #line-top {
    width: 100%;
    max-width: 105px;
    justify-self: end;
    align-self: end;
  }

  &:hover {
    .content-item {
      background: rgba(255, 255, 255, 0.1);
      /* backdrop-filter: blur(20px); */

      .content-item-legend {
        opacity: 0.6;
      }

      .icon-item {
        background: linear-gradient(40.72deg, #552ee5 14.56%, #ee5a59 85.55%);
        backdrop-filter: blur(10px);
      }
    }
  }
  @media ${({ theme }) => theme.breakpoint.tablet} {
    &:hover {
      .content-item {
        margin: 26px 0 53px;
      }
    }
    grid-template-columns: 1fr;
    #line-top {
      display: none;
    }
    #line {
      display: none;
    }
  }
`;
