(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(18)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(2),r=t.n(s),c=(t(14),t(3)),i=t(4),o=t(6),m=t(5),u=t(7);t(15),t(16);function d(e){var a=e.details;return l.a.createElement("div",{className:"user"},l.a.createElement("h1",null,a.name),l.a.createElement("h2",null,l.a.createElement("i",{className:"fas fa-user-alt"}),a.username),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-envelope"}),a.email),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-location-arrow"}),a.address.street,","," ",a.address.suite,","," ",a.address.city,","," ",a.address.zipcode),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-map-marker-alt"}),"Lat: ",a.address.geo.lat,","," ","Lng: ",a.address.geo.lng),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-mobile-alt"}),a.phone),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-globe"}),a.website),l.a.createElement("li",null,l.a.createElement("i",{className:"far fa-building"}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("h4",null,a.company.name)),l.a.createElement("li",null,a.company.catchPhrase," "),l.a.createElement("li",null,a.company.bs," ")))))}t(17);function E(e){var a=e.details;return l.a.createElement("div",{className:"post"},l.a.createElement("h3",null,a.title),l.a.createElement("p",null,a.body))}var h=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).state={users:[],posts:[]},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(a){return e.setState({users:a})}),fetch("https://jsonplaceholder.typicode.com/posts").then(function(e){return e.json()}).then(function(a){return e.setState({posts:a})})}},{key:"render",value:function(){var e=this.state.users,a=this.state.posts;return l.a.createElement("div",null,l.a.createElement("div",{className:"heading__container"},l.a.createElement("h1",{className:"heading"},"USERS")),l.a.createElement("div",{className:"userContainer"},e.map(function(e){return l.a.createElement("div",{key:e.id},l.a.createElement(d,{details:e}))})),l.a.createElement("div",{className:"heading__container"},l.a.createElement("h1",{className:"heading posts__heading"},"Posts")),l.a.createElement("div",{className:"postsContainer"},a.map(function(e){return l.a.createElement("div",{key:e.id},l.a.createElement(E,{details:e}))})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.59b0558a.chunk.js.map