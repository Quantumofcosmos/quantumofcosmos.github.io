---
layout: post
title: CURD and other SQL basics
---


## CRUD:
The acronym crud stands for **c**reate, **r**ead, **u**pdate, and **d**elete. It represents four basic operations that are performed on a database entries. These operations are applicable to both relational and non relational databases.

* Create operation creates a new record
* Read operation reads table records based on conditions given in query or a primary key value.
* Update operation updates the entry in a table based on primary key value specified in where clause.
* Delete operation removes an entry based on a where clause

***

## SQL:
SQL is a programming language for relational databases. It comprises both Data definition language(DDL) and Data manipulation languages(DML). Using the data definition properties of SQL, one can design and modify database schema, whereas data manipulation properties allows SQL to store and retrieve data from database.
SQL is a scripting language meaning the code can be executed without any need of compilation. It is a good practice to delimit each statement with a ```;```.

### Constraints in an sql command:
**Not null:**
The value of this column in an sql entry cannot be a null value.

**Unique:**
The entries in this column cannot be reused.

**Primary Key:**
It is a combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table.The entries in this column are used to relate different rows when two or more tables are being joined together.

**Default:**
Sets a default value for a column when no value is specified.



## SQL Commands:

### Create Table:
Following is the syntax to create a table with columns of particular datatype.
```
  CREATE TABLE table_name (
  column1 datatype,
  column2 datatype,
  column3 datatype,
  ....
  columnn datatype,
  primary key columnx
  unique columny
  );
```

### Drop Table:
Following is the syntax to create a table with columns of particular datatype.
```
  DROP TABLE table_name;
```

### Alter Table:
Alter table can be used to change the schema of an already existing table, three kinds of alterations that are possible and their syntax are as follows
1. Add a column:
```
ALTER TABLE table_name
ADD column_name datatype;
```
2. Drop a column:
```
ALTER TABLE table_name
DROP COLUMN column_name;
```
3. Modify a column:
```
ALTER TABLE table_name
ALTER COLUMN column_name
modification_type;
```


### Select from table:
It is used to Select data from a table either all of it or after filtering it with a condition.
1. Select all:
This statement gives out all rows and all columns.
```
SELECT * from table_name;
```
2. Select columns:
This statement gives out all rows of selected columns
```
SELECT column1, column2, ...
FROM table_name;
```
3. Select distinct:
The SELECT DISTINCT statement is used to return only distinct (different) values.
```
SELECT DISTINCT column1, column2, ...
FROM table_name;
```
4. Select conditionally:
This statement is used to select entries of table conditionally.
```
SELECT DISTINCT column1, column2, ...
FROM table_name
WHERE condition;
```
This condition is usually written comparative in nature with one of the column.

5. Select with multiple conditions:
This statement is used when there is a need to employ multiple conditions at once

5.1. Using And:
```
SELECT column1, column2, ...
FROM table_name
WHERE condition1 AND condition2 AND condition3 ...;
```
5.2. Using OR:
```
SELECT column1, column2, ...
FROM table_name
WHERE condition1 OR condition2 OR condition3 ...;
```
5.3. Using NOT:
```
SELECT column1, column2, ...
FROM table_name
WHERE NOT condition;
```
6. Select in an order:
```
SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC;
```

7. Select top n rows:
```
SELECT TOP number|percent column_name(s)
FROM table_name
WHERE condition;
```

8. Select min and max in a column:
```
SELECT MIN(column_name)
FROM table_name
WHERE condition;
```
9. Count:
It returns the number of rows that match the given criteria
```
SELECT COUNT(column_name)
FROM table_name
WHERE condition;
```

10. Sum and average:
It returns the sum/avg of rows that match the given criteria
```
SELECT SUM/AVG(column_name)
FROM table_name
WHERE condition;
```

11. in condition:
It can be used as multiple or condition
```
SELECT column_name(s)
FROM table_name
WHERE column_name IN (value1, value2, ...);
```
or
```
SELECT column_name(s)
FROM table_name
WHERE column_name IN (SELECT STATEMENT);
```
