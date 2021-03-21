---
layout: post
title: Matrices and Linear algebra
---

## Linear algebra:
Linear algebra is a branch of mathematics that is widely used throughout science and engineering. Linear algebra is a form of continuous rather than discrete mathematics. A good understanding of linear algebra is essential for understanding and workingwith many machine learning algorithms.

<!--more-->

There are several mathematical obects in linear algebra.

**Scalars:** A scalar is just a single number, in contrast to most of the other objects studied in linear algebra, which are usually arrays of multiple numbers.

**Vectors:** A vector is an array of numbers. The numbers are arranged in order. We can identify each individual number by its index(position) in that ordering.Typically we give vectors lowercase names in bold typeface, such as $x$.

$$x = \begin{pmatrix}
x_1\\
x_2\\
\vdots\\
x_n\\
\end{pmatrix}$$

**Matrices:** A matrix is a 2-D array of numbers, so each element is identiﬁed by two indices instead of just one.Typically we give matrices uppercase names in bold typeface, such as $A$.

$$A = \begin{bmatrix}
A_{1,1} & A_{1,2} & \dots & A_{1,n} \\
A_{2,1} & A_{2,2} & \dots & A_{2,n}\\
\vdots & \vdots &\ddots &\vdots\\
A_{n,1} & A_{n,2} & \dots & A_{n,n}\\
\end{bmatrix}$$

Observe that each element of the matrix is in the form of $A_{i,j}$. This says that the element belong to $i^{th}$ row and $j^{th}$ column.

### More about matrices:
**Order of matrix:** Order of the matrix gives the number of rows and colums that the matrix has. It is usually given as *(no. of rows X no. of columns)*

For example $$A = \bigl( \begin{smallmatrix}1 & 2\\ 3 & 4\end{smallmatrix}\bigr)$$is a matrix of order *(2X2)*

**Transpose of matrix:** Transpose of a matrix is given by interchanging rows and columns of the matric. Transpose of a matrix $A$ is denoted as $A^T$ and if $$A = \left[
\begin{array}{cc}
  1&2\\
  3&4\\
  5&6
\end{array}
\right]$$ then $A^T$ is given as $$A^T=\left[\begin{array}{ccc}1&3&5\\2&4&6\end{array}\right]$$

 Simply putting element $A_{i,j}$ becomes $A_{j,i}$.


**Matrix product:** If $$A$$ is of shape $$m×n$$ and $$B$$ is of shape $$n×p$$, then $$C$$ is of shape $$m × p$$. We can write the matrix product just by placing two or more matrices together, for example,
$$C = AB$$
The product operation is deﬁned by:
$$C_{i,j}= \sum_kA_{i,k}B_{k,j}$$

Matrix product is distributive($$A(B+C)=AB+AC$$) and associative($$A(BC=(AB)C)$$) but not commutative($$AB \neq BA$$)

**Identity matrix:** An identity matrix is a matrix that does not change any vector when we multiply that vector by that matrix. We denote the identity matrix that preservesn-dimensional vectors as $$I_n$$.For example,
$$I_3 = \begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0\\
0 & 0 & 1\\
\end{bmatrix} $$

**Inverse matrix:** The matrix inverse of $$A$$ is denoted as$$A^{−1}$$, and it is deﬁned as the matrix such that $$A^{−1}A = I_n$$

**Diagonal matrix:** A matrix $$D$$ is diagonal if and only if $$D_{i,j}= 0$$ for all $$i \neq j$$. We have already seen one example of a diagonal matrix: the identity matrix, where all the diagonal entries are 1. We write $$diag(v)$$ to denote a square diagonal matrix whose diagonal entries are given by the entries of the vector $$v$$.

**orthogonal matrix:** An orthogonal matrix is a square matrix whose rows are mutually orthonormal and whose columns are mutually orthonormal:$$A^TA = AA^T= I$$. This implies that $$A^{−1}= A^T$$
