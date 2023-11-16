use world;
select b.name, b.Continent , b.Population
from country b
where b.Continent = 'europe'
and b.Population > 10000000;

-- order by euro, population;