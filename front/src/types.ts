export type TPlayerTeam = {
  id: number;
  playerId: number | null;
  teamId: number | null;
};

export type TPlayer = {
  id: number;
  isCaptain: boolean | null;
  lastname: string | null;
  name: string | null;
  number: number | null;
  position: string | null;
};

export type TTeam = {
  coach: string;
  id: number;
  year: number;
};
