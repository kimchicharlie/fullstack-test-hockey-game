/* @name makePlayerCaptainQuery */
WITH team_players AS (
    WITH actual_team AS (
            SELECT
                player_team.team_id
            FROM
                player_team
            WHERE
                player_team.player_id = :playerId
    )
    SELECT
        players.*
    FROM
        actual_team
        JOIN player_team ON actual_team.team_id = player_team.team_id
        JOIN players ON players.id = player_team.player_id
)
UPDATE
	players
SET
	is_capitain = CASE WHEN players.id = :playerId THEN
		TRUE
	WHEN players.id != :playerId THEN
		FALSE
	END
FROM
	team_players
WHERE
	team_players.id = players.id;