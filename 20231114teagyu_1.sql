use world;
select a.district, b.name 
from city a, country b
where a.countrycode = b.code
	and b.name = 'united states';

-- order by name, city;

 