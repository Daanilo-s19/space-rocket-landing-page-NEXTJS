import styled from "styled-components";

export const Item = styled.div`
  width: 100px;
  height: 96px;
  background: url("assets/ellipse.png") bottom border-box no-repeat;

  .content {
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
  }

  #local {
    font-weight: 600;
    font-size: 8px;
    line-height: 10px;
    margin: 10px 0;
    text-align: center;
  }
  #awards {
    font-size: 8px;
    line-height: 9px;
    letter-spacing: 0.08em;
    color: #ffffff;
    opacity: 0.8;
  }
`;
