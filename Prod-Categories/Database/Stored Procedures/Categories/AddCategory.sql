use ProductCategories;

CREATE OR ALTER PROCEDURE addCategory (@Id VARCHAR(255), @NAME VARCHAR(255))
AS
BEGIN

INSERT INTO Categories(Id, NAME) VALUES(@Id, @NAME)
END