---
title: Functional programming tips for Python
published: false
description: If you optimize for performance, this post is not for you
tags: learning,functional,python
series: Learning functional programming
thumbnail: reindeer
date: 2020-08-22
canonical_url: https://kimmosaaskilahti.fi/blog/2020-08-22-fp-tips-for-python/
---

<!-- http://localhost:8000/blog/2020-08-22-fp-tips-for-python/ -->

FP tips for Python.

### Disclaimers

As functional programming is something that always seems to lead to heated discussions, I want to present a few disclaimers first.

First, if optimizing for performance is very important to you, you will not agree with the techniques presented in this post. That's understandable. For example, using "immutable" data structures in Python comes at a cost in performance. However, while I think performance is important, my experience suggests it's not often the main concern. What matters most is _reliable and maintainable software without bugs_. In my experience, some of the techniques presented here lead to less bugs and are (for me) easier to maintain than the more performant alternatives.

Second, I'm using the term "declarative" below. If you think my code examples have nothing to do with "declarative programming", I would be very happy if you could continue the [discussion in this thread](https://dev.to/pentacular/comment/131h1). Thank you!

Third, you may think that none of the techniques below have anything to do with functional programming. I don't disagree with you. I call them "functional programming" techniques because I happened to be introduced to them via learning functional programming. For example, [list comprehensions](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions) are idiomatic Python.

### The power of list comprehension

Not using map or filter.

Let-construct.

### Immutable data structures

Removes one whole class of bugs.

Frozen dataclasses.

Positional expansion.

Keyword expansion.

typing.Sequence

### Partial application

Addresses "missing arrow"

### Streams or "lazy" lists
