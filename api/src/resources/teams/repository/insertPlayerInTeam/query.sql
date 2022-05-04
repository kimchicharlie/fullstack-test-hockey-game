/* @name insertPlayerInTeamQuery */
insert into player_team(player_id, team_id)
VALUES (:playerId, :teamId)
RETURNING id, player_id as "playerId", team_id as "teamId";