use world;
select b.name, c.Language
from country b, countrylanguage c
where c.countrycode = b.code
	and b.name = 'china';

-- order by name, language;