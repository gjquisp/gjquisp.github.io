!function(e,t){"use strict";Foundation.libs.equalizer={name:"equalizer",version:"5.4.6",settings:{use_tallest:!0,before_height_change:e.noop,after_height_change:e.noop,equalize_on_stack:!1},init:function(e,t,i){Foundation.inherit(this,"image_loaded"),this.bindings(t,i),this.reflow()},events:function(){this.S(t).off(".equalizer").on("resize.fndtn.equalizer",function(){this.reflow()}.bind(this))},equalize:function(t){var i=!1,n=t.find("["+this.attr_name()+"-watch]:visible"),a=t.data(this.attr_name(!0)+"-init");if(0!==n.length){var h=n.first().offset().top;if(a.before_height_change(),t.trigger("before-height-change").trigger("before-height-change.fndth.equalizer"),n.height("inherit"),n.each(function(){var t=e(this);t.offset().top!==h&&(i=!0)}),a.equalize_on_stack!==!1||!i){var r=n.map(function(){return e(this).outerHeight(!1)}).get();if(a.use_tallest){var o=Math.max.apply(null,r);n.css("height",o)}else{var s=Math.min.apply(null,r);n.css("height",s)}a.after_height_change(),t.trigger("after-height-change").trigger("after-height-change.fndtn.equalizer")}}},reflow:function(){var t=this;this.S("["+this.attr_name()+"]",this.scope).each(function(){var i=e(this);t.image_loaded(t.S("img",this),function(){t.equalize(i)})})}}}(jQuery,window,window.document);