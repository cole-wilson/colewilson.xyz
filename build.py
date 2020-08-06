f = open('netlify.toml','w+')
f.write('---\nj: true\n---\n' + str(f.read()))
f.close()
