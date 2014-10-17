!function(e,t,n,i){"use strict";Foundation.libs.tab={name:"tab",version:"5.4.6",settings:{active_class:"active",callback:function(){},deep_linking:!1,scroll_to_content:!0,is_hover:!1},default_tab_hashes:[],init:function(e,t,n){var i=this,r=this.S;this.bindings(t,n),this.handle_location_hash_change(),r("["+this.attr_name()+"] > .active > a",this.scope).each(function(){i.default_tab_hashes.push(this.hash)})},events:function(){var e=this,n=this.S,i=function(t){var i=n(this).closest("["+e.attr_name()+"]").data(e.attr_name(!0)+"-init");(!i.is_hover||Modernizr.touch)&&(t.preventDefault(),t.stopPropagation(),e.toggle_active_tab(n(this).parent()))};n(this.scope).off(".tab").on("focus.fndtn.tab","["+this.attr_name()+"] > * > a",i).on("click.fndtn.tab","["+this.attr_name()+"] > * > a",i).on("mouseenter.fndtn.tab","["+this.attr_name()+"] > * > a",function(){var t=n(this).closest("["+e.attr_name()+"]").data(e.attr_name(!0)+"-init");t.is_hover&&e.toggle_active_tab(n(this).parent())}),n(t).on("hashchange.fndtn.tab",function(t){t.preventDefault(),e.handle_location_hash_change()})},handle_location_hash_change:function(){var t=this,n=this.S;n("["+this.attr_name()+"]",this.scope).each(function(){var r=n(this).data(t.attr_name(!0)+"-init");if(r.deep_linking){var o;if(o=r.scroll_to_content?t.scope.location.hash:t.scope.location.hash.replace("fndtn-",""),""!=o){var s=n(o);if(s.hasClass("content")&&s.parent().hasClass("tab-content"))t.toggle_active_tab(e("["+t.attr_name()+"] > * > a[href="+o+"]").parent());else{var a=s.closest(".content").attr("id");a!=i&&t.toggle_active_tab(e("["+t.attr_name()+"] > * > a[href=#"+a+"]").parent(),o)}}else for(var l=0;l<t.default_tab_hashes.length;l++)t.toggle_active_tab(e("["+t.attr_name()+"] > * > a[href="+t.default_tab_hashes[l]+"]").parent())}})},toggle_active_tab:function(r,o){var s=this.S,a=r.closest("["+this.attr_name()+"]"),l=r.find("a"),c=r.children("a").first(),u="#"+c.attr("href").split("#")[1],d=s(u),f=r.siblings(),p=a.data(this.attr_name(!0)+"-init"),h=function(t){var i,r=e(this),o=e(this).parents("li").prev().children('[role="tab"]'),s=e(this).parents("li").next().children('[role="tab"]');switch(t.keyCode){case 37:i=o;break;case 39:i=s;break;default:i=!1}i.length&&(r.attr({tabindex:"-1","aria-selected":null}),i.attr({tabindex:"0","aria-selected":!0}).focus()),e('[role="tabpanel"]').attr("aria-hidden","true"),e("#"+e(n.activeElement).attr("href").substring(1)).attr("aria-hidden",null)};s(this).data(this.data_attr("tab-content"))&&(u="#"+s(this).data(this.data_attr("tab-content")).split("#")[1],d=s(u)),p.deep_linking&&(p.scroll_to_content?(t.location.hash=o||u,o==i||o==u?r.parent()[0].scrollIntoView():s(u)[0].scrollIntoView()):t.location.hash=o!=i?"fndtn-"+o.replace("#",""):"fndtn-"+u.replace("#","")),r.addClass(p.active_class).triggerHandler("opened"),l.attr({"aria-selected":"true",tabindex:0}),f.removeClass(p.active_class),f.find("a").attr({"aria-selected":"false",tabindex:-1}),d.siblings().removeClass(p.active_class).attr({"aria-hidden":"true",tabindex:-1}),d.addClass(p.active_class).attr("aria-hidden","false").removeAttr("tabindex"),p.callback(r),d.triggerHandler("toggled",[r]),a.triggerHandler("toggled",[d]),l.off("keydown").on("keydown",h)},data_attr:function(e){return this.namespace.length>0?this.namespace+"-"+e:e},off:function(){},reflow:function(){}}}(jQuery,window,window.document);