/* @name createTeamQuery */
insert into teams(coach, year)
VALUES (:coach, :year)
RETURNING id, coach, year;