/* @name getPlayerByIdQuery */
select
    players.number,
    players.name,
    players.lastname,
    players.position,
    players.is_capitain as "isCaptain"
from players
where players.id = :playerId;