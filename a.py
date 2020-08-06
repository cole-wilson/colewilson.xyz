---
title: redirects file
---
# Force HTTPS
http://colewilson.xyz/* https://colewilson.xyz/:splat 301!

{% for url in site.links %}
  {% if url.countries or url.languages %}
  
  {% for country in url.countries %}
/u/{{url.key}} {{url.u}} 302! Country={{url.country}}
  {% endfor %}
  {% for language in url.languages %}
/u/{{url.key}} {{url.u}} 302! Language={{url.language}}
  {% endfor %}
  {% else %}
/u/{{url.key}} {{url.u}} 302!
  {% endif %}
  
{% endfor %}
