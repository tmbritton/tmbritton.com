---
layout: post
title:  "tmbritton.com redesigned in Jekyll!"
subtitle: "Of ruby, front matter, and a general comparison of a couple of static site generators I tried."
date:   2014-03-11 23:12:00
nav: blog
categories: blog
image: default.jpg
published: true
---

Sometime around performing the 50th core/plugin update on my [Wordpress] blog I began to grow weary. Then I stopped updating my website. Before doing any writing or coding or anything there were always maintenance issues to address. [Wordpress] was great for learning some [PHP]. It was certainly a great springboard for what I do nowadays in [Drupal], but I figured there must be a better way for me to run a website.

First of all, as a web developer why would I ever want to see a rich text editor? I want to be able to update my site using nothing but the command line. And now I can. I redesigned the website in [Jekyll]. 

Now, I'm sure I don't need to tell you what a static-site generator is, or the speed and maintenance advantages to running a website this way. If you've somehow found my site you're really scraping the bottom of the barrel and must have read an article about this stuff before. But anyway:

###Advantages of a Static Site###

* __Security__: I don't have to worry about updating plugins or core software to prevent [Jacko Nexus] from hacking my face.
* __Performance__: No server-side processing. A monolithic framework such as [Drupal] simply can't run under any load without some crazy-ass reverse-proxy like [Varnish]. Not that my site gets any traffic, but still, I'm sure as shit not gonna configure Varnish for a blog.
* __Deployment__: It's as simple as [rsync]. I could have gone as far as to host it on [Github Pages], but it was easy enough just to put it in the same [Dreamhost] account as the old Wordpress site. No messing with DNS this way.

###Things that will need Work-arounds###
* __Comments__: I went with [Disqus]. There's no particular reason I chose Discus, it just seems to be the most popular javascript-driven commenting system. This kinda violates the whole "own your own data" principle, but this site is so bereft of activity that the forms are mostly decoration.
* __Search__: If I get around to it, I can use [Apache Solr] or [Elasticsearch] for search on this site. They're both free-standing search servers that are accessible via simple GET request.

###Planned Features###
* __Art Gallery__: I gotta build a gallery system. Shouldn't be too hard. Jekyll can handle post types, so it'll just be a matter of setting up another template. I figure I'll steal Pinterest's layout for the gallery section since I stole Medium's for the blog.

* __More Code__: I'm gonna write about code a lot more with this incarnation of the site. I do far more coding than art these days.

So check back, I'll have an RSS feed going eventually so you'll never miss an amazing post.

[Wordpress]: http://wordpress.org
[Drupal]: http://drupal.org
[PHP]: http://php.net
[Jekyll]: http://jekyllrb.com/
[Varnish]: https://www.varnish-cache.org/
[Jacko Nexus]: http://www.zone-h.org/archive/notifier=Jacko%20Nexus
[rsync]: http://linux.die.net/man/1/rsync
[Github Pages]: https://pages.github.com/
[Dreamhost]: http://www.dreamhost.com/
[Disqus]: http://disqus.com/
[Apache Solr]: http://lucene.apache.org/solr/
[Elasticsearch]: http://www.elasticsearch.org/