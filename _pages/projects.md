---
title: Projects
permalink: /projects/
layout: archive
date: 2020-07-21T17:29:16.786Z
desc: A list of all projects on the site
---
<ul>
  {% for post in site.projects %}
		<li class="archive-card">
		<a href="{{ post.url }}">
			<div style="background-image:url({{post.image}});">
      	<h4>{{post.title}}</h4>
			</div>
      <p>{{post.desc}}</p>
		</a>
    </li>
  {% endfor %}
</ul>
