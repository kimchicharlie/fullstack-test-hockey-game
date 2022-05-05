import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-spacing: 12px;
`;

export const StyledActions = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const StyledClickableIcon = styled.img`
  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
