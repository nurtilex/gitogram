(function(e){function t(t){for(var r,o,i=t[0],s=t[1],u=t[2],l=0,p=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(p.length)p.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/gitogram/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0110":function(e,t,n){},"0479":function(e,t,n){e.exports=n.p+"img/Gitogram.cc56deaa.svg"},1668:function(e,t,n){"use strict";n("869b")},"1a86":function(e,t,n){e.exports=n.p+"img/Logo.19e9871c.svg"},"1b2e":function(e,t,n){},"200f":function(e,t,n){"use strict";n("fe76")},"257e":function(e,t,n){"use strict";n("edab")},"2b26":function(e,t,n){"use strict";n("5437")},"32a3":function(e,t,n){},"356d":function(e,t,n){},3645:function(e,t,n){},3830:function(e,t,n){},"3c23":function(e,t,n){},"42a8":function(e,t,n){e.exports=n.p+"img/star.0169ff3c.svg"},"4ec4":function(e,t,n){"use strict";n("3c23")},5437:function(e,t,n){},5482:function(e,t,n){},"54ba":function(e,t,n){e.exports=n.p+"img/fork.c89cb2bc.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=n("5502"),c=n("1da1"),o=(n("96cf"),n("d81d"),n("7db0"),n("d3b7"),n("3ca3"),n("ddb0"),n("9861"),n("a15b"),n("99af"),n("bc3a")),i=n.n(o),s="https://api.github.com",u=function(e){var t=e.url,n=e.method,r=void 0===n?"get":n,a=e.data,c=void 0===a?{}:a,o=e.headers,u=void 0===o?{}:o;return i()({url:t,method:r,data:c,headers:u,baseURL:s})},d=function(e){return e<10?"0".concat(e):e},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"javascript",t=new URLSearchParams,n=6048e5,r=new Date(Date.now()-n),a=[r.getFullYear(),d(r.getMonth()+1),d(r.getDate())].join("-");return t.append("order","desc"),t.append("sort","stars"),t.append("per_page",10),t.append("q","language:".concat(e," created:>").concat(a)),u({url:"/search/repositories?".concat(t)})},p=function(e){var t=e.owner,n=e.repo,r="application/vnd.github.v3.html+json";return u({url:"/repos/".concat(t,"/").concat(n,"/readme"),headers:{accept:r}})},f={namespaced:!0,state:{data:[],currentSlide:0},mutations:{updateCurrentSlide:function(e,t){e.currentSlide=t},setReadme:function(e,t){e.data=e.data.map((function(e){return e.id===t.id&&(e.readme=t.content),e}))}},getters:{getRepoById:function(e){return function(t){return e.data.find((function(e){return e.id===t}))}}},actions:{fetchTrendings:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l();case 3:n=t.sent,r=n.data.items,e.state.data=r,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},fetchReadme:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o,i,s,u,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.commit,a=e.getters,c=t.id,o=t.owner,i=t.repo,s=a.getRepoById(c),void 0===s.readme){n.next=5;break}return n.abrupt("return");case 5:return n.prev=5,n.next=8,p({owner:o,repo:i});case 8:u=n.sent,d=u.data,r("setReadme",{id:c,content:d}),n.next=16;break;case 13:n.prev=13,n.t0=n["catch"](5),console.log(n.t0);case 16:case"end":return n.stop()}}),n,null,[[5,13]])})))()}}},b=function(){return u({url:"/user",headers:{Authorization:"token ".concat(localStorage.getItem("token"))}})},v=function(){return u({url:"/user/starred",headers:{Authorization:"token ".concat(localStorage.getItem("token"))}})},g=function(e){var t=e.owner,n=e.repo;return u({url:"/repos/".concat(t,"/").concat(n,"/issues"),headers:{Authorization:"token ".concat(localStorage.getItem("token"))}})},m=function(e){var t=e.owner,n=e.repo;return u({method:"PUT",url:"/user/starred/".concat(t,"/").concat(n),headers:{Authorization:"token ".concat(localStorage.getItem("token"))}})},h=function(e){var t=e.owner,n=e.repo;return u({method:"DELETE",url:"/user/starred/".concat(t,"/").concat(n),headers:{Authorization:"token ".concat(localStorage.getItem("token"))}})},O={namespaced:!0,state:{user:[],repos:[]},mutations:{},getters:{getIssuesOfRepo:function(e){return function(t){var n=t.id,r=e.repos.find((function(e){return e.id===n}));return r.issues||null}}},actions:{fetchUser:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b();case 3:n=t.sent,r=n.data,e.state.user=r,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},fetchRepos:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v();case 3:n=t.sent,r=n.data,e.state.repos=r,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},fetchIssues:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o,i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.owner,a=t.repo,c=t.id,n.prev=1,n.next=4,g({owner:r,repo:a});case 4:o=n.sent,i=o.data,s=i.map((function(e){var t=e.id,n=e.title,r=e.user.login;return{id:t,title:n,login:r}})),e.state.repos=e.state.repos.map((function(e){return e.id===c&&(e.issues=s),e})),n.next=13;break;case 10:n.prev=10,n.t0=n["catch"](1),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[1,10]])})))()},likeRepo:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.owner,a=t.repo,n.prev=1,n.next=4,m({owner:r,repo:a});case 4:return c=n.sent,o=c.status,console.log(o),n.next=9,e.actions.fetchRepos();case 9:n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](1),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[1,11]])})))()},dislikeRepo:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.owner,a=t.repo,n.prev=1,n.next=4,h({owner:r,repo:a});case 4:return n.next=6,e.actions.fetchRepos();case 6:n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()}}},j=Object(a["a"])({modules:{trendings:f,user:O}}),w=(n("b0c0"),n("d9e2"),n("6c02")),k={class:"feed"},y={class:"stories-list"},_={class:"main"};function x(e,t,n,a,c,o){var i=Object(r["B"])("headline"),s=Object(r["B"])("storyItem"),u=Object(r["B"])("topline"),d=Object(r["B"])("articlePreview"),l=Object(r["B"])("post");return Object(r["t"])(),Object(r["f"])("div",k,[Object(r["i"])(u,null,{headline:Object(r["G"])((function(){return[Object(r["i"])(i,{avatar_url:e.user.avatar_url},null,8,["avatar_url"])]})),content:Object(r["G"])((function(){return[Object(r["g"])("ul",y,[(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(o.formateObjects(e.trendings),(function(e,t){var n=e.id,a=e.login,c=e.avatarURL;return Object(r["t"])(),Object(r["f"])("li",{class:"stories-list__item",key:n},[Object(r["i"])(s,{name:a,avatarLink:c,id:t},null,8,["name","avatarLink","id"])])})),128))])]})),_:1}),Object(r["g"])("section",_,[(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(o.formateObjects(e.repos),(function(e){return Object(r["t"])(),Object(r["d"])(l,{key:e.id,data:e},{default:Object(r["G"])((function(){return[Object(r["i"])(d,{data:e},null,8,["data"])]})),_:2},1032,["data"])})),128))])])}var R=n("5530"),S=(n("a4d3"),n("e01a"),{class:"c-topline"}),I={key:0,class:"content"};function B(e,t,n,a,c,o){return Object(r["t"])(),Object(r["f"])("div",S,[Object(r["A"])(e.$slots,"headline",{},void 0,!0),e.$slots.content?(Object(r["t"])(),Object(r["f"])("div",I,[Object(r["A"])(e.$slots,"content",{},void 0,!0)])):Object(r["e"])("",!0)])}var L={name:"topline"},C=(n("4ec4"),n("6b0d")),T=n.n(C);const E=T()(L,[["render",B],["__scopeId","data-v-63800661"]]);var M=E,A=n("86e6"),P=n.n(A),U=n("81ca"),D=n.n(U),N=function(e){return Object(r["w"])("data-v-5b865f80"),e=e(),Object(r["u"])(),e},F={class:"headline"},q={class:"list"},$=N((function(){return Object(r["g"])("a",{href:"#"},[Object(r["g"])("img",{src:P.a,alt:"homepage icon",class:"list-item__img"})],-1)})),z={href:"#"},G=["src"],V=N((function(){return Object(r["g"])("a",{href:"#"},[Object(r["g"])("img",{src:D.a,alt:"sign-out icon",class:"list-item__img"})],-1)}));function W(e,t,n,a,c,o){var i=Object(r["B"])("logo");return Object(r["t"])(),Object(r["f"])("div",F,[Object(r["i"])(i),Object(r["g"])("li",q,[$,Object(r["g"])("a",z,[Object(r["g"])("img",{src:n.avatar_url,alt:"some user",class:"list-item__img user-img"},null,8,G)]),V])])}var J=n("1a86"),Y=n.n(J),H=function(e){return Object(r["w"])("data-v-c55f00e8"),e=e(),Object(r["u"])(),e},X={href:"#"},K=H((function(){return Object(r["g"])("img",{src:Y.a,alt:"Gitogram",href:"#"},null,-1)})),Q=[K];function Z(e,t,n,a,c,o){return Object(r["t"])(),Object(r["f"])("a",X,Q)}var ee={name:"logo"};n("a73d");const te=T()(ee,[["render",Z],["__scopeId","data-v-c55f00e8"]]);var ne=te,re={name:"headline",components:{logo:ne},props:{avatar_url:{type:String,required:!0}}};n("b0c1");const ae=T()(re,[["render",W],["__scopeId","data-v-5b865f80"]]);var ce=ae,oe={class:"post"},ie={key:0,class:"post__comments"},se={key:0,class:"loading"},ue={key:1,class:"comments"},de={class:"post__date"};function le(e,t,n,a,c,o){var i=Object(r["B"])("userButton"),s=Object(r["B"])("toggler"),u=Object(r["B"])("spinner"),d=Object(r["B"])("comment");return Object(r["t"])(),Object(r["f"])("div",oe,[Object(r["i"])(i,{avatarLink:n.data.avatarURL,nickname:n.data.login,link:"#"},null,8,["avatarLink","nickname"]),Object(r["A"])(e.$slots,"default",{},void 0,!0),Object(r["i"])(s,{onOnToggle:o.toggle},null,8,["onOnToggle"]),c.shown?(Object(r["t"])(),Object(r["f"])("div",ie,[c.isLoading?(Object(r["t"])(),Object(r["f"])("div",se,[Object(r["i"])(u)])):c.isLoading?Object(r["e"])("",!0):(Object(r["t"])(),Object(r["f"])("div",ue,[(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(e.getIssuesOfRepo({id:n.data.id}),(function(e){return Object(r["t"])(),Object(r["d"])(d,{key:e.id,author:e.login,body:e.title},null,8,["author","body"])})),128))]))])):Object(r["e"])("",!0),Object(r["g"])("div",de,Object(r["D"])(n.data.date),1)])}var pe={class:"comment"},fe={class:"author"},be={class:"body"};function ve(e,t,n,a,c,o){return Object(r["t"])(),Object(r["f"])("div",pe,[Object(r["g"])("span",fe,Object(r["D"])(n.author),1),Object(r["g"])("span",be,Object(r["D"])(n.body),1)])}var ge={name:"comment",props:{author:{type:String,required:!0},body:{type:String,required:!0}}};n("1668");const me=T()(ge,[["render",ve],["__scopeId","data-v-9e932890"]]);var he=me,Oe=(n("9911"),["href"]),je=["src"],we={class:"nickname"};function ke(e,t,n,a,c,o){return Object(r["t"])(),Object(r["f"])("a",{class:"post__author",href:n.link||"#"},[Object(r["g"])("img",{src:n.avatarLink,alt:"user icon",class:"post-author__icon"},null,8,je),Object(r["g"])("span",we,Object(r["D"])(n.nickname),1)],8,Oe)}var ye={name:"userButton",props:{avatarLink:{type:String,required:!0},nickname:{type:String,required:!0},link:String}};n("2b26");const _e=T()(ye,[["render",ke],["__scopeId","data-v-6dfbceee"]]);var xe=_e,Re=n("e235"),Se=n.n(Re),Ie={class:"button_text"};function Be(e,t,n,a,c,o){return Object(r["t"])(),Object(r["f"])("button",{type:"button",class:"toggler",onClick:t[0]||(t[0]=function(){return o.toggleValue&&o.toggleValue.apply(o,arguments)})},[Object(r["g"])("span",Ie,Object(r["D"])(o.currentText),1),Object(r["g"])("img",{src:Se.a,alt:"arrow",class:Object(r["o"])(["arrow",{active:c.isOpened}])},null,2)])}var Le={name:"toggler",data:function(){return{isOpened:!1}},methods:{toggleValue:function(){this.isOpened=!this.isOpened,this.$emit("onToggle",this.isOpened)}},computed:{currentText:function(){return this.isOpened?"Hide issues":"View issues"}}};n("d0be");const Ce=T()(Le,[["render",Be],["__scopeId","data-v-11ab5128"]]);var Te=Ce,Ee={class:"lds-dual-ring"};function Me(e,t,n,a,c,o){return Object(r["t"])(),Object(r["f"])("div",Ee)}var Ae={name:"spinner"};n("aaa2");const Pe=T()(Ae,[["render",Me],["__scopeId","data-v-982cc300"]]);var Ue=Pe,De={name:"post",components:{comment:he,userButton:xe,toggler:Te,spinner:Ue},props:{data:Object},data:function(){return{isLoading:!1,shown:!1}},methods:Object(R["a"])({toggle:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,t.isLoading=!0,r=t.data,a=r.login,c=r.title,o=r.id,n.next=5,t.fetchIssues({owner:a,repo:c,id:o});case 5:n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),console.log(n.t0);case 10:return n.prev=10,t.shown=e,t.isLoading=!1,n.finish(10);case 14:case"end":return n.stop()}}),n,null,[[0,7,10,14]])})))()}},Object(a["b"])({fetchIssues:"user/fetchIssues"})),computed:Object(R["a"])({},Object(a["c"])({getIssuesOfRepo:"user/getIssuesOfRepo"}))};n("7bed");const Ne=T()(De,[["render",le],["__scopeId","data-v-70124600"]]);var Fe=Ne,qe=["href"],$e={class:"post__title"},ze={class:"post__subtitle"};function Ge(e,t,n,a,c,o){var i=Object(r["B"])("postControllers");return Object(r["t"])(),Object(r["f"])("a",{class:"post__article",href:n.data.link},[Object(r["g"])("div",$e,Object(r["D"])(n.data.title),1),Object(r["g"])("div",ze,Object(r["D"])(n.data.description||"Default description"),1),Object(r["i"])(i,{starsAmount:n.data.starsCount,forkAmount:n.data.forksCount},null,8,["starsAmount","forkAmount"])],8,qe)}var Ve=n("42a8"),We=n.n(Ve),Je=n("54ba"),Ye=n.n(Je),He=function(e){return Object(r["w"])("data-v-24b22780"),e=e(),Object(r["u"])(),e},Xe={class:"controllers-wrapper"},Ke={class:"stars"},Qe=He((function(){return Object(r["g"])("button",{class:"stars__button",type:"button"},[Object(r["g"])("img",{src:We.a,alt:"star icon"}),Object(r["g"])("span",null,"Star")],-1)})),Ze={class:"stars__value"},et={class:"fork"},tt=He((function(){return Object(r["g"])("button",{class:"fork__button",type:"button"},[Object(r["g"])("img",{src:Ye.a,alt:"forked repository icon"}),Object(r["g"])("span",null,"Fork")],-1)})),nt={class:"fork__value"};function rt(e,t,n,a,c,o){return Object(r["t"])(),Object(r["f"])("div",Xe,[Object(r["g"])("div",Ke,[Qe,Object(r["g"])("span",Ze,Object(r["D"])(n.starsAmount),1)]),Object(r["g"])("div",et,[tt,Object(r["g"])("span",nt,Object(r["D"])(n.forkAmount),1)])])}n("a9e3");var at={name:"postControllers",props:{starsAmount:{type:Number,required:!0},forkAmount:{type:Number,required:!0}}};n("200f");const ct=T()(at,[["render",rt],["__scopeId","data-v-24b22780"]]);var ot=ct,it={name:"articlePreview",components:{postControllers:ot},props:{data:Object}};n("257e");const st=T()(it,[["render",Ge],["__scopeId","data-v-b82f87c2"]]);var ut=st,dt={class:"story-item"},lt=["src"],pt={class:"story-item__text"};function ft(e,t,n,a,c,o){var i=Object(r["B"])("router-link");return Object(r["t"])(),Object(r["f"])("div",dt,[Object(r["i"])(i,{to:"/stories",class:"icon",onClick:t[0]||(t[0]=function(t){return e.updateCurrentSlide(n.id)})},{default:Object(r["G"])((function(){return[Object(r["g"])("img",{src:n.avatarLink,alt:"user icon"},null,8,lt)]})),_:1}),Object(r["g"])("span",pt,Object(r["D"])(n.name),1)])}var bt={name:"storyItem",props:{name:{type:String,required:!0},avatarLink:{type:String,required:!0},id:{type:Number,required:!0}},methods:Object(R["a"])({},Object(a["d"])({updateCurrentSlide:"trendings/updateCurrentSlide"}))};n("aef9");const vt=T()(bt,[["render",ft],["__scopeId","data-v-1c2ee12e"]]);var gt=vt,mt=(n("fb6a"),function(e){var t={"01":"JANUARY","02":"FEBRUARY","03":"MARCH","04":"APRIL","05":"MAY","06":"JUNE","07":"JULY","08":"AUGUST","09":"SEPTEMBER",10:"OCTOBER",11:"NOVEMBER",12:"DECEMBER"},n=e.slice(8,10),r=t[e.slice(5,7)];return"".concat(n," ").concat(r)}),ht=mt,Ot={name:"feeds",components:{headline:ce,topline:M,storyItem:gt,post:Fe,articlePreview:ut},methods:Object(R["a"])(Object(R["a"])({},Object(a["b"])({fetchTrendings:"trendings/fetchTrendings",fetchUser:"user/fetchUser",fetchRepos:"user/fetchRepos",fetchIssues:"user/fetchIssues"})),{},{formateObjects:function(e){return e.map((function(e){return{id:e.id,login:e.owner.login,title:e.name,avatarURL:e.owner.avatar_url,starsCount:e.stargazers_count,forksCount:e.forks_count,description:e.description,comments:[{nickname:"joshua_l",body:"Enable performance measuring in production, at the user's request",id:0},{nickname:"Camille",body:"It's Impossible to Rename an Inherited Slot",id:1},{nickname:"Marselle",body:"transition-group with flex parent causes removed items to fly",id:2}],body:["The easiest way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.","For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.","In Preview 4 we enable push/pop navigation with NavigationPage. We added a concrete implementation of IWindow, and completed porting ContentPage from Xamarin.Forms","For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year."],date:ht(e.created_at)}}))}}),computed:Object(R["a"])({},Object(a["e"])({trendings:function(e){return e.trendings.data},user:function(e){return e.user.user},repos:function(e){return e.user.repos}})),created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchTrendings();case 2:return t.next=4,e.fetchUser();case 4:return t.next=6,e.fetchRepos();case 6:case"end":return t.stop()}}),t)})))()}};n("9280");const jt=T()(Ot,[["render",x],["__scopeId","data-v-a14b7f9c"]]);var wt=jt,kt=n("0479"),yt=n.n(kt),_t=function(e){return Object(r["w"])("data-v-da35d446"),e=e(),Object(r["u"])(),e},xt={class:"stories-section"},Rt={class:"header"},St=_t((function(){return Object(r["g"])("div",{class:"logo"},[Object(r["g"])("img",{src:yt.a,alt:"gitogram"})],-1)})),It=_t((function(){return Object(r["g"])("div",{class:"close-button"},"+",-1)})),Bt={class:"wrapper"};function Lt(e,t,n,a,c,o){var i=Object(r["B"])("router-link"),s=Object(r["B"])("sliderItem");return Object(r["t"])(),Object(r["f"])("section",xt,[Object(r["g"])("header",Rt,[St,Object(r["i"])(i,{to:"/",class:"link"},{default:Object(r["G"])((function(){return[It]})),_:1})]),Object(r["g"])("div",Bt,[Object(r["g"])("div",{class:"stories-wrapper",style:Object(r["p"])({transform:"translateX(".concat(-23*this.currentSlide,"rem)")})},[(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(o.formateObjects(e.trendings),(function(t){return Object(r["t"])(),Object(r["d"])(s,{key:t.id+e.currentSlide,data:t,onMoveSlide:o.handleMoveSlide},null,8,["data","onMoveSlide"])})),128))],4)])])}var Ct={class:"header"},Tt={class:"progress"},Et={class:"user"},Mt={class:"content"},At={key:0,class:"loader"},Pt=["innerHTML"],Ut={key:2,class:"placeholder"},Dt={class:"footer"},Nt={class:"button"};function Ft(e,t,n,a,c,o){var i=this,s=Object(r["B"])("progressBar"),u=Object(r["B"])("userButton"),d=Object(r["B"])("spinner"),l=Object(r["B"])("sliderPlaceholder"),p=Object(r["B"])("xButton");return Object(r["t"])(),Object(r["f"])("div",{class:Object(r["o"])(o.sliderStyles)},[o.showLeftButton?(Object(r["t"])(),Object(r["f"])("div",{key:0,class:"button-move button--prev",onClick:t[0]||(t[0]=function(e){return o.moveSlide("prev")})})):Object(r["e"])("",!0),Object(r["g"])("div",Ct,[Object(r["g"])("div",Tt,[Object(r["i"])(s,{active:n.data.active,onOnFinish:t[1]||(t[1]=function(e){return i.$emit("moveSlide","next")})},null,8,["active"])]),Object(r["g"])("div",Et,[Object(r["i"])(u,{avatarLink:n.data.avatarURL,nickname:n.data.login},null,8,["avatarLink","nickname"])])]),Object(r["g"])("div",Mt,[n.data.loading?(Object(r["t"])(),Object(r["f"])("div",At,[Object(r["i"])(d)])):void 0!==n.data.content?(Object(r["t"])(),Object(r["f"])("div",{key:1,class:"body",innerHTML:n.data.content},null,8,Pt)):(Object(r["t"])(),Object(r["f"])("div",Ut,[Object(r["i"])(l)]))]),Object(r["g"])("div",Dt,[Object(r["g"])("div",Nt,[Object(r["i"])(p,{text:"Follow",hoverText:"Unfollow",onClick:o.handleButtonClick},null,8,["onClick"])])]),o.showRightButton?(Object(r["t"])(),Object(r["f"])("div",{key:1,class:"button-move button--next",onClick:t[2]||(t[2]=function(e){return o.moveSlide("next")})})):Object(r["e"])("",!0)],2)}var qt={ref:"indicator",class:"indicator"};function $t(e,t,n,a,c,o){return Object(r["t"])(),Object(r["f"])("div",{class:Object(r["o"])([{active:c.isActive},"progress-bar"])},[Object(r["g"])("div",qt,null,512)],2)}var zt={name:"progressBar",emits:["onFinish"],props:{active:{type:Boolean,required:!0}},data:function(){return{isActive:!1}},methods:{emitOnFinish:function(){this.$emit("onFinish",1)}},mounted:function(){var e=this;setTimeout((function(){e.$props.active&&(e.isActive=!0)}),0),this.$refs.indicator.addEventListener("transitionend",this.emitOnFinish)},beforeUnmount:function(){this.$refs.indicator.removeEventListener("transitionend",this.emitOnFinish),this.$refs.indicator.sty}};n("a05a");const Gt=T()(zt,[["render",$t],["__scopeId","data-v-05371e33"]]);var Vt=Gt;function Wt(e,t,n,a,c,o){return Object(r["t"])(),Object(r["f"])("button",{class:"button",onMouseenter:t[0]||(t[0]=function(){return o.onMouseEnter&&o.onMouseEnter.apply(o,arguments)}),onMouseleave:t[1]||(t[1]=function(){return o.onMouseLeave&&o.onMouseLeave.apply(o,arguments)})},Object(r["D"])(c.currentText),33)}var Jt={name:"xButton",props:{text:{type:String,required:!0},hoverText:{type:String,required:!1}},data:function(){return{currentText:this.text}},methods:{onMouseEnter:function(){this.currentText=this.hoverText},onMouseLeave:function(){this.currentText=this.text}}};n("c928");const Yt=T()(Jt,[["render",Wt],["__scopeId","data-v-229fa283"]]);var Ht=Yt,Xt={class:"wrapper"},Kt=Object(r["h"])('<div class="img" data-v-48312ae3></div><div class="paragraph-wrapper" data-v-48312ae3><div class="paragraph--small" data-v-48312ae3></div><div class="paragraph--large" data-v-48312ae3></div><div class="paragraph--small" data-v-48312ae3></div></div><div class="paragraph-wrapper" data-v-48312ae3><div class="paragraph--small" data-v-48312ae3></div><div class="paragraph--large" data-v-48312ae3></div><div class="paragraph--small" data-v-48312ae3></div></div>',3),Qt=[Kt];function Zt(e,t,n,a,c,o){return Object(r["t"])(),Object(r["f"])("div",Xt,Qt)}var en={name:"sliderPlaceholder"};n("9d39");const tn=T()(en,[["render",Zt],["__scopeId","data-v-48312ae3"]]);var nn=tn,rn={name:"sliderItem",emits:["moveSlide"],components:{progressBar:Vt,userButton:xe,xButton:Ht,spinner:Ue,sliderPlaceholder:nn},props:{data:{type:Object,required:!0,default:function(){return{}}}},methods:Object(R["a"])(Object(R["a"])({},Object(a["b"])({likeRepo:"user/likeRepo"})),{},{moveSlide:function(e){this.$emit("moveSlide",e)},handleButtonClick:function(){this.likeRepo({owner:this.$props.data.login,repo:this.$props.data.title})}}),computed:{showLeftButton:function(){return this.data.active&&!this.data.isLeft&&this.data.showButtons},showRightButton:function(){return this.data.active&&!this.data.isRight&&this.data.showButtons},sliderStyles:function(){return{"slider-item":!0,"not-active":!this.data.active}}}};n("e682");const an=T()(rn,[["render",Ft],["__scopeId","data-v-1fbd196a"]]);var cn=an,on={name:"stories",components:{sliderItem:cn},data:function(){return{isLoading:!1,showButtons:!0}},methods:Object(R["a"])(Object(R["a"])(Object(R["a"])({},Object(a["b"])({fetchTrendings:"trendings/fetchTrendings",fetchReadme:"trendings/fetchReadme"})),Object(a["d"])({updateCurrentSlide:"trendings/updateCurrentSlide"})),{},{fetchReadmeForActiveSlide:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.trendings[e.currentSlide],r=n.id,a=n.owner,c=n.name,t.next=3,e.fetchReadme({id:r,owner:a.login,repo:c});case 3:case"end":return t.stop()}}),t)})))()},handleMoveSlide:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return"next"===e&&t.updateCurrentSlide(t.currentSlide+1),"prev"===e&&t.updateCurrentSlide(t.currentSlide-1),e>=0&&e<t.trendings.length&&t.updateCurrentSlide(e),n.next=5,t.loadReadme();case 5:case"end":return n.stop()}}),n)})))()},loadReadme:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,e.showButtons=!1,t.prev=2,t.next=5,e.fetchReadmeForActiveSlide();case 5:t.next=11;break;case 7:throw t.prev=7,t.t0=t["catch"](2),console.log(t.t0),t.t0;case 11:return t.prev=11,e.isLoading=!1,e.showButtons=!0,t.finish(11);case 15:case"end":return t.stop()}}),t,null,[[2,7,11,15]])})))()},formateObjects:function(e){var t=this;return e.map((function(e,n,r){return{id:e.id,login:e.owner.login,title:e.name,avatarURL:e.owner.avatar_url,starsCount:e.stargazers_count,forksCount:e.watchers_count,description:e.description,content:e.readme,comments:[{nickname:"joshua_l",body:"Enable performance measuring in production, at the user's request",id:0},{nickname:"Camille",body:"It's Impossible to Rename an Inherited Slot",id:1},{nickname:"Marselle",body:"transition-group with flex parent causes removed items to fly",id:2}],body:["The easiest way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.","For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.","In Preview 4 we enable push/pop navigation with NavigationPage. We added a concrete implementation of IWindow, and completed porting ContentPage from Xamarin.Forms","For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year."],date:"15 MAY",active:n===t.currentSlide,loading:n===t.currentSlide&&t.isLoading,showButtons:t.showButtons,isLeft:0===n,isRight:r.length-1===n}}))}}),computed:Object(R["a"])({},Object(a["e"])({trendings:function(e){return e.trendings.data},currentSlide:function(e){return e.trendings.currentSlide}})),created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchTrendings();case 2:return t.next=4,e.loadReadme();case 4:case"end":return t.stop()}}),t)})))()}};n("635b");const sn=T()(on,[["render",Lt],["__scopeId","data-v-da35d446"]]);var un=sn,dn=n("cc4f"),ln=n.n(dn),pn=function(e){return Object(r["w"])("data-v-23ec7b84"),e=e(),Object(r["u"])(),e},fn={class:"auth-wrapper"},bn={class:"logo"},vn=pn((function(){return Object(r["g"])("div",{class:"description"}," More than just one repository. This is our digital world. ",-1)})),gn=pn((function(){return Object(r["g"])("span",null,"Authorize with github",-1)})),mn=pn((function(){return Object(r["g"])("img",{src:ln.a,alt:"GitHub icon",class:"gh-icon"},null,-1)})),hn=[gn,mn];function On(e,t,n,a,c,o){var i=Object(r["B"])("logo");return Object(r["t"])(),Object(r["f"])("section",fn,[Object(r["g"])("div",bn,[Object(r["i"])(i)]),vn,Object(r["g"])("button",{class:"button",type:"button",onClick:t[0]||(t[0]=function(){return o.getCode&&o.getCode.apply(o,arguments)})},hn)])}n("ac1f"),n("841c"),n("e9c4"),n("5319");var jn={CLIENT_ID:"62488cca0e40def9fee1",CLIENT_SECRET:"e402afd20e646101e7c8f87f2ed62a71c4840256"},wn={name:"auth",components:{logo:ne},methods:{getCode:function(){var e="https://github.com/login/oauth/authorize",t=new URLSearchParams;t.append("client_id",jn.CLIENT_ID),t.append("scope","repo:status read:user"),window.location.href="".concat(e,"?").concat(t)}},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=new URLSearchParams(window.location.search).get("code"),!n){t.next=17;break}return t.prev=2,t.next=5,fetch("https://webdev-api.loftschool.com/github",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({clientId:jn.CLIENT_ID,code:n,clientSecret:jn.CLIENT_SECRET})});case 5:return r=t.sent,t.next=8,r.json();case 8:a=t.sent,c=a.token,localStorage.setItem("token",c),e.$router.replace({name:"feeds"}),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](2),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[2,14]])})))()}};n("8949");const kn=T()(wn,[["render",On],["__scopeId","data-v-23ec7b84"]]);var yn=kn,_n=[{name:"feeds",path:"/",component:wt},{name:"stories",path:"/stories",component:un},{name:"auth",path:"/auth",component:yn}],xn=Object(w["a"])({history:Object(w["b"])(),routes:_n});xn.beforeEach(function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t,n,r){var a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a="auth"===t.name,!a){e.next=4;break}return r(),e.abrupt("return");case 4:return e.prev=4,e.next=7,b();case 7:if(c=e.sent,401!==c.status){e.next=10;break}throw new Error;case 10:r(),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](4),r({name:"auth"});case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t,n,r){return e.apply(this,arguments)}}());var Rn=xn;function Sn(e,t,n,a,c,o){var i=Object(r["B"])("router-view");return Object(r["t"])(),Object(r["d"])(i)}var In={name:"App"};n("842e");const Bn=T()(In,[["render",Sn]]);var Ln=Bn,Cn=Object(r["c"])(Ln);Cn.use(j),Cn.use(Rn),Cn.mount("#app")},"635b":function(e,t,n){"use strict";n("caa7")},"7bed":function(e,t,n){"use strict";n("bfab")},"81ca":function(e,t,n){e.exports=n.p+"img/sign-out.6117be77.svg"},"842e":function(e,t,n){"use strict";n("9864")},"869b":function(e,t,n){},"86e6":function(e,t,n){e.exports=n.p+"img/home.f2c17fe3.svg"},8949:function(e,t,n){"use strict";n("3830")},9280:function(e,t,n){"use strict";n("356d")},9864:function(e,t,n){},"9d39":function(e,t,n){"use strict";n("ea7b")},a05a:function(e,t,n){"use strict";n("0110")},a73d:function(e,t,n){"use strict";n("ceeb")},aaa2:function(e,t,n){"use strict";n("5482")},aef9:function(e,t,n){"use strict";n("3645")},b0c1:function(e,t,n){"use strict";n("1b2e")},b4e8:function(e,t,n){},bfab:function(e,t,n){},c928:function(e,t,n){"use strict";n("32a3")},caa7:function(e,t,n){},cc4f:function(e,t,n){e.exports=n.p+"img/github-icon.9582a815.svg"},ceeb:function(e,t,n){},d0be:function(e,t,n){"use strict";n("b4e8")},e235:function(e,t,n){e.exports=n.p+"img/arrow-icon.6ada2e8c.svg"},e682:function(e,t,n){"use strict";n("f60b")},ea7b:function(e,t,n){},edab:function(e,t,n){},f60b:function(e,t,n){},fe76:function(e,t,n){}});
//# sourceMappingURL=app.5a9637ab.js.map