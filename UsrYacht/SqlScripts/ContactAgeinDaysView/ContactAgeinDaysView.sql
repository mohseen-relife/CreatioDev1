create or alter view UsrVwContactAgeDays
as
select Id as usrId,Name as UsrName,BirthDate as UsrBirthDate,
	datediff(day,BirthDate,getDate()) as UsrAgeDays,
	Id as UsrContactId
from Contact