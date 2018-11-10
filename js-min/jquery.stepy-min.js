(function(d){d.fn.stepy=function(j){options=d.extend({},d.fn.stepy.defaults,j);if(this.length==0){a("Invalid selector!");return}else{if(this.length>1){return this.each(function(){d.fn.stepy.apply(d(this),[j])})}}$global=d(this);var h=$global.attr("id"),p=$global.children("fieldset"),t=p.size(),s="",r="",i,f=d('<ul class="stepy-titles"></ul>').insertBefore($global);if(options.validate&&$global.is("form")){$global.append('<div class="stepy-error"></div>')}p.each(function(u){i=d(this);i.attr("id",h+"-step-"+u).addClass("step").append('<p id="'+h+"-buttons-"+u+'"></p>');r=(i.attr("title")!="")?i.attr("title"):"--";s=i.children("legend:first").html();f.append('<li id="'+h+"-title-"+u+'">'+r+"<span>"+s+"</span></li>");if(u==0){k(u)}else{l(u);i.hide();if(u!=t-1){k(u)}}});f.children("li:first").addClass("current-step");var q=$global.children(".finish"),n=$global,g=options;if(options.finish){if(q.length){q.hide().click(function(){e(n,t-1,g)}).appendTo($global.find("p:last"))}else{if($global.is("form")){a("You should create a button with a class named \"finish\" when the attribute 'finish' is true.")}}}if(options.titleClick){f.children().click(function(){var v=parseInt(d(this).attr("id").match(/\d/)),w=parseInt(f.children(".current-step").attr("id").match(/\d/)),u=v;if(v>w){if(m(g.onNext,v)){return}u=o(n,g,v)}else{if(v<w){if(m(g.onBack,v)){return}}}if(v!=w){b(n,u);if(g.finish&&u+1==t){q.show()}}})}else{f.children().css("cursor","default")}function m(w,u){var v=w.apply(n,[u+1]);if(v||v===undefined){return false}return true}function l(u){d("<a/>",{id:h+"-back-"+u,href:"javascript:void(0);","class":"button-back",html:options.backLabel}).click(function(){if(!m(g.onBack,u-1)){b(n,u-1);q.hide()}}).appendTo(d("p#"+h+"-buttons-"+u))}function k(u){d("<a/>",{id:h+"-next-"+u,href:"javascript:void(0);","class":"button-next",html:options.nextLabel}).click(function(){if(!m(g.onNext,u+1)){var v=o(n,g,u+1);b(n,v);if(g.finish&&v+1==t){q.show()}}}).appendTo(d("p#"+h+"-buttons-"+u))}function o(y,x,w){var u=w,z=true;if(x.validate){for(var v=0;v<w;v++){z=e(n,v,x)&&z;if(x.block&&!z){u=v;break}}}return u}return $global};d.fn.stepy.defaults={backLabel:"&lt; Back",block:false,errorImage:false,finish:true,onBack:function(f){return true},onNext:function(f){return true},nextLabel:"Next &gt;",titleClick:false,validate:false};d.fn.stepy.step=function(f,g){b(c(f,g,"step"),f-1);d.fn.stepy};function a(f){if(console&&console.log){console.log(f)}}function c(h,i,f){var g=$global;if(i){g=d(i);if(!g.length){a('"'+i+'" is a invalid ID for the public funtion $.fn.stepy.'+f+"().");return}}return g}function b(h,f){var j=h.attr("id"),g=h.children("fieldset").size(),i;if(f>g-1){f=g-1}h.children("fieldset").hide().end().children("fieldset").eq(f).show();h.prev().children().removeClass("current-step").end().children().eq(f).addClass("current-step");if(h.is("form")){h.children("fieldset").eq(f).find(":input:visible").each(function(){i=d(this);if(!i.attr("disabled")){i.focus();return false}})}}function e(h,g,f){if(!h.is("form")){return true}var l=h.attr("id"),j=true,i=h.children("fieldset").eq(g),k=h.prev("ul.stepy-titles").children();i.find(":input").each(function(){j=j&&h.validate().element(d(this));if(j===undefined){j=true}if(!j){if(f.block){b(h,g)}if(f.errorImage){k.eq(g).addClass("error-image")}h.validate().focusInvalid()}else{if(f.errorImage){k.eq(g).removeClass("error-image")}}});return j}})(jQuery);