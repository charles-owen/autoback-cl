# autoback-cl

This component implements a simple "back button" behavior. I'm not a big fan of the back
button and always try to provide users and alternative as part of the actual interface. For 
years I did this with a simple PHP library that kept a stack of visited pages in the 
session. Then I could put a 'Back To' link on the page that they could follow. This 
was really useful for pages that could be visited from any directing page, like pages with
help information. But, my new system is moving to a RESTful server, so no sessions.

This version accomplishes the same thing in Javascript, only better. To use it, just
add the cl-autoback class to a link:

``` HTML
<a class="cl-autoback" href="b.html">Link to b.html</a>
```

Following this link will add the current page to the autoback stack. Then, on any page 
you want an autoback link on (a link back to where you linked from), just add this 
div:

``` HTML
<div class="cl-autoback"></div>
```

This will appear as a link back to the page that you clicked on to get to this page, provided
it has the cl-autoback class on the link. Arriving at a page other than through a cl-autoback
link will clear the autoback stack. 
 
## Install

### CDN

``` html
<script src="https://unpkg.com/icons-cl/dist/autoback-cl.js"></script>
<!-- or -->
<script src="https://unpkg.com/icons-cl/dist/autoback-cl.min.js"></script>
```

### Package managers

[npm](https://www.npmjs.com/package/autoback-cl): `npm install autoback-cl --save`

## Using the Library

The library consists of only the single .js file autoback-cl.js or the
minimized version autoback-cl.min.js. The icon images and style sheets are
included in the .js file.

## The strip option

The return page is determined entirely based on the page title. Since some sites (including my own) 
will prefix titles with additional information you may not want in this link, adding the cl-strip option
to the div will strip off the first word.

``` HTML
<div class="cl-autoback cl-strip"></div>
```

For example, supposed you have the page 'CSE335 Step 1: Introduction to the course' linking to the page
'CSE335 Error Help: not found'. Clicking on the link for the error help page without the cl-strip option would
create a link on that page with the text 'CSE335 Step 1: Introduction to the course'. If the cl-strip option
is employed, the first word is stripped: 'Step 1: Introduction to the course'. This is done to make the links
cleaner. 

## License

Copyright 2018 Michigan State University

Cirsim is released under the MIT license. Image is Copyright jQuery Foundation.

* * *

Written and maintained by Charles B. Owen

