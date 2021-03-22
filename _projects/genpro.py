import requests
import os

a = """---
title: "{name}"
date: {updated_at}
desc: "{description}"
image: ""
site: "{homepage}"
repo: "{name}""
user: "cole-wilson"
---
{readme}
"""
repos = requests.get('https://api.github.com/users/cole-wilson/repos?per_page=300').json()

for repo in repos:
	if not os.path.isfile(repo['name']+".md"):
		continue
	if repo['description'] == None:
		repo['description'] = ""
	repo['description'] = repo['description'].replace(':','')
	if (('y')+"n")[0] == "y":
		rm = requests.get(f'https://raw.githubusercontent.com/cole-wilson/{repo["name"]}/master/README.md').content.decode()
		with open(repo['name']+".md",'w+') as f:
			f.write(a.format(readme=rm,**repo))