---
layout: post
title: Basics of Python
subtitle: A complete jittery beginner's guide to python   
---

In this post we will see the basics of python language including installation, datatypes and other features of python.

# Introduction:

Python is an object-oriented, interpreted, and interactive programming language. Python owes its popularity partly to its interactivity and partly to its relevance in fields ranging from Programming education, Desktop GUI, Scientific and numerical computing, Web and Internet development,etc


# Installation:
Python, being a very famous and widely used language with applications in multiple fields, has two major versions and multiple distributions

## Versions:
Python has two major versions of public release generally referred to as Python2 and Python3. The version Python2 is currently obsolete and will reach end of support by January 2020.Previous applications are now being ported from Python2 to Python3 and all new applications directly being written in Python3.

According to official statement - "**Python 2.x is legacy, Python 3.x is the present and future of the language**"

## Distributions:
Python has multiple active distributions each catering to a different application.
Most famous of them are vanilla python and Anaconda for Data science and machine learning.

Anaconda distribution comes with multiple useful modules in addition to base python. The installer for your operating system can be found [here](https://www.anaconda.com/download)

## Modules:
Modules are collection of python objects defining python functions, objects and variables which aim at serving certain functionality. For instance "http" module is aimed to handle basic http requests and os module is aimed to interact with underlying os.

 New modules can be installed from a centralized repository called as pypi(Python package index). The installation is carried out bby following command

 ``` python
pip install <module name>
 ```
 They can be imported after installation as follows:

 ```
 import <module name>
 ```

 # Python Basics:
 ## Data types:
 Python supports boolean, integer, float, complex, string, datetime.

 ## Data structures:
**Tuple:** Tuple is an ordered sequence of items. Tuples are immutable meaning tuple once created cannot be edited.

All the items in a tuple do not need to be of the same type.
It is declare as below.
```
t = (8,'hello')
```

**List:** List one of the most used datatype in Python and is very flexible. It is a mutable tuple.
It is declare as:
```
t = [8,'hello']
```

**Set:** Set is an unordered collection of unique items. Set is defined by values separated by comma inside braces { }. Items in a set are not ordered.
It is declare as:
```
a = {5,2,3,1,4}
```
**Dictionary:** Dictionary is an unordered collection of key-value pairs. It is usually used to handle json data.

```
d = {1:'value','key':2}
```
## Loops and conditionals:
Python supports "for" and "while" loop and "if", "else" and "elseif" in conditionals.

## Code blocks:
The code blocks in python are identified by indents or fixed number of white spaces before the block.
