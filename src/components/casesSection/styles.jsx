import styled from "styled-components";

export const AllCases = styled.div`
  width: 100%;
  max-width: 736px;
  height: 123px;
  margin: 0 auto 132px;
  background: linear-gradient(
    270deg,
    rgba(199, 222, 255, 0.05) 0%,
    rgba(199, 222, 255, 0) 56.25%
  );
  backdrop-filter: blur(10px);
  border-radius: 10px;

  display: grid;
  grid-template-columns: repeat(4, 1fr) 2fr;
  align-items: center;
  .project {
    width: 100%;
    max-width: 123px;
    height: 123px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .description {
    width: 100%;
    display: flex;
    margin: 0 auto 0 47px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    span {
      /* width: 151px; */
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.12em;
      margin-bottom: 8px;
      text-transform: uppercase;
      /* text-align: center; */
      background: -webkit-linear-gradient(
        10.34deg,
        #552ee5 14.56%,
        #ee5a59 85.55%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;
export const Cases = styled.div`
  width: 100%;
  margin: 72px 0 132px;
  padding: 0 123px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;

  .content-image {
    grid-column: ${(props) => (props.order === "true" ? "1/2" : "2/3")};
    grid-row: 1/2;

    justify-self: ${(props) => (props.order === "true" ? "end" : "start")};
    width: 100%;
    max-width: 416px;
    height: 278px;
    left: 279px;
    top: 2248px;
    background: linear-gradient(
      180deg,
      rgba(85, 46, 229, 0.4) 0%,
      rgba(85, 46, 229, 0) 100%
    );
    backdrop-filter: blur(10px);
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      max-width: 320px;
      height: 222px;
    }
  }
  .divider {
    margin: 16px 0 72px;
  }
  .content-description {
    grid-column: ${(props) => (props.order === "true" ? "2/3" : "1/2")};
    justify-self: ${(props) => (props.order === "true" ? "start" : "end")};
    grid-row: 1/2;

    width: 100%;
    max-width: 345px;

    h5 {
      font-size: 12px;
      line-height: 14px;
      display: flex;
      align-items: center;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #ffffff;
      opacity: 0.4;
      margin-bottom: 8px;
    }
    span {
      align-self: start;
      font-size: 10px;
      line-height: 12px;
      color: #ffffff;
      opacity: 0.8;
      margin: 16px 0 0;
    }
  }
  .more-information {
    display: grid;
    row-gap: 8px;
    label {
      font-size: 14px;
      line-height: 16px;
      display: flex;
      align-items: center;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #c7deff;
    }
  }
`;
