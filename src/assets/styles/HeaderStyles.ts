import styled from "styled-components";

export const HeaderStyles = styled.header`
  display: grid;
  grid-template-columns: max-content auto max-content max-content;
  position: fixed;
  bottom: 0;
  left: 5%;
  right: 5%;
  box-shadow: 0 4px 20px hsla(207, 24%, 35%, 0.1);
  border-radius: 3rem;
  @media (min-width: 600px) {
    position: unset;
    bottom: unset;
    left: unset;
    right: unset;
    align-items: center;
    padding-inline: 5%;
    border-radius: 0;
    .menu-toggler {
      display: none;
    }
  }
`;
