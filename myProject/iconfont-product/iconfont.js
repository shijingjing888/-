(function(window){var svgSprite='<svg><symbol id="icon-shoucang" viewBox="0 0 1024 1024"><path d="M596.8 241.6L560 280c-25.6 25.6-68.8 25.6-94.4 0l-38.4-38.4c-73.6-73.6-193.6-80-268.8-11.2-80 73.6-83.2 200-6.4 276.8l315.2 315.2c24 24 65.6 24 89.6 0l315.2-315.2c76.8-76.8 73.6-203.2-6.4-276.8-75.2-67.2-193.6-62.4-268.8 11.2z m-44.8-44.8c97.6-97.6 254.4-105.6 356.8-14.4 108.8 99.2 112 267.2 9.6 369.6L601.6 867.2c-49.6 49.6-131.2 49.6-180.8 0L107.2 552C4.8 449.6 8 281.6 116.8 182.4c100.8-92.8 259.2-83.2 356.8 14.4l38.4 38.4c1.6 1.6 3.2 1.6 4.8 0l35.2-38.4z" fill="#4A576A" ></path></symbol><symbol id="icon-gouwuche" viewBox="0 0 1024 1024"><path d="M847.8 217.1H210.6l-14.3-98.4H68.4c-16.3 0-29.5 13.3-29.5 29.5 0 16.3 13.2 29.5 29.5 29.5h76.9l13.9 95.8c0.3 2.2 0.9 4.3 1.7 6.3l37 370.5c0 21.7 17.6 39.4 39.4 39.4h571.1c21.8 0 39.4-17.6 39.4-39.4l39.4-393.9c0-21.7-17.7-39.3-39.4-39.3z m-57.5 413.6h-535l-35.4-354.5h605.9l-35.5 354.5zM374.9 729.3c-54.3 0-98.3 44.1-98.3 98.5s44 98.4 98.3 98.4 98.3-44.1 98.3-98.4c0-54.4-44-98.5-98.3-98.5z m0 137.8c-21.6 0-39.2-17.7-39.2-39.4s17.6-39.4 39.2-39.4c21.7 0 39.3 17.7 39.3 39.4s-17.6 39.4-39.3 39.4zM670.3 729.3c-54.3 0-98.3 44.1-98.3 98.5s44 98.4 98.3 98.4 98.3-44.1 98.3-98.4c0-54.4-44-98.5-98.3-98.5z m0 137.8c-21.6 0-39.2-17.7-39.2-39.4s17.6-39.4 39.2-39.4c21.7 0 39.3 17.7 39.3 39.4-0.1 21.7-17.6 39.4-39.3 39.4z" fill="#666666" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)