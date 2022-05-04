/* @name createPlayerQuery */
insert into players(number, name, lastname, position, is_capitain)
VALUES (:number, :name, :lastname, :position, :isCaptain)
RETURNING id, number, name, lastname, position, is_capitain as "isCaptain";