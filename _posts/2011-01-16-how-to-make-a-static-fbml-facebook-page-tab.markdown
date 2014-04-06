---
layout: post
status: draft
published: false
title: How to Make a Static FBML Facebook Page Tab
author: tmbritton
author_login: tmbritton
author_email: britton.tm@gmail.com
wordpress_id: 387
wordpress_url: http://www.tmbritton.com/?p=387
date: '2011-01-16 18:31:39 -0600'
date_gmt: '2011-01-16 23:31:39 -0600'
categories:
- Tutorial
tags:
- facebook
- fbml
- kickstarter
- sky candy
- tutorial
---
<p>Looking for a way to differentiate yourself from among the sea of blue shaded Facebook business pages?  Looking for a way to make your brand identity prominent on your Facebook page?  Tired of looking like every other page on Facebook?  Making a page tab is an easy way to add some visual interest and make a statement on Facebook.</p>
<p>Let's look at a couple of examples.  Here's a <a href="http://www.facebook.com/wholefoods?v=app_10442206389&amp;ref=ts">recipe tab from Whole Foods Market</a>.  Notice how they use their own color palette but retain Facebook's font families so that the tab has it's own personality yet doesn't look completely separate from the surrounding Facebook layout.  Here's another <a href="http://www.facebook.com/cocacola#!/cocacola?v=app_161193133389">example from Coca Cola</a>.  They use the canvas page as their landing page for their Facebook page to put their brand identity on full display as soon as people arrive at their page.</p>
<p>Let's get started.</p>
<h3>Step 1: Layout</h3>
<p>[caption id="attachment_408" align="alignright" width="253" caption="Sky Candy Layout"]<a href="/assets/img/2011/01/layout2.jpg"><img class="size-medium wp-image-408" title="Sky Candy Layout" src="/assets/img/2011/01/layout2-253x300.jpg" alt="Sky Candy Layout" width="253" height="300" /></a>[/caption]</p>
<p>For my example, I'm going to be making a tab for an aerial arts collective in Austin named <a href="http://www.facebook.com/SkyCandyAustin?v=app_7146470109&amp;ref=ts">Sky Candy</a>.</p>
<p>Follow your favorite layout process, pencil &amp; paper, Photoshop, Fireworks, some esoteric open source solution I haven't heard of, and design for a maximum of 520 pixels.  There's not a maximum height, but keep in mind what you want people to see at first glance.  Don't bury the lead down the page where people on a laptop would have to scroll.  I'm assuming that my readers know the basics of HTML/CSS and will know the steps involved in translating their design to markup.</p>
<h3>Step 2: Code</h3>
<p>For the initial coding of the page, I recommend initially working on it as you would any web page.  Open your favorite text editor (I'm liking <a href="http://www.barebones.com/products/textwrangler/">Textwrangler</a> nowadays) and begin your layout.  Only, with this layout skip the doctype, &lt;head&gt;, &lt;html&gt;,  and &lt;body&gt; tags.  They're not needed as the html you're writing will be inserted inside of Facebook's page.  Start with a wrapping div.</p>
<p>I recommend two styles, the rest is entirely determined by how best to code your layout.</p>
<p>[css]div#wrap {<br />
width:520px;<br />
position:relative;<br />
}[/css]</p>
<h4>Tips</h4>
<ul>
<li>520 pixels is the maximum width of the tab, so it'll be helpful when you're initially coding the layout to have that defined.</li>
<li>The position:relative is so that you can absolutely position elements inside of the container, if you need to.</li>
<li>You don't necessarily need to define the type styles in the stylesheet if you're fine with using the Facebook font stacks.  I'll usually leave Facebook's text styling intact so that the tab blends well with the rest of the page.</li>
</ul>
<p>When you're done coding your layout FTP your CSS file and all of your images to a web server.  Change all of your image src and CSS href attributes so that they are pointing to the files on the server.  In the next step we're going to copy and paste the HTML from the layout file into Facebook.</p>
<h3>Step 3: Facebook</h3>
<p>For this step you need to be an admin of the page you're going to add the tab to.  First, I recommend setting up a test page on which to load the tab.  This way you can work out any problems that you might have with the tab before placing it on the page where people might see it.  You can do it here: <a href="http://www.facebook.com/pages/">http://www.facebook.com/pages/</a>.  There's a "Create Page" link at the top right of the page.</p>
<p>[caption id="attachment_424" align="aligncenter" width="300" caption="Create Page"]<a href="/assets/img/2011/01/create-page.png"><img class="size-medium wp-image-424" title="Create Page" src="/assets/img/2011/01/create-page-300x158.png" alt="Create Page" width="300" height="158" /></a>[/caption]</p>
<p>Name it whatever you want.  Creatively, I named mine, "Tom's Test Page."  Your new page will look like this:</p>
<p>[caption id="attachment_426" align="aligncenter" width="300" caption="Tom&#39;s Test Page"]<a href="/assets/img/2011/01/test_page.png"><img class="size-medium wp-image-426" title="Tom's Test Page" src="/assets/img/2011/01/test_page-300x156.png" alt="Tom's Test Page" width="300" height="156" /></a>[/caption]</p>
<p>From here, find the <strong>Edit Page</strong> link underneath the profile picture of the page.</p>
<p>[caption id="attachment_428" align="aligncenter" width="251" caption="Edit Page"]<a href="/assets/img/2011/01/edit-page.png"><img class="size-full wp-image-428" title="Edit Page" src="/assets/img/2011/01/edit-page.png" alt="Edit Page" width="251" height="271" /></a>[/caption]</p>
<p>You'll bring up the Basic Information edit screen. Click the <strong>Apps</strong> link in the navigation on the left side of the page.</p>
<p>[caption id="attachment_430" align="aligncenter" width="300" caption="Edit Basic Info Screen"]<a href="/assets/img/2011/01/basic-info.png"><img class="size-medium wp-image-430" title="Edit Basic Info Screen" src="/assets/img/2011/01/basic-info-300x131.png" alt="Edit Basic Info Screen" width="300" height="131" /></a>[/caption]</p>
<p>This will bring up the Apps screen.  This shows a selection of apps that can be added to your page.  At the very bottom is the <strong>Static FBML</strong> app.  Click the <strong>Go To App</strong> link.</p>
<p>[caption id="attachment_432" align="aligncenter" width="300" caption="Go To App"]<a href="/assets/img/2011/01/gotoapp.png"><img class="size-medium wp-image-432" title="Go To App" src="/assets/img/2011/01/gotoapp-300x207.png" alt="Go To App" width="300" height="207" /></a>[/caption]</p>
<p>This brings up the <strong>FBML Edit Box</strong>.  This is where you can paste in the HTML layout you made earlier.</p>
<p>[caption id="attachment_433" align="aligncenter" width="300" caption="FBML Edit Box"]<a href="/assets/img/2011/01/fbml-edit-box.png"><img class="size-medium wp-image-433" title="FBML Edit Box" src="/assets/img/2011/01/fbml-edit-box-300x203.png" alt="FBML Edit Box" width="300" height="203" /></a>[/caption]</p>
<p>Name it whatever you like, copy and paste the content of your HTML file and click <strong>Save Changes</strong>.</p>
<p>[caption id="attachment_434" align="aligncenter" width="300" caption="Copy, Paste, Save Changes"]<a href="/assets/img/2011/01/savechanges.png"><img class="size-medium wp-image-434" title="Copy, Paste, Save Changes" src="/assets/img/2011/01/savechanges-300x252.png" alt="Copy, Paste, Save Changes" width="300" height="252" /></a>[/caption]</p>
<p>You'll get a<strong> Changes Saved</strong> message at the top of the screen.  From here click the link at the top left of the page to view your page and see what the new tab looks like.</p>
<p>[caption id="attachment_435" align="aligncenter" width="300" caption="Changes Saved"]<a href="/assets/img/2011/01/changes-saved.png"><img class="size-medium wp-image-435" title="Changes Saved" src="/assets/img/2011/01/changes-saved-300x115.png" alt="Changes Saved" width="300" height="115" /></a>[/caption]</p>
<p>The new tab will be in the navigation of the page.  Click it and let's find out if everything worked.</p>
<p>[caption id="attachment_436" align="aligncenter" width="300" caption="New Tab"]<a href="/assets/img/2011/01/test-tab.png"><img class="size-medium wp-image-436" title="New Tab" src="/assets/img/2011/01/test-tab-300x64.png" alt="New Tab" width="300" height="64" /></a>[/caption]</p>
<p>And... Success!</p>
<p>[caption id="attachment_437" align="aligncenter" width="300" caption="Success!"]<a href="/assets/img/2011/01/success.jpg"><img class="size-medium wp-image-437" title="Success!" src="/assets/img/2011/01/success-300x209.jpg" alt="Success!" width="300" height="209" /></a>[/caption]</p>
<p>Hopefully everything look correct.  As with any web project I find there's usually a couple of things to correct.</p>
<h4>Tip</h4>
<p>Facebook imports and caches your CSS file.  To get it to update, give it a <a href="http://en.wikipedia.org/wiki/Query_string">query string</a> in the link href and increment it to force Facebook to update the CSS.  This was the source of much frustration the first time I made a Static FBML page tab.</p>
<p>[caption id="attachment_440" align="aligncenter" width="300" caption="CSS Query String"]<a href="/assets/img/2011/01/increment.png"><img class="size-medium wp-image-440" title="CSS Query String" src="/assets/img/2011/01/increment-300x64.png" alt="CSS Query String" width="300" height="64" /></a>[/caption]</p>
<h3>Wrapping Up</h3>
<p>When everything looks good on your test page follow the same process above and copy the code from your test page into the <strong>Static FBML editor</strong> of the page you were looking to update.  And that's all there is to creating a very basic FBML tab.</p>
<h4>What Next?</h4>
<p>There's a lot of FBML options to explore.  From <a href="http://www.kimwoodbridge.com/fbml-how-to-add-a-share-button-to-your-facebook-fan-page/">basic sharing buttons</a> to more complex if/else interactions.  Check out the <a href="http://developers.facebook.com/docs/reference/fbml/">FBML documentation</a> in Facebook's developer reference site.  You can see the tab I made in the tutorial in action on the <a href="http://www.facebook.com/SkyCandyAustin?v=app_7146470109&amp;ref=ts">Sky Candy Facebook fan page</a>.  If you're more into aerial arts than web tutorials, you can <a href="http://www.kickstarter.com/projects/skycandy/sky-candy-aerial-arts-collective">check out their Kickstarter</a>.</p>
<p>You can view the files I used to make the tab.  Here's the <a href="http://tmbritton.com/skycandykickstarter/index.php">HTML file</a>.  View the source to see the markup.  <a href="http://tmbritton.com/skycandykickstarter/kickstarter.css">Here's the CSS</a>.  You can also download the <a href="http://tmbritton.com/skycandykickstarter/layout.psd">psd layout</a>.  The photo is by Ryan Hayes at <a href="http://www.aerialartsphotography.com/">Aerial Arts Photography</a>.</p>
<p>May the force be with you in all your FBML adventures!</p>
