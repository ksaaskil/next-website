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

Hi! In this post, I'd like to present a few functional programming techniques (FP) for Python. I'm a big fan of FP as I've found that by following its principles I can write more readable, easier-to-debug and elegant code. Python is not a functional programming language and it never will be. I think there are still many things we can learn from languages such as Haskell that are beneficial also in Python.

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
ys = [x_squared for x in range(1, 51)
                for x_squared in (x*x,)  # let x_squared = x*x
                if x_squared % 5 == 0]
```

### Use frozen dataclasses

As you may know, you cannot mutate objects in pure functional languages such as Haskell. Instead, you compose your program out of pure functions that do not mutate their inputs. It does not make much sense to try to write pure functional programs with Python, but I think the idea of favoring immutable objects over mutable ones is a good idea. If you never mutate objects after their creation, you've eliminated one whole class of potential bugs and most likely made your program easier to reason about.

For plain datastructures, Python's built-in [dataclasses](https://docs.python.org/3/library/dataclasses.html) are a good choice. With `frozen=True`, you can ensure your dataclasses cannot be mutated after their creation:

```python
from dataclasses import dataclass

@dataclass(frozen=True)
class Doggie:
  name: str
  age: int
```

If you want to change a `Doggie`'s name, you can use `replace`:

```python
from dataclasses import replace

def change_doggie_name(doggie: Doggie, new_name: str) -> Doggie:
  return replace(doggie, name=new_name)
```

Creating a new object every time will incur a performance penalty, but in most cases it won't have any noticeable effect. 

It's important to remember that frozen dataclasses aren't truly mutable as one can still mutate objects within the class:

```python
@dataclass(frozen=True)
class Doggie:
  name: str
  age: int
  attributes: dict

doggie = Doggie(name="Ben", age=10, attributes={})
doggie.attributes["color"] = "brown"  # In-place mutation
```

You can avoid this by using frozen dataclasses as properties:

```python
@dataclass(frozen=True)
class DoggieAttributes:
  color: str

@dataclass(frozen=True)
class Doggie:
  name: str
  age: int
  attributes: DoggieAttributes

doggie.attributes.color = "black"  # NOT ALLOWED
```

Changing a doggie's name can then be achieved by chaining `replace` calls:

```python
black_doggie = replace(doggie, attributes=replace(doggie.attributes, color="black"))
```

With deeply nested structures, using `replace` becomes tedious. In functional programming languages, this problem of "mutating" deeply nested structures is elegantly handled by [optics libraries](https://medium.com/@gcanti/introduction-to-optics-lenses-and-prisms-3230e73bfcfe) such as [`lens`](https://hackage.haskell.org/package/lens) in Haskell. Python has its own [`lenses`](https://pypi.org/project/lenses/) package, but I haven't found it to be that useful out there in the real world: without the power of static type checking, overuse of lenses can result in very cryptic code. 

With that said, most data structures I've encountered are at most two to three levels deep and using `replace` isn't an issue, especially when using helper functions such as

```python
def change_doggie_color(doggie: Doggie, new_color: str):
  return replace(doggie, 
                 attributes=replace(doggie.attributes, 
                                    color=new_color))
```

I've found that it's very rare you need to mutate lists or dictionaries in-place.

### Do not mutate lists or dictionaries

### Use type union instead of inheritance

In the wonderful book [_Pragmatic Programmer_](https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/), there's a cool paragraph on inheritance:

> Do you program in an object-oriented language? Do you use inheritance?
> If so, stop! It probably isn't what you want to do.

How to avoid inheritance in Python? Let's assume you'd like to work with objects of type `Doggie` and `Cat`. Both `Doggie` and `Cat` have a `say()` method and you want to put such animals in containers such as list. The classis Programming 101 solution is to make a super-class `Animal` and inherit `Doggie` and `Cat` from `Animal`:

```python
import abc

class Animal(abc.ABC):
  @abc.abstractmethod
  def say(self) -> str:
    raise NotImplementedError()

class Doggie(Animal):
  def say(self) -> str:
    return "Woof!"

class Cat(Animal):
  def say(self) -> str:
    return "Meow!"
```

Now you get classic polymorphism:

```python
import typing

def all_animals_say(animals: typing.Sequence[Animal]):
  for animal in animals:
    animal.say()
```

However, we can achieve the same without any of the problems of inheritance by using a _type union_:

```python
BetterAnimal = typing.Union[Doggie, Cat]

def all_better_animals_say(animals: typing.Sequence[BetterAnimal]):
    for animal in animals:
        print(animal.say())
```

If any class within the `BetterAnimal` doesn't have the `say()` method of proper type, the type-checker will complain.

Of course, type unions only cover one class of use cases for inheritance, so don't expect you can always get rid of inheritance via type unions. Above, the case of `Animal` superclass also wasn't a good example of true "inheritance", as the parent class worked more like an interface than all-mighty super-class.

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
