(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{19:function(e,t,a){e.exports=a(42)},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),c=a.n(s),i=a(6),o=a.n(i),l=a(17),m=a(2),u=a(3),v=a(5),d=a(4),p=a(18),g=a.n(p),y=function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.genre;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"genres__genre"},e))}}]),a}(n.Component),f=function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.genres,a=e.title,n=e.summary,s=e.poster,c=e.year;e.id;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:a,title:a}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("div",{className:"movie__year"},c),r.a.createElement("ul",{className:"genres"},t.map((function(e){return r.a.createElement(y,{genre:e,key:"".concat(e).concat(a)})}))),r.a.createElement("h1",{className:"movie__title",style:{backgroundColor:"silver"}},a),r.a.createElement("div",{className:"movie__summary"},n.slice(0,290)+"....")))}}]),a}(n.Component),h=function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(o.a.mark((function t(){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,console.log(n),e.setState({movies:n,isLoading:!1});case 6:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(f,{title:e.title,key:e.id,id:e.id,summary:e.summary,poster:e.medium_cover_image,year:e.year,genres:e.genres})})))))}}]),a}(n.Component);c.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.bc5369b9.chunk.js.map