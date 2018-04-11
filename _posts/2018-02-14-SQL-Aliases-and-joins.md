---
layout: post
title: SQL Aliases and joins
---

## Introduction:
We have already seen basic SQL queries in the [previous post](https://quantumofcosmos.github.io/CRUD-and-other-SQL-Basics/). In this post we will see a bit more advanced queries that will involve multiple tables by using aliases and joins.

### Alias:
Aliases are used to give a table, or a column in a table, a temporary name. It only exists for the duration of the quiery.
1. **Table alasing:**
Here tables can be given a temporary name and its columns can be accessed using that name.
For example say we want to execute the quiery
```
SELECT Orders.OrderID, Orders.OrderDate, Customers.CustomerName
FROM Customers, Orders
```
It quickly becomes inconvinient to repeat the whole table names again and again. So the same quiery can be rewritten with aliases as:
```
SELECT o.OrderID, o.OrderDate, c.CustomerName
FROM Customers AS c, Orders AS o;
```
2. **Column aliasing:**
Here columns of a table can be given a temporary name and can be used to access that column or multiple columns using that name.
```
SELECT CustomerName AS Customer
FROM Customers;
```
We can also combine multiple columns into one alias like as following:
```
SELECT CustomerName, Address + ', ' + PostalCode + ' ' + City + ', ' + Country AS Address
FROM Customers;
```

### Joins:
Let’s say we have two sets of data in our relational database: table A and table B, with some sort of relation specified by primary and foreign keys. The result of joining these tables together can be visually represented by the following diagram:

<div style="text-align:center"><img src ="https://static1.squarespace.com/static/5732253c8a65e244fd589e4c/t/5744bcf3e321402cfdfa7128/1464122619821/?format=750w"  height="158" /></div>

1. **Inner Join:**
This join selects all records from Table A and Table B, where the join condition is met. All other rows are discarded.
<div style="text-align:center"><img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/SQL_Join_-_07_A_Inner_Join_B.svg/234px-SQL_Join_-_07_A_Inner_Join_B.svg.png" /></div>

```
select first_name, last_name, order_date, order_amount
from customers c
inner join orders o
on c.customer_id = o.customer_id
```

2. **Outer join:**
The joined table retains each row—even if no other matching row exists.The values thus missing are returned with null. Outer joins subdivide further into left outer joins, right outer joins, and full outer joins, depending on which table's rows are retained (left, right, or both).

  * Left outer join:
  This selects all records from Table A, along with records from Table B for which the join condition is met (if at all).
  <div style="text-align:center"><img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/SQL_Join_-_01_A_Left_Join_B.svg/234px-SQL_Join_-_01_A_Left_Join_B.svg.png" /></div>

  ```
  SELECT *
  FROM employee LEFT OUTER JOIN department
  ON employee.DepartmentID = department.DepartmentID;
  ```
  * Right outer join:
  This selects all records from Table B, along with records from Table A for which the join condition is met (if at all).
  <div style="text-align:center"><img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/SQL_Join_-_03_A_Right_Join_B.svg/234px-SQL_Join_-_03_A_Right_Join_B.svg.png" /></div>

  ```
  SELECT *
  FROM employee RIGHT OUTER JOIN department
  ON employee.DepartmentID = department.DepartmentID;
  ```
  * Full outer join:
  This selects all records from Table Aand Table B, regardless of whether the join condition is met or not.
  <div style="text-align:center"><img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/SQL_Join_-_05b_A_Full_Join_B.svg/234px-SQL_Join_-_05b_A_Full_Join_B.svg.png" /></div>

  ```
  SELECT *
  FROM employee FULL OUTER JOIN department
  ON employee.DepartmentID = department.DepartmentID;
  ```
