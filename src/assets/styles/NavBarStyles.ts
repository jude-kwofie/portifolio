import styled from "styled-components";
type NavBarProps = {
  istoggled: boolean | string;
};

export const NavBarStyles = styled.nav<NavBarProps>`
  .menu {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    box-shadow: 0 4px 20px hsla(207, 24%, 35%, 0.1);
    justify-content: center;
    border-radius: 3rem;
    row-gap: 2rem;
    padding: 30px 0;
    margin: 4%;
    list-style: none;

    position: fixed;
    bottom: ${({ istoggled }) => (istoggled == "true" ? "-20px" : "-400px")};
    left: 0;
    right: 0;
    transition: bottom 0.3s ease;
    background-color: ${(props) => props.theme.bodyColor};
  }
  button:last-of-type {
    grid-column: 3;
    color: ${(props) => props.theme.textColor};
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
      gap: 1rem;
      box-shadow: unset;
    }
    .nav__icon {
      display: none;
    }
  }
`;
