---
layout: post
title: Descriptive Statistics
---
In this post we will see about some statistical properties that describe data. These properties are collectively but not exhaustively called as Descriptive Statistics.

## Mean:
The arithmetic mean (or simply "mean") of a sample ${\displaystyle x_{1},x_{2},\ldots ,x_{n}}$, usually denoted by ${\displaystyle {\bar {x}}}$, is the sum of the sampled values divided by the number of items in the sample.

$${\bar {x}} = \frac{1}{n} \begin{pmatrix} \sum^n_{i=1} x_i\end{pmatrix}$$

e.g. mean(2,3,4) = 3

---

Though Mean is a statistic that is frequently used to describe the data at hand, the downside of *Mean* is that it is sensitive to outliers. e.g. mean(2,3,4,5) is 3.5 but mean(2,3,4,500) is 127.5.

For this reason practitioners sometimes prefer Median to mean.

---
## Median:
Median can be described as the value that divides the upper half of data from lower half. So, median of a series can easily found by arranging the data in an order(ascending or descending) and select value in the middle.

e.g. median(2,3,4,5,600) = 4

----

Now consider this statement - **The annual mean temperature of Hyderabad is 26.6 °C (79.9 °F).** Now try to picture what the year long climate in hyderabad would be like based on this statement.

The following table shows monthly average temperatures in Hyderabad

<table style="margin: 0px auto;">
<tbody>
<tr>
<th scope="row">Month</th>
<th style="height: 16px; text-align: center;" scope="row">Daily mean &deg;C (&deg;F)</th>
</tr>
<tr style="text-align: center;">
<th scope="col">Jan</th>
<td style="background: #FF850B; color: #000000;">22.2  (72.1)</td>
</tr>
<tr style="text-align: center;">
<th scope="col">Feb</th>
<td style="background: #FF7100; color: #000000;">25.1  (77.2)</td>
</tr>
<tr style="text-align: center;">
<th scope="col">Mar</th>
<td style="background: #FF5A00; color: #000000;">28.4  (83.1)</td>
</tr>
<tr style="text-align: center;">
<th scope="col">Apr</th>
<td style="background: #FF4400; color: #000000;">31.5  (88.7)</td>
</tr>
<tr style="text-align: center;">
<th scope="col">May</th>
<td style="background: #FF5400; color: #000000;">33.0 (91.4)</td>
</tr>
<tr style="text-align: center;">
<th scope="col">Jun</th>
<td style="background: #FF6300; color: #000000;">29.3 (84.7)</td>
</tr>
<tr style="text-align: center;">
<th scope="col">Jul</th>
<td style="background: #FF6900; color: #000000;">27.0 (80.6)</td>
</tr>
<tr style="text-align: center;">
<th scope="col">Aug</th>
<td style="background: #FF6600; color: #000000;">26.2 (79.2)</td>
</tr>
<tr style="text-align: center;">
<th scope="col">Sep</th>
<td style="background: #FF6C00; color: #000000;">26.6 (79.9)</td>
</tr>
<tr style="text-align: center;">
<th scope="col">Oct</th>
<td style="background: #FF7E00; color: #000000;">25.7 (78.3)</td>
</tr>
<tr style="text-align: center;">
<th scope="col">Nov</th>
<td style="background: #FF8913; color: #000000;">23.2 (73.8) </td>
</tr>
<tr style="text-align: center;">
<th scope="col">Dec</th>
<td style="background: #FF6600; color: #000000; border-left-width: medium;">21.6  (70.9)</td>
</tr>
</tbody>
</table>


Did it match with the picture you had in mind? I would take a guess and say it did not. Because the statement above gives the picture of hyderabadi climate only on an average day. It is still missing information about high and low temperatures, how they are distributed in what month, etc.

The properties Range, Variance and standard deviation will help us understand this distributions in data.

----

## Range:
 Range is the smallest interval which can contain all the data. Range can be given as the difference between largest and smallest values.


## Variance:
Variance tells how far data is spread out from the mean. It is calculated by taking the differences between each number in the set and the mean, squaring the differences (to make them positive) and dividing the sum of the squares by the number of values in the set. It is often represented as $\sigma^2$.

$$\sigma^2=\frac{1}{n}\sum_{i=0}^n(X_i-\mu)^2$$

## Standard deviation:

Standard deviation is also a measure of dispersion in data and is calculated as square root of variance.

<!-- We can see in the equation of variance that we are squaring the difference making the units squared of the base data units. This might distort the information. -->

Standard deviation is more interpretable, just because it brings back the variability of the data to the same space where data lives (i.e. if your data is in meters, then variance will be square meters and you can't exactly compare them).
