import styled from "styled-components";
type NavBarProps = {
  istoggled: boolean | string;
};

export const NavBarStyles = styled.nav<NavBarProps>`
  margin: auto;
  .menu {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    box-shadow: 0 4px 20px hsla(207, 24%, 35%, 0.1);
    border-radius: 3rem;
    row-gap: 2rem;
    padding: 30px 5px;
    margin: 5%;
    list-style: none;

    position: fixed;
    bottom: ${({ istoggled }) => (istoggled == "true" ? "3rem" : "-200px")};
    left: 0;
    right: 0;
    transition: bottom 0.3s ease;
  }
  .nav__link {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 600px) {
    justify-self: end;
    margin: 0;
    .menu {
      display: flex;
      position: unset;
      bottom: unset;
      left: unset;
      right: unset;
      margin: unset;
      padding: unset;
      border-radius: 0;
    }
    .nav__icon {
      display: none;
    }
  }
`;
