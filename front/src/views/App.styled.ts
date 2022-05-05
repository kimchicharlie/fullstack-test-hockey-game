import styled from "styled-components";

export const StyledAppWrapper = styled.div`
  width: fullscreen;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  color: #333333;
`;

export const StyledMain = styled.main`
  padding: 4rem 8rem;
  gap: 32px;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const StyledHeadWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StyledTableWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
