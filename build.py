f = open('netlify.toml','w+')
f.write('---\nj: true\n---\n' + str(f.read()))
f.close()
import os
os.system('cp netlify.toml test.txt')
