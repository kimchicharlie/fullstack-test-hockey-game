/* @name makePlayerCaptainQuery */
insert into players(number, name, lastname, position, is_capitain)
VALUES (:number, :name, :lastname, :position, :isCaptain)
RETURNING number, name, lastname, position, is_capitain as "isCaptain";

