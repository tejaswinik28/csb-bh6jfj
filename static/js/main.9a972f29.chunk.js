(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{17:function(t,e,n){"use strict";n.r(e);var a=n(3),r=n(4),s=n(7),c=n(6),i=n(1),o=n.n(i),u=n(5),l=n(0),j={summer:{text:"Lets hit the beach",iconName:"sun"},winter:{text:"Its Cold",iconName:"snowFlake"}},h=function(t){var e,n,a=(e=t.lat,(n=(new Date).getMonth())>2&&n<9?e>0?"summer":"winter":e>0?"winter":"summer"),r=j[a],s=r.text,c=r.iconName;return Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:" massive ".concat(c," icon")}),Object(l.jsx)("h1",{children:s}),Object(l.jsx)("i",{className:" massive ".concat(c," icon")})]})},m=function(){return Object(l.jsx)("div",{className:"ui active dimmer",children:Object(l.jsx)("div",{className:"ui text loader",children:"Loading..."})})},d=function(t){Object(s.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={lat:null,errorMessage:""},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;window.navigator.geolocation.getCurrentPosition((function(e){return t.setState({lat:e.coords.latitude})}),(function(e){return t.setState({errorMessage:"Something went wrong !!!!!!"})}))}},{key:"render",value:function(){return this.state.errorMessage&&!this.state.lat?Object(l.jsx)(m,{}):!this.state.errorMessage&&this.state.lat?Object(l.jsx)(h,{lat:this.state.lat}):Object(l.jsx)(m,{})}}]),n}(o.a.Component),b=document.getElementById("root");Object(u.createRoot)(b).render(Object(l.jsx)(i.StrictMode,{children:Object(l.jsx)(d,{})}))}},[[17,1,2]]]);
//# sourceMappingURL=main.9a972f29.chunk.js.map