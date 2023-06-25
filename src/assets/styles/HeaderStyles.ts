import styled from "styled-components";

export const HeaderStyles = styled.header`
  display: grid;
  grid-template-columns: min-content auto min-content max-content;
  position: fixed;
  bottom: 2rem;
  left: 5%;
  right: 5%;
  box-shadow: 0 4px 20px hsla(207, 24%, 35%, 0.1);
  border-radius: 3rem;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  button:last-of-type {
    color: ${(props) => props.theme.textColor};
  }
  .logo {
    font-family: "Lora", serif;
    font-weight: 500;
    color: hsl(207, 4%, 56%);
  }
  @media (min-width: 600px) {
    position: unset;
    bottom: unset;
    left: unset;
    right: unset;
    align-items: center;
    border-radius: 0;
    padding: 1.5rem 5%;
    button:last-of-type {
      display: none;
    }
  }
`;
