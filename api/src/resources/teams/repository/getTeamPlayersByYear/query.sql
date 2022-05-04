/* @name getTeamPlayersByYearQuery */
select
    players.number,
    players.name,
    players.lastname,
    players.position,
    players.is_capitain as "isCaptain"
from players
join player_team on player_team.player_id = players.id
join teams on teams.id = player_team.team_id
where teams."year" = :year;