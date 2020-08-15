import hashlib, mincss, minjs, os, re
def hash_file(filename):
	h = hashlib.sha1()
	with open(filename,'rb') as file:
		chunk = 0
		while chunk != b'':
			chunk = file.read(1024)
			h.update(chunk)
	return h.hexdigest()
# CSS
bigfile = open('_assets/css/main.css').read()
# Find imports
f = re.findall('\@import url\(\'(.*)\'\)',open('_assets/css/main.css').read())
for x in f:
	print('Bundling CSS file: '+x)
	if os.path.isfile('_assets/css/'+x):
		# local imports
		content = open('_assets/css/'+x).read()
		#replace relative urls in remote source to absolute
		fa = re.findall('url\((.*?)\)',content)
		for fd in fa:
			b = fd.replace('\'','').replace('"','')
			if b[0:8]!='https://' and b[0:7]!='http://' and b[0:2]!='//' and b[0:5]!='data:':
				content = content.replace(b,x+'/'+b)
				print('\t'+b)
		#add content to main css file
		bigfile=bigfile.replace('@import url(\''+x+'\');',content)
	else:
		os.system('wget -q '+x+' -O temp')
		content = open('temp').read()
		#replace relative urls in remote source to absolute
		fa = re.findall('url\((.*?)\)',content)
		for fd in fa:
			b = fd.replace('\'','').replace('"','')
			if b[0:8]!='https://' and b[0:7]!='http://' and b[0:2]!='//' and b[0:5]!='data:':
				#get absolute url
				dirr = x.split('/')[-1]
				dirr = x.replace(dirr,'')
				# print('\t'+dirr)
				content = content.replace(b,dirr+b)
				print('\t'+b+' --> '+dirr+b)
		#add content to main css file
		bigfile=bigfile.replace('@import url(\''+x+'\');',content)
		
		os.system('rm -rf temp')

# exit()
fa = re.findall('url\((.*?)\)',bigfile)
for fd in fa:
	b = fd.replace('\'','').replace('"','')
	if b[0:8]!='https://' and b[0:7]!='http://' and b[0:2]!='//' and b[0:5]!='data:':
		print(b)


os.system('rm -rf assets/;mkdir assets')
open('assets/bundle.min.css','w+').write(mincss.cssmin(bigfile)) # Make ugly
# open('assets/bundle.min.css','w+').write(bigfile) # Keep nice

hash = hash_file('assets/bundle.min.css')
os.system('mv assets/bundle.min.css assets/'+hash+'.min.css')
f = open('_includes/styles.html','w+')
f.write('<link rel="stylesheet" href="assets/'+hash+'.min.css"></link>')
f.close()

# JS
bigfile = open('_assets/js/script.js').read()
f = re.findall('\/\/import (.*?)\n',open('_assets/js/script.js').read())
for x in f:
	print('Bundling JavaScript file: '+x)
	if os.path.isfile('_assets/js/'+x):
		bigfile=bigfile.replace('//import '+x,open('_assets/css/'+x).read())
	else:
		os.system('wget -q '+x+' -O temp')
		bigfile=bigfile.replace('//import '+x,open('temp').read())
		os.system('rm -rf temp')
open('assets/bundle.min.js','w+').write(minjs.jsmin(bigfile).replace('\n',' '))
hash = hash_file('assets/bundle.min.js')
os.system('mv assets/bundle.min.js assets/'+hash+'.min.js')
f = open('_includes/scripts.html','w+')
f.write('<script src="assets/'+hash+'.min.js"></script>')
f.close()


os.system('mv _assets/icons/* .')
