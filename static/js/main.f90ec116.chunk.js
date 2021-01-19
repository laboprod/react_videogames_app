(this.webpackJsonpreact_videogames_app=this.webpackJsonpreact_videogames_app||[]).push([[0],{73:function(t,n,e){"use strict";e.r(n);var a=e(1),r=e(0),c=e.n(r),i=e(22),o=e.n(i),s=e(5),d=e(13),m=e(4),u=e(16),l=e.n(u),b=e(21),g=e(17),p=e.n(g),j="https://api.rawg.io/api/",h=(new Date).getFullYear(),f=function(){var t=(new Date).getMonth()+1;return t<10?"0".concat(t):t}(),O=function(){var t=(new Date).getDate();return t<10?"0".concat(t):t}(),A="".concat(h,"-").concat(f,"-").concat(O),x="".concat(h-1,"-").concat(f,"-").concat(O),w="".concat(h+1,"-").concat(f,"-").concat(O),v="games?dates=".concat(x,",").concat(A,"&ordering=-rating&page_size=10"),y="games?dates=".concat(A,",").concat(w,"&ordering=-added&page_size=10"),E="games?dates=".concat(x,",").concat(A,"&ordering=-released&page_size=10"),k=function(t){return"".concat(j,"games/").concat(t,"/screenshots")},I=function(t){return"".concat(j,"games?search=").concat(t,"&page_size=9")},C=e(6),S=e(3),D=function(t,n){return t?t.match(/media\/screenshots/)?t.replace("media/screenshots","media/resize/".concat(n,"/-/screenshots")):t.replace("/media/games/","/media/resize/".concat(n,"/-/games/")):null},R={hidden:{opacity:0},show:{opacity:1,transition:{duration:.75},exit:{opacity:0,transition:{duration:.75}}}},U={hidden:{opacity:0,scale:.5},show:{opacity:1,scale:1,transition:{duration:.75},exit:{opacity:0,transition:{duration:.75}}}},G=e(18);function N(){var t=Object(s.a)(["\n\tmin-height: 30vh;\n\tbox-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);\n\ttext-align: center;\n\tborder-radius: 1rem;\n\tcursor: pointer;\n\toverflow: hidden;\n\timg {\n\t\twidth: 100%;\n\t\theight: 40vh;\n\t\tobject-fit: cover;\n\t}\n"]);return N=function(){return t},t}var T=Object(C.b)(S.c.div)(N()),z=function(t){var n=t.name,e=t.released,r=t.image,c=t.id,i=c.toString(),o=Object(d.b)();return Object(a.jsx)(T,{variants:U,initial:"hidden",animate:"show",layoutId:i,onClick:function(){document.body.style.overflow="hidden",o(function(t){return function(){var n=Object(b.a)(l.a.mark((function n(e){var a,r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"LOADING_DETAIL"}),n.next=3,p.a.get((c=t,"".concat(j,"games/").concat(c)));case 3:return a=n.sent,n.next=6,p.a.get(k(t));case 6:r=n.sent,e({type:"GET_DETAIL",payload:{game:a.data,screen:r.data}});case 8:case"end":return n.stop()}var c}),n)})));return function(t){return n.apply(this,arguments)}}()}(c))},children:Object(a.jsxs)(G.b,{to:"/game/".concat(c),children:[Object(a.jsx)(S.c.h3,{layoutId:"title ".concat(i),children:n}),Object(a.jsx)("p",{children:e}),Object(a.jsx)(S.c.img,{layoutId:"image ".concat(i),src:D(r,640),alt:n})]})})},B=e.p+"static/media/playstation.18cc4b9c.svg",L=e.p+"static/media/steam.d7b8819f.svg",_=e.p+"static/media/xbox.3e7db735.svg",H=e.p+"static/media/nintendo.f579be04.svg",X=e.p+"static/media/apple.5757c37e.svg",F=e.p+"static/media/gamepad.c9269ef5.svg";function P(){var t=Object(s.a)(["\n\tmargin: 5rem 0rem;\n\n\t@media (max-width: 670px) {\n\t\tmargin: 1rem 0;\n\t}\n"]);return P=function(){return t},t}function Z(){var t=Object(s.a)(["\n\tmargin-top: 5rem;\n\n\timg {\n\t\twidth: 100%;\n\t}\n\n\t@media (max-width: 670px) {\n\t\tmargin-top: 1rem;\n\t}\n"]);return Z=function(){return t},t}function M(){var t=Object(s.a)(["\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\n\timg {\n\t\tmargin-left: 3rem;\n\t}\n\n\t@media (max-width: 670px) {\n\t\timg {\n\t\t\tmargin-left: 0.5rem;\n\t\t\tmargin-right: 0.5rem;\n\t\t\tmargin-top: 0.75rem;\n\t\t}\n\t}\n"]);return M=function(){return t},t}function V(){var t=Object(s.a)(["\n\ttext-align: center;\n\n\t@media (max-width: 670px) {\n\t\tposition: absolute;\n\t\ttop: 1rem;\n\t\tright: 1rem;\n\t\th3 {\n\t\t\tpadding: 0.5rem;\n\t\t}\n\t}\n"]);return V=function(){return t},t}function J(){var t=Object(s.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\n\timg {\n\t\twidth: 1.5rem;\n\t\theight: 1.5rem;\n\t\tdisplay: inline-block;\n\t}\n\n\t@media (max-width: 670px) {\n\t\th3 {\n\t\t\tdisplay: inline;\n\t\t}\n\t\timg {\n\t\t\twidth: 1rem;\n\t\t\theight: 1rem;\n\t\t}\n\t\t.rating {\n\t\t\tmax-width: 10rem;\n\t\t}\n\t}\n"]);return J=function(){return t},t}function W(){var t=Object(s.a)(["\n\twidth: 80%;\n\tborder-radius: 1rem;\n\tpadding: 2rem 5rem;\n\tbackground: white;\n\tposition: absolute;\n\tleft: 10%;\n\tcolor: black;\n\n\timg {\n\t\twidth: 100%;\n\t}\n\n\t@media (max-width: 670px) {\n\t\tpadding: 1rem 0.5rem;\n\t}\n"]);return W=function(){return t},t}function Q(){var t=Object(s.a)(["\n\twidth: 100%;\n\tmin-height: 100vh;\n\toverflow-y: scroll;\n\tbackground: rgba(0, 0, 0, 0.5);\n\tposition: fixed;\n\tz-index: 10;\n\ttop: 0;\n\tleft: 0;\n\n\t&::-webkit-scrollbar {\n\t\twidth: 0.5rem;\n\t}\n\n\t&::-webkit-scrollbar-thumb {\n\t\tbackground-color: #ff7676;\n\t}\n\n\t&::-webkit-scrollbar-track {\n\t\tbackground: white;\n\t}\n"]);return Q=function(){return t},t}var Y=Object(C.b)(S.c.div)(Q()),K=Object(C.b)(S.c.div)(W()),q=Object(C.b)(S.c.div)(J()),$=Object(C.b)(S.c.div)(V()),tt=Object(C.b)(S.c.div)(M()),nt=Object(C.b)(S.c.div)(Z()),et=Object(C.b)(S.c.div)(P()),at=function(t){var n=t.pathId,e=Object(m.e)(),r=function(t){switch(t){case"PlayStation 4":case"PlayStation 5":return B;case"Xbox One":case"Xbox Series S/X":case"Xbox S":return _;case"PC":return L;case"Nintendo Switch":return H;case"iOS":return X;default:return F}},c=Object(d.c)((function(t){return t.detail})),i=c.screen,o=c.game,s=c.isLoading;return Object(a.jsx)(a.Fragment,{children:!s&&Object(a.jsx)(Y,{className:"shadow",onClick:function(t){t.target.classList.contains("shadow")&&(document.body.style.overflow="auto",e.push("/"))},children:Object(a.jsxs)(K,{layoutId:n,children:[Object(a.jsxs)(q,{children:[Object(a.jsxs)("div",{className:"rating",children:[Object(a.jsx)(S.c.h3,{layoutId:"title ".concat(n),children:o.name}),Object(a.jsxs)("p",{children:["Rating: ",o.rating]}),function(){for(var t=[],n=Math.round(o.rating),e=1;e<=5;e++)e<=n?t.push(Object(a.jsx)("img",{alt:"star",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgBtZbbbcIwFIZ/o4pnNqiZAEbICO0EpRM0ErcHHkgfIaCGDWCStiN0A0bgmUDc4yQkAYziEyWfZCW2bH858RWogHLdDpi0wESNxwO02x9gwhZBiDmUcsGEJYqjASTJOmoyeeO05UWko8nxwMBalEWTIzlR2Ud0Hc0F67GyEhmiudBXw6EDC0RZBTWdSppl3w9EVEH9IAxfRRAcUCZKO+uj1eoginp6VsX5pHPbxalF+ywJoZ9/+l0sFnuhRqM5CTw0SRR5SURNyrRktfrMxqgRWSrRr1eToVZZQXInqk12IzGKUplLsi9U4XweiPV6d1tsXLD0NQE9AvAJTJKHohQJLnr9PaBeUbLI2aI++CIJjog2Ub5Eow/E2ezZWkQNJMzs6asdSu9I9rR7wtAxFT/BTO8mf6DOPeH7mzT/S2kbHx/JOSULdfXfsJve1NjJBLT4cDx2C5K8mu9vxXLZjevkEUpTl+aIokgPrIfTaVN2zsRC2gXorrdLr2EvsKXKBbHQVprK/wF34p3gYzo6rAAAAABJRU5ErkJggg=="},e)):t.push(Object(a.jsx)("img",{alt:"star",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG/SURBVHgBtZZLbsIwEIYnD7HODWpOAEIsukJZdtkbNEWAkFi0NwCW3ZUdAkTDEXoEdtmA1BvkCHQXiVdnaFK5wQFPRH7Jsj3E83lsjzFADnme5wBTJjDVbrc927ZfgCk2yDCMPpZXYIoFomiOx6PAptPpdJ44Y1kgikbqDoAhbZAUzUnU5kSlDUpFk8C090oLlI5GUrXVarmgIevaB91uV2D1gSUrd0Sj0fgMgiC65MdInG232yrO2sEcqVBNsyUnFwBpbbCEODY0TfNUY/lCf+F4PA4N3NA+GgZQoMi/tVqtlvV6nfouFCCCzGaz4WmPioIlEGr/HYZbw2TIP9AtYWnIGSiB1Wq1b0zQB8ghHOdNp9NR2q7Mo/V6HWBkdKzvgQd5n0wmb6rfLt0MApiK8w9YoIwr5xqoygbB783AEi6dAA4IL1E2JJbT6/XutEGHw0GAWiEWd7/fP8ftM0VR5KrstsqIS1CR+7j2G7QNpGO7xOI3m03Psiz6nxLJt9in1VikfZoZIDcBUPLtdruyKjfm87mP9jJNAuIIs1ZDGVEMIcDI9/0NXBHmzhDfeotSqUTPsEfQVZ4HojRWqOw/3aTMvdEfx5AAAAAASUVORK5CYII="},e));return t}()]}),Object(a.jsxs)($,{children:[Object(a.jsx)("h3",{children:"Platforms"}),Object(a.jsx)(tt,{children:o.platforms.map((function(t){return Object(a.jsx)("img",{src:r(t.platform.name),alt:t.platform.name},t.platform.id)}))})]})]}),Object(a.jsx)(nt,{children:Object(a.jsx)(S.c.img,{layoutId:"image ".concat(n),src:D(o.background_image,1280),alt:o.background_image})}),Object(a.jsx)(et,{children:Object(a.jsx)("p",{children:o.description_raw})}),Object(a.jsx)("div",{className:"gallery",children:i.results.map((function(t){return Object(a.jsx)("img",{src:D(t.image,1280),alt:t.image},t.id)}))})]})})})};function rt(){var t=Object(s.a)(["\n\tmin-height: 80vh;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n\tgrid-column-gap: 3rem;\n\tgrid-row-gap: 5rem;\n"]);return rt=function(){return t},t}function ct(){var t=Object(s.a)(["\n\tpadding: 0rem 5rem;\n\th2 {\n\t\tpadding: 5rem 0rem;\n\t}\n\n\t@media (max-width: 670px) {\n\t\th2 {\n\t\t\tpadding: 1.5rem;\n\t\t\tjustify-content: center;\n\t\t\ttext-align: center;\n\t\t}\n\t}\n"]);return ct=function(){return t},t}var it=Object(C.b)(S.c.div)(ct()),ot=Object(C.b)(S.c.div)(rt()),st=function(){var t=Object(m.f)().pathname.split("/")[2],n=Object(d.b)();Object(r.useEffect)((function(){n(function(){var t=Object(b.a)(l.a.mark((function t(n){var e,a,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("".concat(j).concat(v));case 2:return e=t.sent,t.next=5,p.a.get("".concat(j).concat(y));case 5:return a=t.sent,t.next=8,p.a.get("".concat(j).concat(E));case 8:r=t.sent,n({type:"FETCH_GAMES",payload:{popular:e.data.results,upcoming:a.data.results,newGames:r.data.results}});case 10:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}())}),[n]);var e=Object(d.c)((function(t){return t.games})),c=e.popular,i=e.newGames,o=e.upcoming,s=e.searched;return Object(a.jsx)(it,{variants:R,initial:"hidden",animate:"show",children:Object(a.jsxs)(S.b,{type:"crossfade",children:[Object(a.jsx)(S.a,{children:t&&Object(a.jsx)(at,{pathId:t})}),s.length?Object(a.jsxs)("div",{className:"searched",children:[Object(a.jsx)("h2",{children:"Searched Games"}),Object(a.jsx)(ot,{children:s.map((function(t){return Object(a.jsx)(z,{name:t.name,released:t.released,id:t.id,image:t.background_image},t.id)}))})]}):"",Object(a.jsx)("h2",{children:"Upcoming Games"}),Object(a.jsx)(ot,{children:o.map((function(t){return Object(a.jsx)(z,{name:t.name,released:t.released,id:t.id,image:t.background_image},t.id)}))}),Object(a.jsx)("h2",{children:"Popular Games"}),Object(a.jsx)(ot,{children:c.map((function(t){return Object(a.jsx)(z,{name:t.name,released:t.released,id:t.id,image:t.background_image},t.id)}))}),Object(a.jsx)("h2",{children:"New Games"}),Object(a.jsx)(ot,{children:i.map((function(t){return Object(a.jsx)(z,{name:t.name,released:t.released,id:t.id,image:t.background_image},t.id)}))})]})})};function dt(){var t=Object(s.a)(["\n    *{\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n\n    html{\n        &::-webkit-scrollbar {\n            width: 0.5rem;\n        }\n        &::-webkit-scrollbar-thumb {\n            background-color: darkgrey;\n        }\n        &::-webkit-scrollbar-track {\n            background: white;\n        }\n    }\n\n    body{\n        font-family: 'Montserrat', sans-serif;\n        width: 100%\n    }\n\n    h2{\n        font-size: 3rem;\n        font-family: 'Abril Fatface', cursive;\n        font-weight: lighter;\n        color: #333;\n\n        @media (max-width: 400px) {\n            padding:1rem;\n            font-size: 2rem;\n        }\n    }\n\n    h3{\n        font-size: 1.3rem;\n        color: #333;\n        padding: 1.5rem 0rem;\n    }\n\n    p{\n        font-size: 1.2rem;\n        line-height: 200%;\n        color: #696969;\n    }\n\n    a{\n        text-decoration: none;\n        color: #333;\n    }\n\n    img {\n        display: block;\n    }\n\n    input {\n        font-weight: bold;\n        font-family: 'Montserrat', sans-serif;\n    }\n"]);return dt=function(){return t},t}var mt=Object(C.a)(dt()),ut=e(44),lt=e.p+"static/media/logo.9b6b8655.svg";function bt(){var t=Object(s.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\tpadding: 1rem;\n\tcursor: pointer;\n\n\timg {\n\t\twidth: 2rem;\n\t\theight: 2rem;\n\t}\n\n\t@media (max-width: 670px) {\n\t\tpadding: 0.5rem;\n\t}\n"]);return bt=function(){return t},t}function gt(){var t=Object(s.a)(["\n\tpadding: 3rem 5rem;\n\ttext-align: center;\n\n\tinput {\n\t\twidth: 30%;\n\t\tfont-size: 1.5rem;\n\t\tpadding: 0.5rem;\n\t\tborder: none;\n\t\toutline: none;\n\t\tmargin-top: 1rem;\n\t\tbox-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);\n\t}\n\n\tbutton {\n\t\tfont-size: 1.5rem;\n\t\tborder: none;\n\t\tpadding: 0.5rem 2rem;\n\t\tcursor: pointer;\n\t\tbackground: #ff7676;\n\t\tcolor: white;\n\t}\n\n\t@media (max-width: 670px) {\n\t\tpadding: 0.5rem 0.5rem;\n\t\tinput {\n\t\t\twidth: 50%;\n\t\t\tfont-size: 1rem;\n\t\t}\n\t\tbutton {\n\t\t\tfont-size: 1rem;\n\t\t}\n\t}\n"]);return gt=function(){return t},t}var pt=Object(C.b)(S.c.div)(gt()),jt=Object(C.b)(S.c.div)(bt()),ht=function(){var t=Object(d.b)(),n=Object(r.useState)(""),e=Object(ut.a)(n,2),c=e[0],i=e[1];return Object(a.jsxs)(pt,{variants:R,initial:"hidden",animate:"show",children:[Object(a.jsxs)(jt,{onClick:function(){t({type:"CLEAR_SEARCHED"})},children:[Object(a.jsx)("img",{src:lt,alt:"logo"}),Object(a.jsx)("h1",{children:"React Gaming"})]}),Object(a.jsxs)("form",{className:"search",children:[Object(a.jsx)("input",{value:c,onChange:function(t){i(t.target.value)},type:"text"}),Object(a.jsx)("button",{onClick:function(n){var e;n.preventDefault(),t((e=c,function(){var t=Object(b.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get(I(e));case 2:a=t.sent,n({type:"FETCH_SEARCHED",payload:{searched:a.data.results}});case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}())),i("")},type:"submit",children:"Search"})]})]})};var ft=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(mt,{}),Object(a.jsx)(ht,{}),Object(a.jsx)(m.a,{path:["/game/:id","/"],children:Object(a.jsx)(st,{})})]})},Ot=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,74)).then((function(n){var e=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;e(t),a(t),r(t),c(t),i(t)}))},At=e(15),xt=e(8),wt={popular:[],newGames:[],upcoming:[],searched:[]},vt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_GAMES":return Object(xt.a)(Object(xt.a)({},t),{},{popular:n.payload.popular,upcoming:n.payload.upcoming,newGames:n.payload.newGames});case"FETCH_SEARCHED":return Object(xt.a)(Object(xt.a)({},t),{},{searched:n.payload.searched});case"CLEAR_SEARCHED":return Object(xt.a)(Object(xt.a)({},t),{},{searched:[]});default:return Object(xt.a)({},t)}},yt={game:{platforms:[]},screen:{results:[]},isLoading:!0},Et=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_DETAIL":return Object(xt.a)(Object(xt.a)({},t),{},{game:n.payload.game,screen:n.payload.screen,isLoading:!1});case"LOADING_DETAIL":return Object(xt.a)(Object(xt.a)({},t),{},{isLoading:!0});default:return Object(xt.a)({},t)}},kt=Object(At.c)({games:vt,detail:Et}),It=e(43),Ct=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||At.d,St=Object(At.e)(kt,Ct(Object(At.a)(It.a)));o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(d.a,{store:St,children:Object(a.jsx)(G.a,{children:Object(a.jsx)(ft,{})})})}),document.getElementById("root")),Ot()}},[[73,1,2]]]);
//# sourceMappingURL=main.f90ec116.chunk.js.map