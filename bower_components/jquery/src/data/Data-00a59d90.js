define(["../core","../var/rnotwhite","./accepts"],function(t,e){function n(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=t.expando+Math.random()}return n.uid=1,n.accepts=t.acceptData,n.prototype={key:function(e){if(!n.accepts(e))return 0;var i={},s=e[this.expando];if(!s){s=n.uid++;try{i[this.expando]={value:s},Object.defineProperties(e,i)}catch(r){i[this.expando]=s,t.extend(e,i)}}return this.cache[s]||(this.cache[s]={}),s},set:function(e,n,i){var s,r=this.key(e),a=this.cache[r];if("string"==typeof n)a[n]=i;else if(t.isEmptyObject(a))t.extend(this.cache[r],n);else for(s in n)a[s]=n[s];return a},get:function(t,e){var n=this.cache[this.key(t)];return void 0===e?n:n[e]},access:function(e,n,i){var s;return void 0===n||n&&"string"==typeof n&&void 0===i?(s=this.get(e,n),void 0!==s?s:this.get(e,t.camelCase(n))):(this.set(e,n,i),void 0!==i?i:n)},remove:function(n,i){var s,r,a,o=this.key(n),l=this.cache[o];if(void 0===i)this.cache[o]={};else{t.isArray(i)?r=i.concat(i.map(t.camelCase)):(a=t.camelCase(i),i in l?r=[i,a]:(r=a,r=r in l?[r]:r.match(e)||[])),s=r.length;for(;s--;)delete l[r[s]]}},hasData:function(e){return!t.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(t){t[this.expando]&&delete this.cache[t[this.expando]]}},n});