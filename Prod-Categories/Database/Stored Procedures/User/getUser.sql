use ProductCategories;
Go

CREATE OR ALTER PROCEDURE getUser(@Email VARCHAR (255))
AS
BEGIN
SELECT* FROM Users WHERE Email=@Email
END;