import {
  StyledHeader,
  StyledLogo,
  StyledNav,
  StyledLink,
} from "./Header.styled";

import hockeyPlayerLogo from "../../assets/hockey_player.svg";
import { useCallback, useState } from "react";

export const Header = () => {
  const [offset, setOffset] = useState(0);

  const handleClickLogo = useCallback(() => {
    const randomOffset =
      Math.ceil(Math.random() * 200) +
      10 * (Math.round(Math.random()) ? 1 : -1);
    setOffset(randomOffset);
  }, [setOffset]);

  return (
    <StyledHeader>
      <StyledNav>
        <h2>Hockey Game</h2>
        <StyledLogo
          src={hockeyPlayerLogo}
          alt="logo-hockey-player"
          offset={offset}
          onClick={handleClickLogo}
        />

        <StyledLink href="https://maplr.co/" target="_blank">
          Get to know us
        </StyledLink>
      </StyledNav>
    </StyledHeader>
  );
};
