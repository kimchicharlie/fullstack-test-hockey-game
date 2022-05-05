import {
  StyledTable,
  StyledActions,
  StyledClickableIcon,
} from "./PlayersTable.styled";
import { TPlayer } from "../../api/types";

type TAction = {
  key: string;
  imgSrc: string;
  onClick: (player: TPlayer) => void;
  isHidden?: (player: TPlayer) => boolean;
};

type TProps = {
  players: TPlayer[];
  actions: TAction[];
};

export const PlayersTable = ({ players, actions }: TProps) =>
  players.length > 0 ? (
    <StyledTable>
      <thead>
        <tr>
          <th align="left">Position</th>
          <th align="center">Number</th>
          <th align="left">Name</th>
          <th align="left">Lastname</th>
          <th align="left">Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
          <tr key={`player-${player.id}`}>
            <td>{player.position}</td>
            <td align="center">{player.number}</td>
            <td>{player.name}</td>
            <td>{player.lastname}</td>
            <td>{player.isCaptain ? "Captain" : ""}</td>
            <td>
              <StyledActions>
                {actions.map((action) =>
                  action.isHidden?.(player) ? null : (
                    <StyledClickableIcon
                      key={action.key}
                      src={action.imgSrc}
                      width={16}
                      onClick={() => action.onClick(player)}
                    />
                  )
                )}
              </StyledActions>
            </td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  ) : (
    <div>
      <p>Create a first player for this team</p>
    </div>
  );
