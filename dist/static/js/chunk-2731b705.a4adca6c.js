(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2731b705"],{"16fc":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"components-container"},[t._m(0),e("div",{staticClass:"editor-container"},[e("dnd-list",{attrs:{list1:t.list1,list2:t.list2,"list1-title":"List","list2-title":"Article pool"}})],1)])},s=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("aside",[t._v("drag-list base on "),e("a",{attrs:{href:"https://github.com/SortableJS/Vue.Draggable",target:"_blank"}},[t._v("Vue.Draggable")])])}],a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"dndList"},[e("div",{staticClass:"dndList-list",style:{width:t.width1}},[e("h3",[t._v(t._s(t.list1Title))]),e("draggable",{staticClass:"dragArea",attrs:{"set-data":t.setData,list:t.list1,group:"article"}},t._l(t.list1,(function(i){return e("div",{key:i.id,staticClass:"list-complete-item"},[e("div",{staticClass:"list-complete-item-handle"},[t._v(" "+t._s(i.id)+"["+t._s(i.author)+"] "+t._s(i.title)+" ")]),e("div",{staticStyle:{position:"absolute",right:"0px"}},[e("span",{staticStyle:{float:"right","margin-top":"-20px","margin-right":"5px"},on:{click:function(e){return t.deleteEle(i)}}},[e("i",{staticClass:"el-icon-delete",staticStyle:{color:"#ff4949"}})])])])})),0)],1),e("div",{staticClass:"dndList-list",style:{width:t.width2}},[e("h3",[t._v(t._s(t.list2Title))]),e("draggable",{staticClass:"dragArea",attrs:{list:t.list2,group:"article"}},t._l(t.list2,(function(i){return e("div",{key:i.id,staticClass:"list-complete-item"},[e("div",{staticClass:"list-complete-item-handle2",on:{click:function(e){return t.pushEle(i)}}},[t._v(" "+t._s(i.id)+" ["+t._s(i.author)+"] "+t._s(i.title)+" ")])])})),0)],1)])},l=[],r=(e("ac4d"),e("8a81"),e("ac6a"),e("1980")),c=e.n(r),u={name:"DndList",components:{draggable:c.a},props:{list1:{type:Array,default:function(){return[]}},list2:{type:Array,default:function(){return[]}},list1Title:{type:String,default:"list1"},list2Title:{type:String,default:"list2"},width1:{type:String,default:"48%"},width2:{type:String,default:"48%"}},methods:{isNotInList1:function(t){return this.list1.every((function(i){return t.id!==i.id}))},isNotInList2:function(t){return this.list2.every((function(i){return t.id!==i.id}))},deleteEle:function(t){var i=!0,e=!1,n=void 0;try{for(var s,a=this.list1[Symbol.iterator]();!(i=(s=a.next()).done);i=!0){var l=s.value;if(l.id===t.id){var r=this.list1.indexOf(l);this.list1.splice(r,1);break}}}catch(c){e=!0,n=c}finally{try{i||null==a.return||a.return()}finally{if(e)throw n}}this.isNotInList2(t)&&this.list2.unshift(t)},pushEle:function(t){var i=!0,e=!1,n=void 0;try{for(var s,a=this.list2[Symbol.iterator]();!(i=(s=a.next()).done);i=!0){var l=s.value;if(l.id===t.id){var r=this.list2.indexOf(l);this.list2.splice(r,1);break}}}catch(c){e=!0,n=c}finally{try{i||null==a.return||a.return()}finally{if(e)throw n}}this.isNotInList1(t)&&this.list1.push(t)},setData:function(t){t.setData("Text","")}}},o=u,d=(e("7f49"),e("2877")),f=Object(d["a"])(o,a,l,!1,null,"005c1ad2",null),h=f.exports,p=e("2423"),m={name:"DndListDemo",components:{DndList:h},data:function(){return{list1:[],list2:[]}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.listLoading=!0,Object(p["c"])().then((function(i){t.list1=i.data.items.splice(0,5),t.list2=i.data.items}))}}},v=m,g=Object(d["a"])(v,n,s,!1,null,null,null);i["default"]=g.exports},2423:function(t,i,e){"use strict";e.d(i,"c",(function(){return s})),e.d(i,"b",(function(){return a})),e.d(i,"d",(function(){return l})),e.d(i,"a",(function(){return r})),e.d(i,"e",(function(){return c}));var n=e("b775");function s(t){return Object(n["a"])({url:"/vue-element-admin/article/list",method:"get",params:t})}function a(t){return Object(n["a"])({url:"/vue-element-admin/article/detail",method:"get",params:{id:t}})}function l(t){return Object(n["a"])({url:"/vue-element-admin/article/pv",method:"get",params:{pv:t}})}function r(t){return Object(n["a"])({url:"/vue-element-admin/article/create",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/vue-element-admin/article/update",method:"post",data:t})}},"7f49":function(t,i,e){"use strict";var n=e("b447c"),s=e.n(n);s.a},b447c:function(t,i,e){}}]);