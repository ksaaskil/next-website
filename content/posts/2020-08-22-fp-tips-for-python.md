---
title: Functional programming tips to power up your Python code
published: false
description: If you optimize for performance, this post is not for you
tags: learning,functional,python
series: Learning functional programming
thumbnail: reindeer
date: 2020-08-22
canonical_url: https://kimmosaaskilahti.fi/blog/2020-08-22-fp-tips-for-python/
---

<!-- http://localhost:8000/blog/2020-08-22-fp-tips-for-python/ -->

Hi! In this post, I'd like to share some of my favorite functional programming -inspired techniques for Python code. The tips presented here may not be functional programming for you but "just Python", and you would be correct. In the context of this post, I consider a technique to be "functional programming" if one can write essentially the same code in Haskell.

### Use list comprehensions

The first technique is to use [list comprehensions](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions) to create lists and to perform operations such as `map` and `filter` on lists. 

In Haskell, you could use a list comprehension as follows:

```haskell
ghci> [x*2 | x <- [1..10], x*2 >= 12] 
[12,14,16,18,20]
```

Here we're traversing the list `[1..10]` by filtering values by `x*2 >= 12` and mapping with `x*2`.

In Python, you would achieve the same with

```python
>>> [2*x for x in range(1, 11) if 2*x >= 12]
[12, 14, 16, 18, 20]
```

The more "imperative" version of the above would be:

```python
a = []
for i in range(1, 11):
  val = 2*x
  if val >= 12:
    a.append(val)
print(a)
```

One can also perform `flatmap` operations with list comprehensions:

```python
>>> xss = [[1, 2], [3, 4], [5, 6]]
>>> [2*x for xs in xss for x in xs]
[2, 4, 6, 8, 10, 12]
```

One problem I often face with list comprehensions in Python is that there's no `let` construct. This construct would be useful for improving code readability and to avoid re-computing intermediate values by binding them to variables. For example, in Haskell you could do:

```hs
ghci> [y | x <- [1..50], let y=x*x, y `mod` 5 == 0]
[25,100,225,400,625,900,1225,1600,2025,2500]
```

Here we avoid computing `x*x` twice for every element by binding the value to variable `y`.

In Python, we could write

```python
>>> [x*x for x in range(1, 51) if x*x % 5 == 0]
[25, 100, 225, 400, 625, 900, 1225, 1600, 2025, 2500]
```

but this would compute `x*x` twice for every element. We can circumvent this by using an [auxiliary one-element tuple](https://stackoverflow.com/a/33562793/10561443) as follows:


```python
>>> [y for x in range(1, 51) for y in (x*x,) if y % 5 == 0]
[25, 100, 225, 400, 625, 900, 1225, 1600, 2025, 2500]
```

It's not as readable as in Haskell, but sometimes it feels like the best choice. You can make the construct more readable by splitting it into multiple lines:

```python
ys = [y for x in range(1, 51)
        for y in (x*x,)  # let y = x*x
        if y % 5 == 0]
```

### Use immutable data structures




### Disclaimers

As functional programming is something that always seems to lead to heated discussions, I want to present a few disclaimers first.

First, if optimizing for performance is very important to you, you will not agree with the techniques presented in this post. That's understandable. For example, using "immutable" data structures in Python comes at a cost in performance. However, while I think performance is important, my experience suggests it's not often the main concern. What matters most is _reliable and maintainable software without bugs_. In my experience, some of the techniques presented here lead to less bugs and are (for me) easier to maintain than the more performant alternatives.

Second, I'm using the term "declarative" below. If you think my code examples have nothing to do with "declarative programming", I would be very happy if you could continue the [discussion in this thread](https://dev.to/pentacular/comment/131h1). Thank you!

Third, you may think that none of the techniques below have anything to do with functional programming. I don't disagree with you. I call them "functional programming" techniques because I happened to be introduced to them via learning functional programming. For example, [list comprehensions](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions) are idiomatic Python.


### Immutable data structures

Removes one whole class of bugs.

Frozen dataclasses.

Positional expansion.

Keyword expansion.

typing.Sequence

### Partial application

Addresses "missing arrow"

### Streams or "lazy" lists
