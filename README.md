Simple jQuery news ticker plugin
================================

A really simple news ticker built as a jQuery plugin

Pre-requisites
------------
news_ticker.js is dependent on the [jQuery](http://www.jquery.com) javascript library.

Installation
------------
Place the javascript/css files in any directory you desire and reference them in the head of your page. Make sure that you reference jQuery before news_ticker.js

    <link rel="stylesheet" type="text/css" href="news_ticker.css" />
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
    <script type="text/javascript" src="news_ticker.js"></script>


HTML markup
-----------
The plugin requires a container with an id and either an ordered or unordered list. Be sure to maintain class names:

    <div id="myContainerId">
      <ol class="ticker-list">
        <li class="item"><a href="#">Here's the first news headline</a></li>
        <li class="item"><a href="#">A second news item comes next</a></li>
        <li class="item"><a href="#">Let's create a third to fill the list</a></li>
        <li class="item"><a href="#">And we'll finish off with a fourth news headline</a></li>
      </ol>
    </div>


Plugin instantiation
--------------------
    <script type="text/javascript">
      jQuery(function($){
        $('#myContainerId').newsTicker();
      });
    </script>

Parameters
----------
The following options can be set:

* **speed** (in milleseconds) - this controls the speed of the fade between headlines. Default is 1000.
* **delay** (in milleseconds) - this controls the delay before the next transitions between headlines. Default is 3000.

These are set as follows:

    $('#myContainerId').newsTicker({speed:500,delay:4000});

License
--------
<a rel="license" href="http://creativecommons.org/licenses/by/2.0/uk/"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/2.0/uk/80x15.png" /></a><br /><span xmlns:dc="http://purl.org/dc/elements/1.1/" property="dc:title">News Ticker</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://olvado.com" property="cc:attributionName" rel="cc:attributionURL">Oli Matthews</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/2.0/uk/">Creative Commons Attribution 2.0 UK: England &amp; Wales License</a>.<br />Based on a work at <a xmlns:dc="http://purl.org/dc/elements/1.1/" href="http://github.com/olvado/news_ticker" rel="dc:source">github.com/olvado/news_ticker</a>.

