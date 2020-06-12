import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: minmax(auto, 155px) 1fr minmax(auto, 155px);
  margin: 56px 0 181px;

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
    /* animation: rotation 15s infinite; */

    display: flex;
    justify-content: center;
    align-items: center;

    .circle {
      width: 100%;
      max-width: 224px;
      height: 224px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;
    }
    .play {
      width: 100%;
      max-width: 96px;
      height: 96px;
      background: linear-gradient(40.72deg, #552ee5 14.56%, #ee5a59 85.55%);

      box-shadow: 0px 5px 60px rgba(32, 44, 61, 0.1);
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background: linear-gradient(40.72deg, #552ee5 14.56%, #ee5a59 85.55%);
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
    grid-template-columns: 32px 1fr 32px;

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

    grid-template-columns: ${(props) =>
      props.align === "left"
        ? "minmax(auto, 256px) minmax(auto, 60px)"
        : "minmax(auto, 60px) minmax(auto, 256px)"};
    height: 48px;
    background: ${(props /*HACK*/) =>
      props.align === "left"
        ? "linear-gradient(270deg,rgba(255, 255, 255, 0) 0%,rgba(255, 255, 255, 0.1) 100%)"
        : "linear-gradient(270deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)"};
    backdrop-filter: blur(20px);
    border-radius: 1000px;
    align-self: center;

    .description {
      max-width: 206px;
      align-self: center;
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
      z-index: 99;

      margin-top: -7px;

      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 50%;
      transform: rotate(0deg);

      transform: matrix(-1, 0, 0, 1, 0, 0);
      display: flex;
      justify-content: center;
    }
    .border-ellipse {
      width: 60px;
      height: 60px;
      background: url("assets/Ellipse_sm.svg");

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .content-item-legend {
    display: none;
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
      backdrop-filter: blur(20px);

      .content-item-legend {
        grid-column: 1/3;
        padding-top: 16px;

        max-width: 288px;
        height: 42px;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        color: #ffffff;
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

// export const MethodItem = styled.div`
//   display: grid;
//   grid-template-columns: ${(props) =>
//     props.align === "left" ? "300px 1fr" : " 1fr 300px"};

//   .content-item {
//     display: grid;
//     grid-template-columns: ${(props) =>
//       props.align === "left" ? "5fr 1fr" : "1fr 5fr"};

//     &:hover {
//       .description {
//         background: rgba(255, 255, 255, 0.1);
//         backdrop-filter: blur(20px);
//       }
//       .icon-item {
//         background: linear-gradient(40.72deg, #552ee5 14.56%, #ee5a59 85.55%);
//         backdrop-filter: blur(10px);
//       }

//       .content-item-legend {
//         padding-top: 16px;
//         margin-left: 36px;
//         width: 288px;
//         height: 42px;
//         font-size: 12px;
//         line-height: 14px;
//         display: flex;
//         align-items: center;
//         color: #ffffff;
//         opacity: 0.6;
//       }
//     }

//     .content-item-legend {
//       display: none;
//     }
//     .description {
//       ${(props) => props.align === "right" && "margin-left:-35px"}; /*HACK*/

//       grid-column: ${(props) => (props.align === "left" ? "1/2" : "2/3")};
//       grid-row: 1/2;
//       width: 100%;
//       max-width: 300px;
//       height: 48px;
//       background: ${(props /*HACK*/) =>
//         props.align === "left"
//           ? "linear-gradient(270deg,rgba(255, 255, 255, 0) 0%,rgba(255, 255, 255, 0.1) 100%)"
//           : "linear-gradient(270deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)"};
//       backdrop-filter: blur(20px);
//       border-radius: 1000px;

//       display: grid;
//       grid-template-columns: ${(props) =>
//         props.align === "left" ? "auto 1fr" : "1fr auto"};
//       align-self: center;
//       align-items: center;
//       align-content: center;

//       .id-item {
//         margin: 0 16px;
//         color: ${({ theme }) => theme.colors.primary};
//       }
//       label {
//         font-weight: bold;
//         font-size: 14px;
//         line-height: 17px;
//         text-align: ${(props) => (props.align === "left" ? "start" : "end")};
//       }
//     }
//     .icon-item {
//       ${(props) => props.align === "left" && " margin-left: -35px;"};
//       grid-column: ${(props) => (props.align === "left" ? "2/3" : "1/2")};
//       grid-row: 1/3;
//       width: 60px;
//       height: 60px;
//       z-index: 99;

//       background: rgba(255, 255, 255, 0.1);
//       backdrop-filter: blur(10px);
//       border-radius: 50%;
//       transform: rotate(0deg);

//       transform: matrix(-1, 0, 0, 1, 0, 0);
//       display: flex;
//       justify-content: center;
//     }
//     .border-ellipse {
//       width: 60px;
//       height: 60px;
//       background: url("assets/Ellipse_sm.svg");

//       display: flex;
//       justify-content: center;
//       align-items: center;
//     }

//     /* align-items: center; */
//   }

//   #line-one {
//     align-self: end;
//     margin: 0 0 0 -40px;
//   }
//   #line-two {
//     align-self: start;
//     margin: 0 0 0 -40px;
//   }
//   #line-three {
//     align-self: end;
//     /* margin: 0 0 0 -40px; */
//   }
//   #line-four {
//     align-self: start;
//     /* margin: 0 0 0 -40px; */
//   }
//   /* .Stack-left {
//     margin-left: -35px;
//   }
//   .Stack-right {
//     margin-right: -35px;
//   } */

//   @keyframes rotation {
//     from {
//       transform: rotate(0deg);
//     }
//     to {
//       transform: rotate(360deg);
//     }
//   }
// `;
