"use strict";var customSearch;!function(b){var _=70;function y(e,a){a=a||_;e=e.href?b(e.getAttribute("href")):b(e);b("html, body").animate({scrollTop:e.offset().top-a},400)}b(function(){var t,a,o,n,r,i,s,c,l,d,u,m,h,p,f,g,v;window.subData&&(t=b("header .wrapper"),a=b(".s-comment",t),c=b(".s-toc",t),t.find(".nav-sub .logo").text(window.subData.title),o=document.body.scrollTop,b(document,window).scroll(function(){var e=b(window).scrollTop(),a=e-o;50<=a&&100<e?(o=e,t.addClass("sub")):a<=-50&&(o=e,t.removeClass("sub"))}),(n=b("#comments")).length?a.click(function(e){e.preventDefault(),e.stopPropagation(),y(n)}):a.remove(),(r=b(".toc-wrapper")).length&&r.children().length?c.click(function(e){e.stopPropagation(),r.toggleClass("active")}):c.remove()),function(){var e=b("header .menu");e.find("li a.active").removeClass("active");var a=location.pathname.replace(/\/|%/g,""),t=a.match(/page\d{0,}$/g);t&&(t=t[0],a=a.split(t)[0]),(t=a.match(/index.html/))&&(t=t[0],a=a.split(t)[0]),0==a.length&&(a="home"),e=b("#"+a,e),(e=e)&&e.length&&e.addClass("active").siblings().removeClass("active")}(),c=b(".l_header .switcher .s-menu"),i=b(".menu-phone"),s=b(".menu-phone .author"),c.click(function(e){e.stopPropagation(),i.animate({right:0,opacity:1},"fast",function(){s.css("animation","bg-animate 20s infinite")})}),b(document).click(function(e){i.animate({right:"-240px",opacity:0},"fast",function(){s.css("animation","")})}),i.click(function(e){e.stopPropagation()}),c=b(".l_header .switcher .s-search"),l=b(".l_header"),d=b(".l_header .m_search"),0!==c.length&&(c.click(function(e){e.stopPropagation(),l.toggleClass("z_search-open"),d.find("input").focus()}),b(document).click(function(e){l.removeClass("z_search-open")}),d.click(function(e){e.stopPropagation()}),l.ready(function(){l.bind("keydown",function(a){if(9==a.keyCode)return!1;var t,o=!!document.all,a=a?(t=a.keycode,a):o?(t=window.event.keyCode,window.event):(t=e.which,e);9==t&&(o?(a.keyCode=0,a.returnValue=!1):(a.which=0,a.preventDefault()))})})),b(".tabs .nav-tabs").on("click","a",function(e){e.preventDefault(),e.stopPropagation();var a=b(e.target.parentElement.parentElement.parentElement);return a.find(".nav-tabs .active").removeClass("active"),a.find(e.target.parentElement).addClass("active"),a.find(".tab-content .active").removeClass("active"),a.find(b(e.target).attr("class")).addClass("active"),!1}),0!==(f=b(".toc-wrapper")).length&&(b(document).click(function(){f.removeClass("active")}),f.on("click","a",function(e){e.preventDefault(),e.stopPropagation(),"A"===e.target.tagName?y(e.target):"SPAN"===e.target.tagName&&y(e.target.parentElement),f.removeClass("active")}),u=Array.prototype.slice.call(f.find("li a")),h=(m=function(){u.map(function(e){Math.floor(b(e.getAttribute("href")).offset().top-_)})})(),p=function(){var e=b("html").scrollTop()||b("body").scrollTop();if(h){for(var a,t=0,o=h.length-1;t<o;)h[a=t+o+1>>1]===e?t=o=a:h[a]<e?t=a:o=a-1;b(u).removeClass("active").eq(t).addClass("active")}},b(window).resize(function(){h=m(),p()}).scroll(function(){p()}),p()),g=b(".s-top",".l_body"),v=document.body.scrollTop,b(document,window).scroll(function(){var e=b(window).scrollTop(),a=e-v;150<e?(a<0||e+b(window).height()==b(document).height()?(g.removeClass("fa-arrow-down"),g.addClass("fa-arrow-up")):(g.removeClass("fa-arrow-up"),g.addClass("fa-arrow-down")),v=e,g.addClass("show"),0<a?g.removeClass("hl"):g.addClass("hl")):(v=e,g.removeClass("show").removeClass("hl"))}),g.click(function(){g.hasClass("fa-arrow-down")?y("footer"):y(document.body)}),b(".copy").each(function(e,a){b(a).on("click",function(){var e=this.parentElement.parentElement.querySelector("pre").innerText,a=document.createElement("textarea"),t=this;document.body.appendChild(a),a.value=e,a.select(),document.execCommand("copy"),document.body.removeChild(a),this.setAttribute("aria-label","已复制"),this.classList.add("success"),setTimeout(function(){t.setAttribute("aria-label",""),t.classList.remove("success")},1e3)})}),b(".code-show").each(function(e,a){b(a).on("click",function(){var e,a=this.parentElement.parentElement.querySelector("pre");"hide"===this.getAttribute("type")?(e="show",a.style.maxHeight="inherit"):(e="hide",a.style.maxHeight="35rem"),this.setAttribute("type",e)})}),setTimeout(function(){b("#loading-bar-wrapper").fadeOut(500)},300),"google"===SEARCH_SERVICE?customSearch=new GoogleCustomSearch({apiKey:GOOGLE_CUSTOM_SEARCH_API_KEY,engineId:GOOGLE_CUSTOM_SEARCH_ENGINE_ID,imagePath:"/images/"}):"algolia"===SEARCH_SERVICE?customSearch=new AlgoliaSearch({apiKey:ALGOLIA_API_KEY,appId:ALGOLIA_APP_ID,indexName:ALGOLIA_INDEX_NAME,imagePath:"/images/"}):"hexo"===SEARCH_SERVICE?customSearch=new HexoSearch({imagePath:"/images/"}):"azure"===SEARCH_SERVICE?customSearch=new AzureSearch({serviceName:AZURE_SERVICE_NAME,indexName:AZURE_INDEX_NAME,queryKey:AZURE_QUERY_KEY,imagePath:"/images/"}):"baidu"===SEARCH_SERVICE&&(customSearch=new BaiduSearch({apiId:BAIDU_API_ID,imagePath:"/images/"}))})}(jQuery);var AlgoliaSearch,AzureSearch,BaiduSearch,SearchService="";!function(t){SearchService=function(e){var o=this;o.config=t.extend({per_page:10,selectors:{body:"body",form:".u-search-form",input:".u-search-input",container:"#u-search",modal:"#u-search .modal",modal_body:"#u-search .modal-body",modal_footer:"#u-search .modal-footer",modal_overlay:"#u-search .modal-overlay",modal_results:"#u-search .modal-results",modal_metadata:"#u-search .modal-metadata",modal_error:"#u-search .modal-error",modal_loading_bar:"#u-search .modal-loading-bar",modal_ajax_content:"#u-search .modal-ajax-content",modal_logo:"#u-search .modal-footer .logo",btn_close:"#u-search .btn-close",btn_next:"#u-search .btn-next",btn_prev:"#u-search .btn-prev"},brands:{google:{logo:"google.svg",url:"https://cse.google.com"},algolia:{logo:"algolia.svg",url:"https://www.algolia.com"},hexo:{logo:"",url:""},azure:{logo:"azure.svg",url:"https://azure.microsoft.com/en-us/services/search/"},baidu:{logo:"baidu.svg",url:"http://zn.baidu.com/cse/home/index"}},imagePath:ROOT+"img/"},e),o.dom={},o.percentLoaded=0,o.open=!1,o.queryText="",o.nav={next:-1,prev:-1,total:0,current:1},o.parseSelectors=function(){for(var e in o.config.selectors)o.dom[e]=t(o.config.selectors[e])},o.beforeQuery=function(){o.open||(o.dom.container.fadeIn(),o.dom.body.addClass("modal-active")),o.dom.input.each(function(e,a){t(a).val(o.queryText)}),document.activeElement.blur(),o.dom.modal_error.hide(),o.dom.modal_ajax_content.removeClass("loaded"),o.startLoading()},o.afterQuery=function(){o.dom.modal_body.scrollTop(0),o.dom.modal_ajax_content.addClass("loaded"),o.stopLoading()},o.search=function(e,a){o.beforeQuery(),o.search instanceof Function?o.query(o.queryText,e,function(){o.afterQuery()}):(console.log("query() does not exist."),o.onQueryError(o.queryText,""),o.afterQuery())},o.onQueryError=function(e,a){var t="",t="success"===a?'No result found for "'+e+'".':"timeout"===a?"Unfortunate timeout.":"Mysterious failure.";o.dom.modal_results.html(""),o.dom.modal_error.html(t),o.dom.modal_error.show()},o.nextPage=function(){-1!==o.nav.next&&o.search(o.nav.next)},o.prevPage=function(){-1!==o.nav.prev&&o.search(o.nav.prev)},o.buildResult=function(e,a,t){var o="<li>";return o+="<a class='result' href='"+e+"'>",o+="<span class='title'>"+a+"</span>",o+="<span class='digest'>"+t+"</span>",o+="<span class='fa fa-chevron-thin-right'></span>",o+="</a>",o+="</li>"},o.close=function(){o.open=!1,o.dom.container.fadeOut(),o.dom.body.removeClass("modal-active")},o.onSubmit=function(e){e.preventDefault(),o.queryText=t(this).find(".u-search-input").val(),o.queryText&&o.search(1)},o.startLoading=function(){o.dom.modal_loading_bar.show(),o.loadingTimer=setInterval(function(){o.percentLoaded=Math.min(o.percentLoaded+5,95),o.dom.modal_loading_bar.css("width",o.percentLoaded+"%")},100)},o.stopLoading=function(){clearInterval(o.loadingTimer),o.dom.modal_loading_bar.css("width","100%"),o.dom.modal_loading_bar.fadeOut(),setTimeout(function(){o.percentLoaded=0,o.dom.modal_loading_bar.css("width","0%")},300)},o.addLogo=function(e){var a="";o.config.brands[e]&&o.config.brands[e].logo&&(a+="<a href='"+o.config.brands[e].url+"' class='"+e+"'>",a+='<img src="'+o.config.imagePath+o.config.brands[e].logo+'" />',o.dom.modal_logo.html(a+="</a>"))},o.destroy=function(){o.dom.form.each(function(e,a){t(a).off("submit")}),o.dom.modal_overlay.off("click"),o.dom.btn_close.off("click"),o.dom.btn_next.off("click"),o.dom.btn_prev.off("click"),o.dom.container.remove()},o.init=function(){t("body").append(a),o.parseSelectors(),o.dom.modal_footer.show(),o.dom.form.each(function(e,a){t(a).on("submit",o.onSubmit)}),o.dom.modal_overlay.on("click",o.close),o.dom.btn_close.on("click",o.close),o.dom.btn_next.on("click",o.nextPage),o.dom.btn_prev.on("click",o.prevPage)},o.init()};var a='<div id="u-search"><div class="modal"> <header class="modal-header" class="clearfix"><form id="u-search-modal-form" class="u-search-form" name="uSearchModalForm"> <input type="text" id="u-search-modal-input" class="u-search-input" /> <button type="submit" id="u-search-modal-btn-submit" class="u-search-btn-submit"> <span class="fa fa-search"></span> </button></form> <a class="btn-close"> <span class="fa fa-times"></span> </a><div class="modal-loading"><div class="modal-loading-bar"></div></div> </header> <main class="modal-body"><ul class="modal-results modal-ajax-content"></ul> </main> <footer class="modal-footer clearfix"><div class="modal-metadata modal-ajax-content"> <strong class="range"></strong> of <strong class="total"></strong></div><div class="modal-error"></div> <div class="logo"></div> <a class="nav btn-next modal-ajax-content"> <span class="text">NEXT</span> <span class="fa fa-chevron-right"></span> </a> <a class="nav btn-prev modal-ajax-content"> <span class="fa fa-chevron-left"></span> <span class="text">PREV</span> </a> </footer></div><div class="modal-overlay"></div></div>'}(jQuery),function(t){AlgoliaSearch=function(e){SearchService.apply(this,arguments);var r=this,a="https://"+r.config.app_id+"-dsn.algolia.net/1/indexes/"+r.config.indexName;return r.addLogo("algolia"),r.buildResultList=function(e){var n="";return t.each(e,function(e,a){var t=a.permalink||a.path||"";!a.permalink&&a.path&&(t=ROOT+t);var o=a.title,a=a._highlightResult.excerptStrip.value||"";n+=r.buildResult(t,o,a)}),n},r.buildMetadata=function(e){r.nav.current=e.page*e.hitsPerPage+1,r.nav.currentCount=e.hits.length,r.nav.total=parseInt(e.nbHits),r.dom.modal_metadata.children(".total").html(r.nav.total),r.dom.modal_metadata.children(".range").html(r.nav.current+"-"+(r.nav.current+r.nav.currentCount-1)),0<r.nav.total?r.dom.modal_metadata.show():r.dom.modal_metadata.hide(),e.page<e.nbPages-1?(r.nav.next=e.page+1+1,r.dom.btn_next.show()):(r.nav.next=-1,r.dom.btn_next.hide()),0<e.page?(r.nav.prev=e.page+1-1,r.dom.btn_prev.show()):(r.nav.prev=-1,r.dom.btn_prev.hide())},r.query=function(o,e,n){t.get(a,{query:o,page:e-1,hitsPerPage:r.config.per_page,"x-algolia-application-id":r.config.app_id,"x-algolia-api-key":r.config.apiKey},function(e,a){var t;"success"===a&&e.hits&&0<e.hits.length?(t=r.buildResultList(e.hits),r.dom.modal_results.html(t)):r.onQueryError(o,a),r.buildMetadata(e),n&&n(e)})},r}}(jQuery),function(t){AzureSearch=function(e){SearchService.apply(this,arguments);var i=this,a="https://"+i.config.serviceName+".search.windows.net/indexes/"+i.config.indexName+"/docs?api-version=2015-02-28";return i.nav.current=1,i.addLogo("azure"),i.buildResultList=function(e){var n="";return t.each(e,function(e,a){var t=a.permalink||a.path||"";!a.permalink&&a.path&&(t="/"+t);var o=a.title,a=a.excerpt||"";n+=i.buildResult(t,o,a)}),n},i.buildMetadata=function(e,a){i.nav.current=a,i.nav.currentCount=e.value.length,i.nav.total=parseInt(e["@odata.count"]),i.dom.modal_metadata.children(".total").html(i.nav.total),i.dom.modal_metadata.children(".range").html(i.nav.current+"-"+(i.nav.current+i.nav.currentCount-1)),0<i.nav.total?i.dom.modal_metadata.show():i.dom.modal_metadata.hide(),i.nav.current+i.nav.currentCount<=i.nav.total?(i.nav.next=i.nav.current+i.nav.currentCount,i.dom.btn_next.show()):(i.nav.next=-1,i.dom.btn_next.hide()),1<i.nav.current?(i.nav.prev=i.nav.current-i.config.per_page,i.dom.btn_prev.show()):(i.nav.prev=-1,i.dom.btn_prev.hide())},i.query=function(o,n,r){t.ajax({url:a,headers:{Accept:"application/json","api-key":i.config.queryKey},data:{search:o,$orderby:"date desc",$skip:n-1,$top:i.config.per_page,$count:!0},type:"GET",success:function(e,a){var t;"success"===a&&e.value&&0<e.value.length?(t=i.buildResultList(e.value),i.dom.modal_results.html(t)):i.onQueryError(o,a),i.buildMetadata(e,n),r&&r(e)}})},i}}(jQuery),function(r){BaiduSearch=function(e){SearchService.apply(this,arguments);var n=this;return n.addLogo("baidu"),n.buildResultList=function(e,t){var o="";return r.each(e,function(e,a){n.contentSearch(a,t)&&(o+=n.buildResult(a.linkUrl,a.title,a.abstract))}),o},n.buildMetadata=function(e){},n.loadScript=function(){n.dom.input.each(function(e,a){r(a).attr("disabled",!0)});var e="<script src='http://zhannei.baidu.com/api/customsearch/apiaccept?sid="+n.config.apiId+"&v=2.0&callback=customSearch.initBaidu' type='text/javascript' charset='utf-8'><\/script>";n.dom.body.append(e)},n.initBaidu=function(){n.cse=new BCse.Search(n.config.apiId),n.dom.input.each(function(e,a){r(a).attr("disabled",!1)})},n.query=function(a,e,t){n.cse.getResult(a,function(e){console.log("Searching: "+a),console.log(e),n.cse.getError(function(e){console.log(e)}),0<e.length?(n.buildResultList(e,a),n.cse.getSearchInfo(a,function(e){console.log(e),n.buildMetadata(e)})):(n.nav.total=0,n.nav.next=-1,n.nav.prev=-1,n.dom.modal_metadata.hide(),n.dom.btn_next.hide(),n.dom.btn_prev.hide(),n.onQueryError(a,"success")),t instanceof Function&&t()})},n.loadScript(),n}}(jQuery);var HexoSearch,GoogleCustomSearch="";!function(a){GoogleCustomSearch=function(e){SearchService.apply(this,arguments);var r=this;return r.addLogo("google"),r.buildResultList=function(e){var n="";return a.each(e,function(e,a){var t=a.link,o=a.title,a=(a.htmlSnippet||"").replace("<br>","");n+=r.buildResult(t,o,a)}),n},r.buildMetadata=function(e){e.queries&&e.queries.request&&"0"!==e.queries.request[0].totalResults?(r.nav.current=e.queries.request[0].startIndex,r.nav.currentCount=e.queries.request[0].count,r.nav.total=parseInt(e.queries.request[0].totalResults),r.dom.modal_metadata.children(".total").html(r.nav.total),r.dom.modal_metadata.children(".range").html(r.nav.current+"-"+(r.nav.current+r.nav.currentCount-1)),r.dom.modal_metadata.show()):r.dom.modal_metadata.hide(),e.queries&&e.queries.nextPage?(r.nav.next=e.queries.nextPage[0].startIndex,r.dom.btn_next.show()):(r.nav.next=-1,r.dom.btn_next.hide()),e.queries&&e.queries.previousPage?(r.nav.prev=e.queries.previousPage[0].startIndex,r.dom.btn_prev.show()):(r.nav.prev=-1,r.dom.btn_prev.hide())},r.query=function(o,e,n){a.get("https://www.googleapis.com/customsearch/v1",{key:r.config.apiKey,cx:r.config.engineId,q:o,start:e,num:r.config.per_page},function(e,a){var t;"success"===a&&e.items&&0<e.items.length?(t=r.buildResultList(e.items),r.dom.modal_results.html(t)):r.onQueryError(o,a),r.buildMetadata(e),n&&n()})},r}}(jQuery),function(u){HexoSearch=function(e){SearchService.apply(this,arguments);var n=this;return n.config.endpoint=ROOT+((e||{}).endpoint||"content.json"),n.config.endpoint=n.config.endpoint.replace("//","/"),n.cache="",n.contentSearch=function(o,e){var n,r=o.title.trim().toLowerCase(),i=o.text.trim().toLowerCase(),s=e.trim().toLowerCase().split(" "),c=!1,l=-1,d=-1;return""!==r&&""!==i&&u.each(s,function(e,a){var t;n=r.indexOf(a),l=i.indexOf(a),n<0&&l<0?c=!1:(c=!0,l<0&&(l=0),0<=n&&s.forEach(function(e){var a=new RegExp(e,"gi");o.title=o.title.replace(a,"<b class='search-keyword'>"+e+"</b>")}),0===e&&(d=l)),c&&(i=o.text.trim(),(e=a=0)<=d?(e=0===(a=Math.max(d-30,0))?Math.min(200,i.length):Math.min(d+170,i.length),t=i.substring(a,e),s.forEach(function(e){var a=new RegExp(e,"gi");t=t.replace(a,"<b class='search-keyword'>"+e+"</b>")}),o.digest=t):(e=Math.min(200,i.length),o.digest=i.trim().substring(0,e)))}),c},n.buildResultList=function(e,t){var o="";return u.each(e,function(e,a){n.contentSearch(a,t)&&(o+=n.buildResult(a.permalink,a.title,a.digest))}),o},n.buildMetadata=function(e){n.dom.modal_footer.hide()},n.query=function(t,e,o){var a;n.cache?(a="",a+=n.buildResultList(n.cache.pages,t),a+=n.buildResultList(n.cache.posts,t),n.dom.modal_results.html(a),n.buildMetadata(n.cache),o&&o(n.cache)):u.get(n.config.endpoint,{key:n.config.apiKey,cx:n.config.engineId,q:t,start:e,num:n.config.per_page},function(e,a){"success"!==a||!e||!e.posts&&!e.pages||e.posts.length<1&&e.pages.length<1?n.onQueryError(t,a):(n.cache=e,a="",a+=n.buildResultList(e.pages,t),a+=n.buildResultList(e.posts,t),n.dom.modal_results.html(a)),n.buildMetadata(e),o&&o(e)})},n}}(jQuery);