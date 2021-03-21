---
title: Tags
permalink: /tags
layout: archive
date: 2021-03-19T19:26:27.210Z
desc: Tags for posts on colewilson.xyz.
overidesub: false
---
<ul>
  {% for tag in site.tags %}<li><a href="#{{ tag[0] | slugify }}" class="post-tag">{{ tag[0] }}</a></li>{% endfor %}
  {% for project in site.projects %}{% for tag in project.tags %}<li><a href="#{{ tag[0] | slugify }}" class="post-tag">{{ tag[0] }}</a></li>{% endfor %}{% endfor %}

</ul>
{% for tag in site.tags %}
<h4 id="{{ tag[0] | slugify }}">{{ tag | first }}</h4>
<ul class="tags-expo-posts">
{% for post in tag[1] %}
<a class="post-title" href="{{ site.baseurl }}{{ post.url }}"><li>{{ post.title }}:<small class="post-date">{{ post.date | date_to_string }}</small></li></a>
{% endfor %}
</ul>
{% endfor %}
