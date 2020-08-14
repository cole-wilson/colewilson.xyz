import hashlib, mincss, os, re

bigfile = ''

f = re.findall('\@import url\(\'(.*)\'\)',open('_assets/css/main.css').read())
for x in f:
	if os.path.isfile('_assets/css/'+x):
		bigfile=open('_assets/css/'+x).read()+bigfile
	else:
		os.system('wget '+x+' -O temp')
		bigfile=open('temp').read()+bigfile
		os.system('rm -rf temp')
bigfile=open('_assets/css/main.css').read()+bigfile

def hash_file(filename):
	h = hashlib.sha1()
	with open(filename,'rb') as file:
		chunk = 0
		while chunk != b'':
			chunk = file.read(1024)
			h.update(chunk)
	return h.hexdigest()

os.system('rm -rf assets/;mkdir assets')
open('assets/bundle.min.css','w+').write(mincss.cssmin(bigfile))
hash = hash_file('assets/bundle.min.css')
os.system('mv assets/bundle.min.css assets/'+hash+'.min.css')

for path, directories, files in os.walk('.'):
	for file in files:
		if '.html' in file:
			print(path+'/'+file)
			open(path+'/'+file,'w+').write(open(path+'/'+file).read().replace('{% css main %}','<link rel="stylesheet" href="assets/'+hash+'.min.css"></link>'))


hash = hash_file('_assets/js/script.js')

os.system('mv _assets/js/script.js assets/'+hash+'.js')

for path, directories, files in os.walk('.'):
	for file in files:
		if '.html' in file:
			print(path+'/'+file)
			open(path+'/'+file,'w+').write(open(path+'/'+file).read().replace('{% js main %}','<script src="assets/'+hash+'.js"></script>'))

os.system('mv _assets/icons/* .')
