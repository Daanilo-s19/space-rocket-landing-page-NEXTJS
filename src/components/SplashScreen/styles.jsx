import styled from "styled-components";
export const Content = styled.div`
  width: 100%;
  padding: 66px 0 0;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background: url("assets/filter_space.svg");
    animation: opacityAnimation 1500ms linear infinite;
    animation-direction: alternate;
  }
  .loading {
    margin-top: 25px;
    display: flex;

    #dot-two {
      animation-delay: 0.4s;
    }
    #dot-three {
      animation-delay: 0.8s;
    }
    div {
      width: 6px;
      height: 6px;
      margin-left: 12px;
      background: #ffffff;
      border-radius: 50%;
      animation: opacityDots 1500ms linear infinite;
      animation-direction: alternate;
    }
  }

  #line-top {
    margin-left: 53%;
    margin-bottom: -58px;
    /* margin-right: 369px;*/

    justify-self: end;
    animation: opacityAnimation 1500ms linear;
  }
  #line-bottom {
    margin-left: 23%;
    /* margin-left: 346px; */
    justify-self: start;
    align-self: end;
    animation: opacityAnimation 1500ms linear;
  }
  #logo {
    width: 100%;
    justify-self: center;
    display: grid;
    grid-auto-rows: auto;
    justify-items: center;
    animation: opacityAnimation 500ms linear;

    img {
      width: 100%;
      max-width: 378.89px;
      height: 88px;
    }

    label {
      margin: 0 0 0 53px;
      font-weight: 300;
      font-size: 16px;
      line-height: 18px;
      letter-spacing: 0.525em;
      text-transform: uppercase;
      opacity: 0.4;
    }
  }
  .footer {
    margin-top: -104px;
    width: 100%;
    justify-self: center;
    display: grid;
    grid-auto-rows: auto;
    justify-items: center;
    row-gap: 12px;

    label {
      font-size: 16px;
      line-height: 19px;
      opacity: 0.4;

      &:last-child {
        margin-top: 12px;
      }
    }

    .social-media {
      display: grid;
      grid-template-columns: repeat(6, 40px);
      column-gap: 20px;
      margin-bottom: 12px;
      a {
        width: 100%;
        max-width: 40px;
        height: 40px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        cursor: pointer;

        &:hover {
          background: ${({ theme }) => theme.background.secundary};
          border: 1px solid rgba(255, 255, 255, 1);
        }
      }
    }
  }
  @media ${({ theme }) => theme.breakpoint.mobileL} {
    #line-top {
      margin-left: 0;
      img {
        opacity: 0;
      }
    }
    #line-bottom {
      margin: 0;
      img {
        opacity: 0;
      }
    }
    #logo {
      img {
        width: 80%;
      }
      label {
        margin: -10px 0 59px 100px;
        font-size: 12px;
      }
    }
    .footer {
      margin: 0 auto;
    }
  }
  @keyframes opacityAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes opacityDots {
    from {
      transform: scale(0.4) translateY(2px);
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
