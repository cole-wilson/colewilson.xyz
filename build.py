---
description: prebuild
---
import random, os, yaml

choices = [
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a"
]

os.system("sed -i 's/BOB???/" + random.choice(choices) + "{{page.description}}/g' netlify.toml")
