import { useCallback, useState } from "react";
import Select, { SingleValue } from "react-select";
import { TCreatePlayerParams } from "../../api/players/createPlayer";
import { POSITIONS } from "../../utils/constants";
import { Button } from "../Button";

import { Field } from "../Field";
import { StyledWrapper, StyledInput } from "./CreatePlayer.styled";

type TProps = {
  handleCreate: (params: TCreatePlayerParams) => void;
  isLoading: boolean;
  year: number;
};

type TOption = { value: string; label: string };

export const CreatePlayer = ({ year, handleCreate }: TProps) => {
  const [name, setName] = useState("Foobar");
  const [lastname, setLastname] = useState("Lorem");
  const [number, setNumber] = useState(42);
  const [selectedPosition, setPosition] = useState<TOption>({
    value: POSITIONS[0],
    label: POSITIONS[0],
  });

  const handleChangeYear = useCallback(
    (newValue: SingleValue<TOption>) => {
      const newSelectedPosition = newValue;
      if (newSelectedPosition) {
        setPosition(newSelectedPosition);
      }
    },
    [setPosition]
  );

  const handleSubmit = () => {
    handleCreate({
      year,
      player: {
        name,
        lastname,
        number,
        position: selectedPosition.value,
      },
    });
  };

  return (
    <StyledWrapper>
      <h2>Create a player for team {year}</h2>
      <Field label="Select a position">
        <Select
          value={selectedPosition}
          onChange={handleChangeYear}
          options={POSITIONS.map((year) => ({
            value: year,
            label: year.toString(),
          }))}
        />
      </Field>
      <Field label="Name">
        <StyledInput
          value={name}
          placeholder="Name..."
          onChange={(e) => setName(e.target.value)}
        />
      </Field>
      <Field label="Lastname">
        <StyledInput
          value={lastname}
          placeholder="Lastname..."
          onChange={(e) => setLastname(e.target.value)}
        />
      </Field>
      <Field label="Number">
        <StyledInput
          placeholder="Number..."
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value, 10))}
        />
      </Field>
      <Button onClick={handleSubmit}>Ajouter le joueur</Button>
    </StyledWrapper>
  );
};
