webpackJsonp([0],{"8Z9+":function(t,n){},"A/ko":function(t,n,e){t.exports=e.p+"static/img/5.b3a6e28.jpg"},MPzD:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("7+uW"),s={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var r=e("VU/8")({name:"App"},s,!1,function(t){e("8Z9+")},null,null).exports,a=e("/ocq"),c={name:"Home",data:function(){return{img:["./static/img/1.jpg","./static/img/2.jpg","./static/img/3.jpg","./static/img/4.jpg","./static/img/5.jpg"],distance:-100,currentIndex:1,doorKey:!0}},computed:{containStyle:function(){return{left:this.distance+"%"}}},methods:{move:function(t,n){if(this.doorKey){this.doorKey=!1,-1==t?this.currentIndex+=n/100:this.currentIndex-=n/100,this.currentIndex>5&&(this.currentIndex=1),this.currentIndex<1&&(this.currentIndex=5);var e=this.distance+t*n;this.animate(e,t)}},animate:function(t,n){var e=this;-1==n&&t<this.distance||1==n&&t>this.distance?(this.distance+=2*n,window.setTimeout(function(){e.animate(t,n)},4)):(this.doorKey=!0,this.distance=t,this.distance<-500&&(this.distance=-100),this.distance>-100&&(this.distance=-500))},jump:function(t){var n=t-this.currentIndex>=0?-1:1,e=100*Math.abs(t-this.currentIndex);this.move(n,e)}}},o={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"arrow"},[e("div",{staticClass:"left",on:{click:function(n){return t.move(1,100)}}}),t._v(" "),e("div",{staticClass:"right",on:{click:function(n){return t.move(-1,100)}}})]),t._v(" "),e("div",{staticClass:"contain"},[e("div",{staticClass:"show",style:t.containStyle},[t._m(0),t._v(" "),t._l(t.img,function(t,n){return e("li",{key:n},[e("img",{attrs:{src:t,alt:""}})])}),t._v(" "),t._m(1)],2)]),t._v(" "),e("div",{staticClass:"dots"},t._l(t.img,function(n,i){return e("span",{key:i,staticClass:"dot",class:{dotted:i===t.currentIndex-1},on:{click:function(n){return t.jump(i+1)}}})}),0)])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("img",{attrs:{src:e("A/ko"),alt:""}})])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("img",{attrs:{src:e("zRwx"),alt:""}})])}]};var u=e("VU/8")(c,o,!1,function(t){e("NOEB")},"data-v-2f5268b2",null).exports;i.a.use(a.a);var d=new a.a({routes:[{path:"/",name:"Home",component:u}]});e("MPzD");i.a.config.productionTip=!1,new i.a({el:"#app",router:d,components:{App:r},template:"<App/>"})},NOEB:function(t,n){},zRwx:function(t,n,e){t.exports=e.p+"static/img/1.59d87ed.jpg"}},["NHnr"]);
//# sourceMappingURL=app.627170d5e0db04580495.js.map