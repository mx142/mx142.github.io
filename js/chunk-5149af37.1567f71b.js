(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5149af37"],{"22e8":function(t,s,i){},2332:function(t,s,i){"use strict";i("77a3")},"47a9":function(t,s,i){"use strict";i("22e8")},"4eef":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"details"},[i("mm-loading",{model:{value:t.mmLoadShow,callback:function(s){t.mmLoadShow=s},expression:"mmLoadShow"}}),i("music-list",{attrs:{list:t.list},on:{select:t.selectItem}})],1)},n=[],l=i("5530"),a=(i("b0c0"),i("2f62")),c=i("365c"),o=i("f904"),r=i("5362"),u=i("ac0d"),m={name:"Detail",components:{MmLoading:o["a"],MusicList:r["a"]},mixins:[u["a"]],data:function(){return{list:[]}},created:function(){var t=this;Object(c["e"])(this.$route.params.id).then((function(s){document.title="".concat(s.name," - mmPlayer在线音乐播放器"),t.list=s.tracks,t._hideLoad()})).catch((function(){t._hideLoad()}))},methods:Object(l["a"])({selectItem:function(t,s){this.selectPlay({list:this.list,index:s})}},Object(a["b"])(["selectPlay"]))},d=m,f=(i("47a9"),i("2877")),p=Object(f["a"])(d,e,n,!1,null,"0655fe77",null);s["default"]=p.exports},"516c":function(t,s,i){"use strict";i("828f")},5362:function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"musicList"},[t.list.length>0?[i("div",{staticClass:"list-item list-header"},[i("span",{staticClass:"list-name"},[t._v("歌曲")]),i("span",{staticClass:"list-artist"},[t._v("歌手")]),1===t.listType?i("span",{staticClass:"list-time"},[t._v("时长")]):i("span",{staticClass:"list-album"},[t._v("专辑")])]),i("div",{ref:"listContent",staticClass:"list-content",on:{scroll:function(s){return t.listScroll(s)}}},[t._l(t.list,(function(s,e){return i("div",{key:s.id,staticClass:"list-item",class:{on:t.playing&&t.currentMusic.id===s.id},on:{dblclick:function(i){return t.selectItem(s,e,i)}}},[i("span",{staticClass:"list-num",domProps:{textContent:t._s(e+1)}}),i("div",{staticClass:"list-name"},[i("span",[t._v(t._s(s.name))]),i("div",{staticClass:"list-menu"},[i("mm-icon",{staticClass:"hover",attrs:{type:t.getPlayIconType(s),size:40},on:{click:function(i){return i.stopPropagation(),t.selectItem(s,e)}}})],1)]),i("span",{staticClass:"list-artist"},[t._v(t._s(s.singer))]),1===t.listType?i("span",{staticClass:"list-time"},[t._v(" "+t._s(t._f("format")(s.duration%3600))+" "),i("mm-icon",{staticClass:"hover list-menu-icon-del",attrs:{type:"delete-mini",size:40},on:{click:function(s){return s.stopPropagation(),t.deleteItem(e)}}})],1):i("span",{staticClass:"list-album"},[t._v(t._s(s.album))])])})),t._t("listBtn")],2)]:i("mm-no-result",{attrs:{title:"弄啥呢，怎么啥也没有！！！"}})],2)},n=[],l=i("5530"),a=(i("a9e3"),i("ac1f"),i("00b4"),i("2f62")),c=i("ca00"),o=i("5af1"),r={name:"MusicList",components:{MmNoResult:o["a"]},filters:{format:c["b"]},props:{list:{type:Array,default:function(){return[]}},listType:{type:Number,default:0}},data:function(){return{lockUp:!0}},computed:Object(l["a"])({},Object(a["c"])(["playing","currentMusic"])),watch:{list:function(t,s){2===this.listType&&(t.length!==s.length||t[t.length-1].id!==s[s.length-1].id)&&(this.lockUp=!1)}},activated:function(){this.scrollTop&&this.$refs.listContent&&(this.$refs.listContent.scrollTop=this.scrollTop)},methods:Object(l["a"])({listScroll:function(t){var s=t.target.scrollTop;if(this.scrollTop=s,2===this.listType&&!this.lockUp){var i=t.target,e=i.scrollHeight,n=i.offsetHeight;s+n>=e-50&&(this.lockUp=!0,this.$emit("pullUp"))}},scrollTo:function(){this.$refs.listContent.scrollTop=0},selectItem:function(t,s,i){i&&/list-menu-icon-del/.test(i.target.className)||(this.currentMusic.id&&t.id===this.currentMusic.id?this.setPlaying(!this.playing):this.$emit("select",t,s))},getPlayIconType:function(t){var s=t.id,i=this.playing,e=this.currentMusic.id;return i&&e===s?"pause-mini":"play-mini"},deleteItem:function(t){this.$emit("del",t)}},Object(a["d"])({setPlaying:"SET_PLAYING"}))},u=r,m=(i("516c"),i("2877")),d=Object(m["a"])(u,e,n,!1,null,"d5324632",null);s["a"]=d.exports},"5af1":function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"mm-no-result"},[i("p",{staticClass:"mm-no-result-text"},[t._v(t._s(t.title))])])},n=[],l={name:"MmNoResult",props:{title:{type:String,default:""}}},a=l,c=(i("9673"),i("2877")),o=Object(c["a"])(a,e,n,!1,null,null,null);s["a"]=o.exports},"77a3":function(t,s,i){},"828f":function(t,s,i){},9673:function(t,s,i){"use strict";i("f045")},ac0d:function(t,s,i){"use strict";i.d(s,"a",(function(){return l}));var e=i("5530"),n=i("2f62"),l=(Object(e["a"])({},Object(n["c"])(["playing","currentMusic"])),Object(e["a"])(Object(e["a"])({selectItem:function(t,s){t.id===this.currentMusic.id&&this.playing?this.setPlaying(!1):this.selectPlay({list:this.list,index:s})}},Object(n["d"])({setPlaying:"SET_PLAYING"})),Object(n["b"])(["selectPlay"])),{data:function(){return{mmLoadShow:!0}},methods:{_hideLoad:function(){var t,s=this;clearTimeout(t),t=setTimeout((function(){s.mmLoadShow=!1}),200)}}})},f045:function(t,s,i){},f904:function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"mm-loading",style:{backgroundColor:t.loadingBgColor}},[i("div",{staticClass:"mm-loading-content"},[i("svg",{staticClass:"circular",attrs:{viewBox:"25 25 50 50"}},[i("circle",{staticClass:"path",attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])])])},n=[],l={name:"MmLoading",props:{value:{type:Boolean,default:!0},loadingBgColor:{type:String,default:""}}},a=l,c=(i("2332"),i("2877")),o=Object(c["a"])(a,e,n,!1,null,null,null);s["a"]=o.exports}}]);
//# sourceMappingURL=chunk-5149af37.1567f71b.js.map