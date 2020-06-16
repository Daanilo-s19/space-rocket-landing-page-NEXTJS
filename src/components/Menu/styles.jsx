import styled from "styled-components";

export const Navbar = styled.nav`
  width: 100%;
  height: 88px;
  display: grid;
  grid-template-columns: auto minmax(auto, 1366px) auto;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: ${({ theme }) => theme.background.primary};
  position: fixed;
  z-index: 999;
  top: 0;

  .content {
    grid-column: 2/3;
    display: grid;
    grid-template-columns: minmax(auto, 155px) 1fr 3fr minmax(auto, 155px);
    background: url("assets/filter_space.svg");
  }

  .content-logo {
    grid-column: 2/3;
    align-self: center;
  }
  .content-menu {
    grid-column: 3/4;
    align-self: center;
    justify-self: end;
    grid-template-columns: 1fr;

    a {
      font-size: 14px;
      line-height: 16px;
      opacity: 0.7;
      margin-right: 56px;
      transition: 0.5s;
      &:hover {
        opacity: 1;
        cursor: pointer;
      }
    }
  }
  .content-menu-responsive {
    display: none;
  }

  @media ${({ theme }) => theme.breakpoint.laptop} {
    .content-menu {
      display: none;
    }
    .content-menu-responsive {
      display: block;
      justify-self: end;
      align-self: center;
    }
  }
  @media ${({ theme }) => theme.breakpoint.tablet} {
    .content {
      grid-template-columns: 32px 1fr 3fr 32px;
    }
  }
`;
