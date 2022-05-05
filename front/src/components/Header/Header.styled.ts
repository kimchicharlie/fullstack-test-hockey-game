import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 0 8rem;
  background: #223f5d;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: white;
`;

export const StyledNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLogo = styled.img<{ offset: number }>`
  width: 120px;
  transition: transform 1s;

  transform: translateY(30px)
    ${(props) => (props.offset ? `translateX(${props.offset}px)` : "")};

  :hover {
    cursor: pointer;

    transform: translateY(4px)
      ${(props) => (props.offset ? `translateX(${props.offset}px)` : "")};
  }
`;

export const StyledLink = styled.a`
  color: white;
  text-decoration: none;

  :hover {
    opacity: 0.5;
  }
`;
