(function(window){var svgSprite='<svg><symbol id="icon-gerenzhongxin" viewBox="0 0 1024 1024"><path d="M947.735411 849.684049c1.35078 179.239761-174.294164 174.294164-174.294164 174.294164s-1.198272-48.519138 0-43.573541c47.669454-0.827897 122.201996-10.501223 130.720623-130.720623 6.971767-166.55986-171.461884-301.986426-224.556243-338.52284C632.655136 545.758601 574.81126 566.456033 512.000001 566.456033s-120.655135-20.697432-167.605625-55.294824C291.300016 547.697623 112.844579 683.124189 119.838132 849.684049c8.518627 120.2194 83.072956 129.892726 130.720623 130.720623 1.176486-4.945597 0 43.573541 0 43.573541s-175.644944 4.945597-174.294164-174.294164c0.980405-129.849152 129.108402-311.529031 239.915917-362.139699C262.410758 435.996851 228.771985 363.599413 228.771985 283.228016 228.771985 126.799004 355.570989 0 512.000001 0c156.429012 0 283.228016 126.799004 283.228016 283.228016 0 80.371396-33.638774 152.768835-87.408523 204.316334C818.627009 538.155018 946.755006 719.834897 947.735411 849.684049zM756.425779 283.228016c0-134.99083-109.434948-244.425778-244.425778-244.425778C377.009171 38.802238 267.574223 148.237186 267.574223 283.228016S377.009171 527.653795 512.000001 527.653795C646.969044 527.653795 756.425779 418.218846 756.425779 283.228016z"  ></path></symbol><symbol id="icon-mima" viewBox="0 0 1024 1024"><path d="M512 570.496a58.496 58.496 0 0 0-38.976 102.08v53.888a38.976 38.976 0 1 0 77.952 0v-53.888a58.304 58.304 0 0 0 19.456-43.584A58.368 58.368 0 0 0 512 570.496z m272.896-175.424h-38.976V297.6a233.856 233.856 0 0 0-467.712 0v97.408h-39.04c-53.824 0-97.408 43.648-97.408 97.408v370.304c0 53.824 43.648 97.408 97.408 97.408h545.728c53.76 0 97.344-43.648 97.344-97.408V492.48c0-53.824-43.584-97.408-97.344-97.408zM512 102.72a194.88 194.88 0 0 1 194.88 194.88v97.408h-389.76V297.6A194.944 194.944 0 0 1 512 102.72z m331.392 760.064c0 32.32-26.24 58.432-58.496 58.432H239.168a58.496 58.496 0 0 1-58.496-58.432V492.48c0-32.256 26.176-58.496 58.496-58.496h545.728c32.256 0 58.496 26.176 58.496 58.496v370.304z m0 0" fill="#333333" ></path></symbol><symbol id="icon-duanxin" viewBox="0 0 1024 1024"><path d="M204.8 224l278.4 278.4c12.8 12.8 35.2 12.8 48 0l288-278.4H204.8z m688 19.2l-320 307.2c-38.4 35.2-99.2 35.2-137.6 0L131.2 240c-3.2 6.4-3.2 9.6-3.2 16v512c0 19.2 12.8 32 32 32h704c19.2 0 32-12.8 32-32V256c0-3.2 0-9.6-3.2-12.8zM160 160h704c54.4 0 96 41.6 96 96v512c0 54.4-41.6 96-96 96H160c-54.4 0-96-41.6-96-96V256c0-54.4 41.6-96 96-96z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)