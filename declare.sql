DECLARE @nasc as varchar(11)='17/04/2008'

SELECT DATEDIFF(YEAR, CAST(@nasc AS date), GETDATE()) AS Idade
