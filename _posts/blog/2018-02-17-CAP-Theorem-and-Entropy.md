---
layout: post
title: CAP Theorem and Entropy
---

## Distributed data storage:
Distributed data storage is a technique of storing data where information is stored on more than one node, often in a replicated fashion.

### Properties of Distributed data storage systems:
When a Distributed data storage system is posed with a quiery the response given by the system depends on the properties of Consistency, Availability, Partition tolerance.

**Consistency:** A guarantee that every node in a distributed cluster returns the same, most recent, successful write. Consistency refers to every client having the same view of the data.

**Availability:** Every non-failing node returns a response for all read and write requests in a reasonable amount of time. The key word here is every. To be available, every node on (either side of a network partition) must be able to respond in a reasonable amount of time.

**Partition Tolerant:** The system continues to function and upholds its consistency guarantees in spite of network partitions. Network partitions are a fact of life. Distributed systems guaranteeing partition tolerance can gracefully recover from partitions once the partition heals.

## CAP Theorem:
The CAP theorem is a tool used to makes system designers aware of the trade-offs while designing networked shared-data systems. CAP has influenced the design of many distributed data systems. It made designers aware of a wide range of tradeoffs to consider while designing distributed data systems.

**The CAP theorem categorizes systems into three categories:**

* **CP (Consistent and Partition Tolerant)** - At first glance, the CP category is confusing, i.e., a system that is consistent and partition tolerant but never available. CP is referring to a category of systems where availability is sacrificed only in the case of a network partition.
* **CA (Consistent and Available)** - CA systems are consistent and available systems in the absence of any network partition. Often a single node's DB servers are categorized as CA systems. Single node DB servers do not need to deal with partition tolerance and are thus considered CA systems. The only hole in this theory is that single node DB systems are not a network of shared data systems and thus do not fall under the preview of CAP.
* **AP (Available and Partition Tolerant)** - These are systems that are available and partition tolerant but cannot guarantee consistency.

**CAP theorem and its interpretation:**
CAP theorem states that in case of a network partition (a rare occurrence) one needs to choose between availability and partition tolerance. In any networked shared-data systems partition tolerance is a must. Network partitions and dropped messages are a fact of life and must be handled appropriately. Consequently, system designers must choose between consistency and availability. Simplistically speaking, a network partition forces designers to either choose perfect consistency or perfect availability. Picking consistency means not being able to answer a client's query as the system cannot guarantee to return the most recent write. This sacrifices availability. Network partition forces nonfailing nodes to reject clients' requests as these nodes cannot guarantee consistent data. At the opposite end of the spectrum, being available means being able to respond to a client's request but the system cannot guarantee consistency, i.e., the most recent value written. Available systems provide the best possible answer under the given circumstance.

## Entropy:
Entropy is a measure of unpredictability of the state, or equivalently, of its average information content.

 To have a better undertanding consider this scenario, We have three bags with 8 [scrabble](https://en.wikipedia.org/wiki/Scrabble) tiles each in following fashion.
```
         AAAAAAAA        AAAABBCD        AABBCCDD
         Bucket 1        Bucket 2        Bucket 3
```
Now Let’s say we want to draw a random letter from one of the buckets. On average, how many questions do we need to ask to find out what letter it is?

For bucket 1 it is 0 questions as only A will come out.
For bucket 3 it is 2 questions (Q1 - Is it A or B Q2 - a) If the answer to question 1 is “yes”: Is the letter A? If the answer to question 1 is “no”: Is the letter C?)
For bucket 2 it is 4 questions

So the number of questions required to answer the question is

```
         AAAAAAAA        AAAABBCD        AABBCCDD
         Bucket 1        Bucket 2        Bucket 3
             0               4               2
```
This is entropy. It is easy to predict bucket 1 so it has less entropy. It is hard to predict bucket 2 hence it has large entropy.

The general formula for entropy is given as

$$ Entropy = -\sum_{i=1}^n p_i \log_2 p_i
$$

Where there are n classes, and $$ p_i $$ is the probability an object from the $$ i^{th} $$ class appearing.

### Uses of entropy in machine learning:
#### Bayesian methods:
Normal distribution is a common modelling choice in machine learning. The goal then becomes minimizing the entropy and increase the confidence while making predictions.

#### Classification methods:
In ID3 (Iterative Dichotomiser 3) and thereby its extention C4.5 entropy is used to build the tree.

Formation of decision tree starts at the root node, by splitting the data set S into a number of subsets according to all possible values of the attribute that minimizes the (combined) entropy in the resulting subsets. This procedure is repeated recursively until there are no more attributes left to split.


### References:
1. [Entropy](https://en.wikipedia.org/wiki/Entropy_(information_theory))
2. [Shannon Entropy](https://medium.com/udacity/shannon-entropy-information-gain-and-picking-balls-from-buckets-5810d35d54b4)
