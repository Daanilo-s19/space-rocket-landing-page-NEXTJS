import styled from 'styled-components'

export const Navbar = styled.nav`
  width: 100%;
  height: 88px;
  display: grid;
  grid-template-columns: 155px 1fr 3fr 155px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
      opacity: 0.7;
      margin-right: 56px;
      &:hover {
        opacity: 1;
        cursor: pointer;
      }
    }
  }
`
