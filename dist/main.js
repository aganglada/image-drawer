!function(t){function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}var e={};i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="",i(i.s=0)}([function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e(1);!function(t){t&&t.__esModule}(s);i.default=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i.maxResolution}},function(t,i,e){"use strict";function s(){this.pixelsWidth,this.pixelsHeight,this.pixels,this.allContours=[],this.seen=[],this.init=function(t){this.pixelsWidth=t.width,this.pixelsHeight=t.height;var i=t.getContext("2d"),e=i.getImageData(0,0,this.pixelsWidth,this.pixelsHeight);this.pixels=e.data},this.getPosition=function(t,i){return 4*(i*this.pixelsWidth+t)},this.getPixel=function(t,i){return{r:this.pixels[this.getPosition(t,i)],g:this.pixels[this.getPosition(t,i)+1],b:this.pixels[this.getPosition(t,i)+2],a:this.pixels[this.getPosition(t,i)+3]}},this.setPixel=function(t,i,e){this.pixels[this.getPosition(t,i)]=e[0],this.pixels[this.getPosition(t,i)+1]=e[1],this.pixels[this.getPosition(t,i)+2]=e[2],this.pixels[this.getPosition(t,i)+3]=e[3]},this.findContours=function(){for(var t=this.pixelsWidth,i=this.pixelsHeight,e=0;e<i;e++)for(var s=0;s<t;s++){var n=this.getPixel(s,e);if(255===n.r){var o=this.followContour({x:s,y:e});null!==o&&this.allContours.push(o)}}},this.markAsSeen=function(t){this.seen[t.x]=this.seen[t.x]||[],this.seen[t.x][t.y]=!0},this.isSeen=function(t){return!(!this.seen[t.x]||!this.seen[t.x][t.y])},this.followContour=function(t){var i=[];i.push(t),this.markAsSeen(t);for(var e=this.pixelsWidth,s=this.pixelsHeight,n=t,o=[{xd:-1,yd:0},{xd:-1,yd:-1},{xd:0,yd:-1},{xd:1,yd:-1},{xd:1,yd:0},{xd:1,yd:1},{xd:0,yd:1},{xd:-1,yd:1}],h={x:n.x,y:n.y},r=0;r<o.length;)h.x=n.x+o[r].xd,h.y=n.y+o[r].yd,!this.isSeen(h)&&h.x<e&&h.y<s&&(h.x!==n.x||h.y!==n.y)&&255===this.getPixel(h.x,h.y).r?(i.push(h),this.markAsSeen(h),n={x:h.x,y:h.y},r=0):(h={x:n.x,y:n.y},r++);return i.length>5?i:null},this.getPoints=function(t){for(var i="",e=0;e<t.length;e++){var s=t[e];i+=s.x+","+s.y+" > "}return i}}Object.defineProperty(i,"__esModule",{value:!0}),i.default=s}]);