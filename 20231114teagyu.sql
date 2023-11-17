use world;
select a.district, b.name 
from city a, country b
where a.countrycode = b.code;

-- order by country,city;


