---
title: "bayan"
date: 2020-03-29T03:38:21Z
desc: ""
image: ""
site: "None"
repo: "bayan""
user: "cole-wilson"
---
# Bayan Machine Learning

Bayan is a small simple Python module to analyze files and strings.

## Example

Below is an example of a program that learns to differentiate between pictures of cats and dogs.

**It is assumed that you have downloaded bayan.py in the same diectory as your program.**

```python
import bayan as b

b.init(['cat','dog'])

f = b.getfile('https://www.example.com/cat1.jpg') #Get file from URL and string it.
b.train(f,'cat') #Train cat1.jpg to slot 1


f = b.getfile('https://www.example.com/dog1.jpg') #Get file from URL and string it.
b.train(f,'dog') #Train dog1.jpg to slot 2


f = b.getfile('https://www.example.com/cat2.jpg')#Get file to test.
result = b.analyze(f)

print(result) #Returns 'cat'
```
Of course, you must provide it with more exmples.
## Advanced Options

*The higher the number, the more precise. Lower numbers are more inaccurate, but high numbers are too specific.*

