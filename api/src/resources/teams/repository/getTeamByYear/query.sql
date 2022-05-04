/* @name getTeamByYearQuery */
select
    id,
    coach,
    year
from teams
where teams.year = :year
limit 1;