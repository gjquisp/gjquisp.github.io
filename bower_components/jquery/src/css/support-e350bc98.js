define(["../core","../var/support"],function(e,t){return function(){function n(){r.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",r.innerHTML="",l.appendChild(d);var e=window.getComputedStyle(r,null);o="1%"!==e.top,i="4px"===e.width,l.removeChild(d)}var o,i,l=document.documentElement,d=document.createElement("div"),r=document.createElement("div");r.style&&(r.style.backgroundClip="content-box",r.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===r.style.backgroundClip,d.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",d.appendChild(r),window.getComputedStyle&&e.extend(t,{pixelPosition:function(){return n(),o},boxSizingReliable:function(){return null==i&&n(),i},reliableMarginRight:function(){var e,t=r.appendChild(document.createElement("div"));return t.style.cssText=r.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",t.style.marginRight=t.style.width="0",r.style.width="1px",l.appendChild(d),e=!parseFloat(window.getComputedStyle(t,null).marginRight),l.removeChild(d),e}}))}(),t});