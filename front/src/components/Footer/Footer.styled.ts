import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 0 8rem;
  background: #223f5d;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: white;
`;

export const StyledNav = styled.nav`
  height: 6rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: end;
`;

export const StyledLink = styled.a`
  font-size: 16px;
  color: white;
  text-decoration: none;

  :hover {
    opacity: 0.5;
  }
`;
