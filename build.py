f = open('netlify.toml','w+')

old = f.read()

f.write('---\nj: true\n---\n' + old)

f.close()
