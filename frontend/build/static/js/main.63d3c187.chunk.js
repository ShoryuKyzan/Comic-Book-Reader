(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{56:function(e,t,n){e.exports=n(70)},61:function(e,t,n){},63:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},64:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),i=n.n(c),o=(n(61),n(14)),s=n.n(o),u=n(22),l=n(11),h=n(9),p=(n(63),n(64),n(49)),f=n(29);"3000"===window.location.port&&("http://api.comicsite.com:8000",!0);var d={Series:function(){function e(){Object(l.a)(this,e)}return Object(h.a)(e,null,[{key:"SERIES",value:function(){return"/series"}},{key:"CHAPTER",value:function(){return"/chapters"}},{key:"getByName",value:function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{id:1,name:"Lonely Hooves"});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"chapters",value:function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[{id:1,name:"Chapter 1",image:"abc"},{id:2,name:"Chapter 2",image:"abc"},{id:3,name:"Chapter 3",image:"abc"},{id:4,name:"Chapter 4",image:"abc"}]);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()},m=n(18),v=n(19),b=n(20),k=n(98),g=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(v.a)(t).call(this,e))).state={},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(r.a.Component),j=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(v.a)(t).call(this,e))).state={},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("a",null,"<<"),r.a.createElement("a",null,"<"),r.a.createElement("a",null,">"),r.a.createElement("a",null,">>"))}}]),t}(r.a.Component),C=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(v.a)(t).call(this,e))).state={},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(j,null))}}]),t}(r.a.Component),O=n(99),y=n(96),E=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(v.a)(t).call(this,e))).state={list:[]},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Series.chapters(this.props.series.id);case 2:t=e.sent,this.setState({list:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onChapterChanged",value:function(e){this.props.onChapterChanged(e.target.value)}},{key:"render",value:function(){var e=[];this.state.list.forEach((function(t){var n=r.a.createElement(O.a,{key:t.id,value:t},t.name);e.push(n)}));var t="";return this.props.selected&&(t=this.props.selected),r.a.createElement(y.a,{value:t,onChange:this.onChapterChanged.bind(this)},e)}}]),t}(r.a.Component),w=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(v.a)(t).call(this,e))).state={pageId:null,chapterId:null,skipNonChapter:!1},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.lastPage&&this.setState({pageId:localStorage.lastPage}),localStorage.skipNonChapter&&this.setState({skipNonChapter:localStorage.skipNonChapter});case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onChapterChanged",value:function(e){this.setState({chapter:e})}},{key:"onClickSkipNonChapter",value:function(e){}},{key:"onPageChanged",value:function(e){this.setState({chapter:e.chapter}),localStorage.pageId=e.id}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(C,{series:this.props.series}),r.a.createElement(k.a,{onChange:function(t){return e.setState({skipNonChapter:t.target.checked})},checked:this.state.skipNonChapter}),"Skip Non-Chapter pages",r.a.createElement(E,{series:this.props.series,selected:this.state.chapter,onChapterChanged:this.onChapterChanged.bind(this)}))}}]),t}(r.a.Component),S=function(){function e(){Object(l.a)(this,e),this.state={series:null}}return Object(h.a)(e,[{key:"componentDidMount",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Series.getByName("lonely-hooves");case 2:t=e.sent,this.setState({series:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/"},r.a.createElement(w,{series:this.state.series}))))}}]),e}();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[56,1,2]]]);
//# sourceMappingURL=main.63d3c187.chunk.js.map