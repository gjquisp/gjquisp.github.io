define(["../core","../manipulation"],function(t){function e(e,n){var i,r=t(n.createElement(e)).appendTo(n.body),s=window.getDefaultComputedStyle&&(i=window.getDefaultComputedStyle(r[0]))?i.display:t.css(r[0],"display");return r.detach(),s}function n(n){var s=document,o=r[n];return o||(o=e(n,s),"none"!==o&&o||(i=(i||t("<iframe frameborder='0' width='0' height='0'/>")).appendTo(s.documentElement),s=i[0].contentDocument,s.write(),s.close(),o=e(n,s),i.detach()),r[n]=o),o}var i,r={};return n});