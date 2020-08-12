import os, json
os.system('curl -u cole-wilson:12d0e4cca5a9bc2c5eb3cd40999b231b4bd8e5df -s "https://api.github.com/users/cole-wilson/repos?access_token=[12d0e4cca5a9bc2c5eb3cd40999b231b4bd8e5df]" > output.json')

data = json.loads(open('output.json').read())

a = """---
title: {title}
date: {datee}
desc: {desc}
image: {image}
site: {site}
repo: {repo}
user: {user}
download: {download}
---
{body}
"""

for x in data:
	if not os.path.isfile('_projects/' + x['name'] + '.md'):		
		os.system('touch _projects/' + x['name'] + '.md')
		f = open('_projects/' + x['name'] + '.md','w+')
		os.system('curl -s "https://raw.githubusercontent.com/' + x['owner']['login'] + '/' + x['name'] + '/master/README.md" > d.md')
		b = open('d.md').read()
		if b == '404: Not Found':
			b = str(x['description'])
		f.write(a.format(
			title=x['name'],
			datee=x['created_at'],
			desc="\"" + str(x['description']) + "\"",
			image="/img/black.jpg",
			site=x['homepage'],
			repo=x['name'],
			user=x['owner']['login'],
			download='',
			body=b
		))
		f.close()
os.system('rm -rf output.json d.md')