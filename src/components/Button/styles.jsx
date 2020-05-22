import styled from "styled-components";

export const ButtonDefault = styled.button`
  width: 192px;
  max-width: 192px;
  height: 44px;
  border-radius: 100px;
  border: ${(props) =>
    props.background
      ? props.background
      : "1px solid rgba(255, 255, 255, 0.2);"};
  background: ${(props) => (props.background ? props.background : "none")};
  box-shadow: ${(props) =>
    props.shadow ? "0px 10px 25px rgba(85, 46, 229, 0.32)" : "none"};

  span {
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: ${(props) => (props.color ? props.color : "#ffffff")};
  }

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
