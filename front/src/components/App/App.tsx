import { useCallback, useState } from "react";
import Select, { SingleValue } from "react-select";

import {
  StyledAppWrapper,
  StyledHeadWrapper,
  StyledMain,
  StyledTableWrapper,
} from "./App.styled";
import { usePlayers } from "../../hooks/usePlayers";
import { getLastNYears } from "../../utils/date";
import { Header } from "../Header";
import { Field } from "../Field";
import { PlayersTable } from "../PlayersTable";
import loaderLogo from "../../assets/loader.svg";
import crossLogo from "../../assets/cross-remove.svg";
import captainLogo from "../../assets/captain.svg";
import { Footer } from "../Footer";
import { CreatePlayer } from "../CreatePlayer";
import { Button } from "../Button";
import { TCreatePlayerParams } from "../../api/players/createPlayer";

const last20Years = getLastNYears(20);

type TOption = { value: number; label: string };

export const App = () => {
  const [isCreateVisible, setIsCreateVisible] = useState(false);
  const [selectedYear, setYear] = useState<TOption>({
    value: 2010,
    label: "2010",
  });
  const {
    deletePlayer,
    createPlayer,
    isCreatingPlayer,
    makePlayerCaptain,
    players,
    isLoading,
  } = usePlayers(selectedYear.value);

  const handleCreatePlayer = useCallback(
    (params: TCreatePlayerParams) => {
      createPlayer(params);
      setIsCreateVisible(false);
    },
    [createPlayer]
  );

  const handleChangeYear = useCallback(
    (newValue: SingleValue<TOption>) => {
      const newSelectedYear = newValue;
      if (newSelectedYear) {
        setYear(newSelectedYear);
      }
    },
    [setYear]
  );

  return (
    <StyledAppWrapper>
      <Header />
      <StyledMain>
        <StyledHeadWrapper>
          <Field label="Select a year">
            <Select
              value={selectedYear}
              onChange={handleChangeYear}
              options={last20Years.map((year) => ({
                value: year,
                label: year.toString(),
              }))}
              styles={{
                option: (styles) => ({
                  ...styles,
                  cursor: "pointer",
                }),
                control: (styles) => ({
                  ...styles,
                  cursor: "pointer",
                }),
              }}
            />
          </Field>
          <Button onClick={() => setIsCreateVisible(!isCreateVisible)}>
            {isCreateVisible ? "Go back to team" : "Add a player"}
          </Button>
        </StyledHeadWrapper>

        {isCreateVisible && (
          <CreatePlayer
            year={selectedYear.value}
            handleCreate={handleCreatePlayer}
            isLoading={isCreatingPlayer}
          />
        )}

        {isCreateVisible || (
          <StyledTableWrapper>
            {isLoading ? (
              <img width={64} src={loaderLogo} alt="loading logo" />
            ) : (
              <PlayersTable
                players={players}
                actions={[
                  {
                    key: "action-delete-player",
                    imgSrc: crossLogo,
                    onClick: (player) => deletePlayer(player.id),
                  },
                  {
                    key: "action-make-player-captain",
                    imgSrc: captainLogo,
                    onClick: (player) => makePlayerCaptain(player.id),
                    isHidden: (player) => !!player.isCaptain,
                  },
                ]}
              />
            )}
          </StyledTableWrapper>
        )}
      </StyledMain>
      <Footer />
    </StyledAppWrapper>
  );
};
