import styled from "styled-components";

export const BorderTop = styled.div`
  width: 100%;
  height: 1px;
  img {
    max-width: 100%;
  }
`;
export const Footerdefault = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  display: grid;
  grid-auto-rows: auto;

  /* display: grid;
  grid-template-rows: 1px repeat(2, auto); */

  .header {
    display: grid;
    height: 204px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    grid-template-columns: repeat(2, 1fr);

    .content {
      justify-self: end;
      padding-top: 60px;
      display: grid;
      justify-items: end;
    }

    .content-menu {
      a {
        margin-left: 31px;
        font-size: 14px;
        line-height: 16px;
        opacity: 0.7;
        cursor: pointer;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
  .content-tag {
    margin-top: -25px;
    div {
      margin-right: 58px;
      width: 106px;
      height: 21px;
      background: rgba(85, 46, 229, 0.2);
      backdrop-filter: blur(10px);
      border-radius: 100px;

      font-weight: 500;
      font-size: 8px;
      line-height: 9px;
      text-align: center;
      padding: 6px;
    }
  }
  .copyright {
    height: 97px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      margin-left: 31px;
      font-size: 14px;
      line-height: 16px;
      opacity: 0.7;
    }
  }
`;
