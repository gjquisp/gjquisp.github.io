define(["../core","../core/init","../deferred"],function(e){function d(){document.removeEventListener("DOMContentLoaded",d,!1),window.removeEventListener("load",d,!1),e.ready()}var r;e.fn.ready=function(d){return e.ready.promise().done(d),this},e.extend({isReady:!1,readyWait:1,holdReady:function(d){d?e.readyWait++:e.ready(!0)},ready:function(d){(d===!0?--e.readyWait:e.isReady)||(e.isReady=!0,d!==!0&&--e.readyWait>0||(r.resolveWith(document,[e]),e.fn.triggerHandler&&(e(document).triggerHandler("ready"),e(document).off("ready"))))}}),e.ready.promise=function(n){return r||(r=e.Deferred(),"complete"===document.readyState?setTimeout(e.ready):(document.addEventListener("DOMContentLoaded",d,!1),window.addEventListener("load",d,!1))),r.promise(n)},e.ready.promise()});