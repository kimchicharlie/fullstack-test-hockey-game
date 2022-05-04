import { useState } from "react";
import { StyledAppWrapper, StyledHeader } from "./App.styled";
import { usePlayers } from "./hooks/usePlayers";

export const App = () => {
  const [year, setYear] = useState(2010);
  const { players, isLoading } = usePlayers(year);
  return (
    <StyledAppWrapper>
      <StyledHeader>
        <p>Bonjiorno</p>
        <div>{isLoading ? "loading..." : JSON.stringify(players)}</div>
      </StyledHeader>
    </StyledAppWrapper>
  );
};
