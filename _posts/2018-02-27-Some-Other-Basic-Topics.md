---
layout: post
title: Some other basic topics
---

In this post I am going to cover multiple relatively similar concepts in a single post.
## Topics covered in this post:
* [Database shrading](#Database-shrading)
* [OLAP](#OLAP)
* [ETL](#ETL)
* [XML & JSON](#JSONXML)
* [RegEx](#RegEx)

### <a name="Database-shrading"></a>Database shrading:
When a database becomes moderately large, It shows signs of fatigue which will result in large lookup time and high latency in answering queries. This can be optimized to an extent by optimizing the quiery or to create an index on the table.
The current IoT and Big Data trends have made the databases increasingly large. This gave rise to requirement of a better optimization technique resulting in adoption of shrading.
In Database shrading, table is partitioned horizontally and different pieces are stored in different disks or servers. This will decrease the search time.  
Though this decreases the lookup time, This will add complexity to whole system as this technique increases interdependence among servers.

****
### <a name="OLAP"></a>OLAP:

OnLine Analytical Processing, or OLAP, is an approach to answering multi-dimensional analytical (MDA) queries swiftly in computing. OLAP is part of the broader category of business intelligence, which also encompasses relational database, report writing and data mining. Typical applications of OLAP include business reporting for sales, marketing, management reporting, business process management (BPM), budgeting and forecasting, financial reporting and similar areas, with new applications coming up, such as agriculture. The term OLAP was created as a slight modification of the traditional database term online transaction processing (OLTP).

OLAP tools enable users to analyze multidimensional data interactively from multiple perspectives. OLAP consists of three basic analytical operations: consolidation (roll-up), drill-down, and slicing and dicing.
Consolidation involves the aggregation of data that can be accumulated and computed in one or more dimensions. For example, all sales offices are rolled up to the sales department or sales division to anticipate sales trends.
By contrast, the drill-down is a technique that allows users to navigate through the details. For instance, users can view the sales by individual products that make up a region's sales.
Slicing and dicing is a feature whereby users can take out (slicing) a specific set of data of the OLAP cube and view (dicing) the slices from different viewpoints. These viewpoints are sometimes called dimensions (such as looking at the same sales by salesperson or by date or by customer or by product or by region, etc.)

****
### <a name="ETL"></a>ETL:
ETL stands for **E**xtract, **T**ransform and **L**oad. It encompasses the process of Extracting data from different sources, Transforming into an understandable and useful format, Loading it into a data mart or a data warehouse.


* Extract:
Most data projects use data from various sources. These different sources will intrinsically will produce data in different formats like XML,JSON, Flatfiles, Tables,etc. These have to be validated to terms which are acceptable to the destination This is done in Data Extraction.
* Transform:
The data that is produced by the source cannot be used as-is, There needs to be some changes that are to be made to it or some encoding to be done or a new variable is created based on availabel data. This is done in Transform stage.
* Load:
The load phase loads the data into the end target, which may be a simple delimited flat file or a data warehouse depending on the requirements of the organization.

****

### <a name="JSONXML"></a>XML & JSON:
When data sources produce data, They need to be transferred to datastore alog with the metadata information such as the variable name,etc. For this we majorly have two different formats of data transport.

1. **XML:**
Standing for Extensible markup language, this is a markup language that defines a set of rules following which, data can be encoded in format that is both human and machine readable.
XML uses tags to identify information. A pice of information encoded in XML will have a start tag, an end tag and an element. Start tag and end tag will carry metadata ie information about the information that is being carried as element. It can be nested to send multiple packets of data. Following is a sample breakfast menu encoded in XML.

```
<?xml version="1.0" encoding="UTF-8"?>
<breakfast_menu>
<food>
    <name>Belgian Waffles</name>
    <price>$5.95</price>
    <description>
   Two of our famous Belgian Waffles with plenty of real maple syrup
   </description>
    <calories>650</calories>
</food>
<food>
    <name>Strawberry Belgian Waffles</name>
    <price>$7.95</price>
    <description>
    Light Belgian waffles covered with strawberries and whipped cream
    </description>
    <calories>900</calories>
</food>
<food>
    <name>Berry-Berry Belgian Waffles</name>
    <price>$8.95</price>
    <description>
    Belgian waffles covered with assorted fresh berries and whipped cream
    </description>
    <calories>900</calories>
</food>
</breakfast_menu>
```  

This transport protocol has one single drawback. Each start tag has to be followed by an end tag. This is acceptable for limited number of entries but the space occupied can almost be halved just by eliminating repetation of the tag. our next format does just the same.

2. **JSON:**
JSON or JavaScript Object Notation is a replacement of XML in many ways. JSON was originally intended to be a subset of the JavaScript scripting language and is commonly used with Javascript, but it is a language-independent data format.
JSON uses flower braces and key value paires saperated by colons(:) to identify and transport data. Following snippet shows JSON representation of the same menu posted in the XML above.

```
[
   {
      "name": "Belgian Waffles",
      "price": "$5.95",
      "description": "Two of our famous Belgian Waffles with plenty of real maple syrup",
      "calories": "650"
   },
   {
      "name": "Strawberry Belgian Waffles",
      "price": "$7.95",
      "description": "Light Belgian waffles covered with strawberries and whipped cream",
      "calories": "900"
   },
   {
      "name": "Berry-Berry Belgian Waffles",
      "price": "$8.95",
      "description": "Belgian waffles covered with assorted fresh berries and whipped cream",
      "calories": "900"
   }
]
```

### <a name="RegEx"></a>RegEx:
A regular expression, regex or regex a sequence of characters that define a search pattern. Usually this pattern is then used by string searching algorithms for "find" or "find and replace" operations on strings.

* Basics:
1. Boolean "or":
A vertical bar separates alternatives. For example, gray|grey can match "gray" or "grey".
2. Grouping
Parentheses are used to define the scope and precedence of the operators . For example, gray|grey and gr(a|e)y are equivalent patterns which both describe the set of "gray" or "grey".
3. Quantification
A quantifier after a token (such as a character) or group specifies how often that preceding element is allowed to occur. The most common quantifiers are the question mark ? (indicates zero or one occurrences of the preceding element), the asterisk * (indicates zero or more occurrences of the preceding element), and the plus sign + (indicates one or more occurrences of the preceding element).
4. ```^``` Matches the starting position within the string.
5. ```$``` Matches the ending position of the string or the position just before a string-ending newline.

There are lot of other characters and meta-characters that help in formation of more complex patterns but these will get you started.
