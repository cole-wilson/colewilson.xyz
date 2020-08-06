f = open('netlify.toml','w+')
old = f.read()
f.write('---\nj: true\n---\n' + str(old))
f.close()
import os
os.system('cp netlify.toml test.txt')
