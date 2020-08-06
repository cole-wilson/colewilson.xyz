import random, os

choices = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
]

os.system("sed -i 's/BOB???/" + random.choice(choices) + "/g' netlify.toml")
