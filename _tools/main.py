import hashlib, mincss, minjs, os, re
def hash_file(filename):
	h = hashlib.sha1()
	with open(filename,'rb') as file:
		chunk = 0
		while chunk != b'':
			chunk = file.read(1024)
			h.update(chunk)
	return h.hexdigest()

bigfile = open('_assets/css/main.css').read()
f = re.findall('\@import url\(\'(.*)\'\)',open('_assets/css/main.css').read())
for x in f:
	if os.path.isfile('_assets/css/'+x):
		bigfile=bigfile.replace('@import url(\''+x+'\');',open('_assets/css/'+x).read())
	else:
		os.system('wget '+x+' -O temp')
		bigfile=bigfile.replace('@import url(\''+x+'\');',open('temp').read())
		os.system('rm -rf temp')
os.system('rm -rf assets/;mkdir assets')
open('assets/bundle.min.css','w+').write(mincss.cssmin(bigfile))
hash = hash_file('assets/bundle.min.css')
os.system('mv assets/bundle.min.css assets/'+hash+'.min.css')
f = open('_includes/styles.html','w+')
f.write('<link rel="stylesheet" href="assets/'+hash+'.min.css"></link>')
f.close()

bigfile = open('_assets/js/script.js').read()
f = re.findall('\/\/import \'(.*?)\'$',open('_assets/js/script.js').read())
for x in f:
	if os.path.isfile('_assets/js/'+x):
		bigfile=bigfile.replace('//import (\''+x+'\')',open('_assets/css/'+x).read())
	else:
		os.system('wget '+x+' -O temp')
		bigfile=bigfile.replace('//import (\''+x+'\')',open('temp').read())
		os.system('rm -rf temp')
open('assets/bundle.min.js','w+').write(minjs.jsmin(bigfile).replace('\n',' '))
hash = hash_file('assets/bundle.min.js')
os.system('mv assets/bundle.min.js assets/'+hash+'.min.js')
f = open('_includes/script.html','w+')
f.write('<script src="assets/'+hash+'.min.js"></script>')
f.close()


os.system('mv _assets/icons/* .')
