---
title: Posts
permalink: /posts/
layout: archive
date: 2020-07-21T17:27:52.276Z
desc: A list of all posts on the site
---
<ul>
  {% for post in site.posts %}
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
