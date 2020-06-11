(this.webpackJsonpcasset=this.webpackJsonpcasset||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),i=a.n(c),l=(a(55),a(12)),s=a(2),u=a(4),o=a(14);var m=function(e){return e.loading?r.a.createElement("div",{className:"loading"},r.a.createElement("div",{className:"lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))):e.children},d=function(e){return{type:"SET_MUSIC",payload:e}},p=function(e){return{type:"SET_PLAYLIST",payload:e}},f=function(e){return{type:"SET_INITIALIZED",payload:e}};var E=Object(u.b)((function(e){return{currentMusic:e.playerReducer.music,isPlaying:e.playerReducer.isPlaying}}),(function(e){return{setMusic:function(t){return e(d(t))},togglePlay:function(){return e({type:"TOGGLE_PLAY"})},setInitialized:function(){return e(f(!0))}}}))((function(e){var t=e.music,a=e.currentMusic,n=e.setMusic,c=e.togglePlay,i=e.isPlaying,l=e.setInitialized;return r.a.createElement("div",{className:"music-wrapper",onClick:function(){return e.setCurrentPlaylist(),a.id===t.id?c():(l(),n(t))}},r.a.createElement("div",{className:"music-wrapper__image"},a.id===t.id?r.a.createElement("div",{className:"music-wrapper__image__overlay"},r.a.createElement("i",{className:"fal "+(i?"fa-pause":"fa-play")})):"",r.a.createElement("img",{src:t.cover,alt:t.title})),r.a.createElement("div",{className:"music-wrapper__body"},r.a.createElement("strong",null,t.name),r.a.createElement("small",null,t.artists.length>1?t.artists.map((function(e,a){return e.name+(a!==t.artists.length-1?", ":"")})):t.artists[0].name)))}));var g=Object(u.b)(null,(function(e){return{setCurrentPlaylist:function(t){return e(p(t))}}}))((function(e){var t=e.musics,a=e.loading,n=e.title,c=e.setCurrentPlaylist,i=function(){c(t.reduce((function(e,t){return e.find((function(e){return e.id===t.id}))?e:[].concat(Object(o.a)(e),[t])}),[]))};return r.a.createElement(m,{loading:a},r.a.createElement("h2",{className:"section-title"},n),r.a.createElement("div",{className:"musics-container"},r.a.createElement("div",{className:"musics-container__inner"},t.map((function(e,t){return r.a.createElement(E,{setCurrentPlaylist:i,key:t,music:e})})))))})),y=a(29),b=a.n(y);a(36),a(37);var v=Object(s.g)((function(e){var t=e.playlist;return r.a.createElement("div",{className:"music-wrapper playlist-wrapper",onClick:function(){return e.history.push("/playlist/".concat(t.id))}},r.a.createElement("div",{className:"music-wrapper__image playlist-wrapper__image"},r.a.createElement("img",{src:t.image,alt:t.name})),r.a.createElement("div",{className:"music-wrapper__body playlist-wrapper__body"},r.a.createElement("strong",null,t.name)))}));var h=function(e){var t=e.playlists,a={dots:!1,infinite:!1,speed:250,slidesToScroll:1,variableWidth:!0};return r.a.createElement("div",{className:"musics-container playlists-container"+(e.noSlide?" no-slide":"")},e.noSlide?t.map((function(e,t){return r.a.createElement("div",{key:t,className:"slick-item-outer"},r.a.createElement(v,{playlist:e}))})):r.a.createElement(b.a,a,t.map((function(e,t){return r.a.createElement("div",{key:t,className:"slick-item-outer"},r.a.createElement(v,{playlist:e}))}))))};var _=Object(s.g)((function(e){var t=e.artist;return r.a.createElement("div",{className:"artist-wrapper",onClick:function(){return e.history.push("/artist/".concat(t.id))}},r.a.createElement("div",{className:"artist-wrapper__image"},r.a.createElement("img",{src:t.image,alt:t.name})),r.a.createElement("div",{className:"artist-wrapper__body"},r.a.createElement("strong",null,t.name)))}));var O=function(e){var t=e.artists,a={dots:!1,infinite:!1,speed:250,slidesToScroll:1,variableWidth:!0};return r.a.createElement("div",{className:"musics-container artists-container"+(e.noSlide?" no-slide":"")},e.noSlide?t.map((function(e,t){return r.a.createElement("div",{key:t,className:"slick-item-outer"},r.a.createElement(_,{artist:e}))})):r.a.createElement(b.a,a,t.map((function(e,t){return r.a.createElement("div",{key:t,className:"slick-item-outer"},r.a.createElement(_,{artist:e}))}))))};var j=function(e){var t=e.data,a=t.name,n=t.type,c=t.data;return r.a.createElement("div",{className:"vitrine-wrapper"+(e.hero?" hero-wrapper":"")},"ad"!==n?r.a.createElement("h2",{className:"section-title vitrine-title"},a):"",{musics:r.a.createElement(g,{musics:c,loading:!1}),artists:r.a.createElement(O,{artists:c}),grid:r.a.createElement(g,{musics:c,loading:!1}),playlists:r.a.createElement(h,{playlists:c,loading:!1}),hero_sliders:r.a.createElement(h,{playlists:c,loading:!1}),genres:r.a.createElement(h,{playlists:c,loading:!1}),albums:r.a.createElement(h,{playlists:c,loading:!1})}[n])},N=a(5),S=a.n(N),C=a(11),T=a(20),I=a.n(T),P="https://cassetmusic.com/api/v1",k=function(e,t){return t(e.data)},w=function(e,t){return e.response&&t(e.response.data),console.error(e)},F={getMusics:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"us";return new Promise((function(t){I()({url:"".concat(P,"/musics?region=").concat(e),method:"GET"}).then((function(e){return k(e,t)})).catch((function(e){return w(e,t)}))}))},getPlaylistsVitrines:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"us",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return new Promise((function(a){I()({url:"".concat(P,"/playlists/vitrines?count=").concat(t,"&region=").concat(e),method:"GET"}).then((function(e){return k(e,a)})).catch((function(e){return w(e,a)}))}))},getPlaylistById:function(e){return new Promise((function(t){I()({url:"".concat(P,"/playlist?id=").concat(e),method:"GET"}).then((function(e){return k(e,t)})).catch((function(e){return w(e,t)}))}))},getSearch:function(e){return new Promise((function(t){I()({url:"".concat(P,"/search?name=").concat(e),method:"GET"}).then((function(e){return k(e,t)})).catch((function(e){return w(e,t)}))}))},getArtist:function(e){return new Promise((function(t){I()({url:"".concat(P,"/artist?id=").concat(e),method:"GET"}).then((function(e){return k(e,t)})).catch((function(e){return w(e,t)}))}))}};var R=Object(u.b)((function(e){return{homeState:e.homeReducer}}),(function(e){return{fetchMusicsFind:function(t){return e(function(e){return function(){var t=Object(C.a)(S.a.mark((function t(a,n){var r,c;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"FETCH_MUSICS_FIND",region:e}),t.next=3,F.getMusics("global"===e?"us":"ir");case 3:if(!(r=t.sent).success){t.next=10;break}return c=r.data,n().playerReducer.music.id||(a(d(c[0])),a(p(c)),a({type:"TOGGLE_PLAY"})),t.abrupt("return",a({payload:c,type:"FETCH_MUSICS_FIND_SUCCESS",region:e}));case 10:return t.abrupt("return",a({type:"FETCH_MUSICS_FIND_FAILED",region:e}));case 11:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(t))},fetchVitrines:function(t){return e(function(e){return function(){var t=Object(C.a)(S.a.mark((function t(a){var n,r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"FETCH_VITRINES",region:e}),t.next=3,F.getPlaylistsVitrines("global"===e?"us":"ir");case 3:if(!(n=t.sent).success){t.next=9;break}return r=n.data,t.abrupt("return",a({payload:r,type:"FETCH_VITRINES_SUCCESS",region:e}));case 9:return t.abrupt("return",a({type:"FETCH_VITRINES_FAILED",region:e}));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(Object(s.g)((function(e){var t=e.homeState,a=e.fetchMusicsFind,c=e.fetchVitrines,i=e.match.params.region||"global";return Object(n.useEffect)((function(){t[i].musicsFind.data.length||a(i),t[i].vitrines.data.length||c(i)}),[]),r.a.createElement("main",{className:"container"},r.a.createElement(g,{title:"Discover New Music",musics:t[i].musicsFind.data,loading:t[i].musicsFind.loading}),t[i].vitrines.loading?r.a.createElement(m,{loading:!0}):t[i].vitrines.data.map((function(e,t){return"hero_sliders"===e.type?r.a.createElement(j,{hero:!0,key:t,data:e}):r.a.createElement(j,{key:t,data:e})})))}))),x=a(1),L=a(13);var M=Object(u.b)((function(e){return{currentMusic:e.playerReducer.music,isPlaying:e.playerReducer.isPlaying}}),(function(e){return{setMusic:function(t){return e(d(t))},togglePlay:function(){return e({type:"TOGGLE_PLAY"})},setInitialized:function(){return e(f(!0))}}}))((function(e){var t=e.music,a=e.currentMusic,n=e.setMusic,c=e.togglePlay,i=e.isPlaying,l=e.setInitialized;return r.a.createElement("div",{className:"track"+(a.id===t.id?" active":""),onClick:function(){return e.setCurrentPlaylist(),a.id===t.id?c():(l(),n(t))}},r.a.createElement("div",{className:"track__image"},r.a.createElement("img",{src:t.thumbnail&&t.thumbnail.length?t.thumbnail:t.cover,alt:t.name})),r.a.createElement("div",{className:"track__body"},r.a.createElement("div",{className:"d-flex align-items-center justify-content-start"},r.a.createElement("h2",null,t.name),r.a.createElement("h3",null,t.artists.map((function(e,a){return e.name+(a!==t.artists.length-1?", ":"")})))),r.a.createElement("div",{className:"d-flex align-items-center justify-content-end"},r.a.createElement("b",{className:"play-count"},t.play_count||"-"," ",r.a.createElement("small",null,"plays")),a.id===t.id&&i?r.a.createElement("i",{className:"fal fa-pause"}):r.a.createElement("i",{className:"fal fa-play"}))))}));var U=Object(u.b)(null,(function(e){return{setCurrentPlaylist:function(t){return e(p(t))}}}))(Object(s.g)((function(e){var t=e.setCurrentPlaylist,a=Object(n.useState)(e.match.params.id),c=Object(L.a)(a,1)[0],i=Object(n.useState)({data:{},loading:!0}),l=Object(L.a)(i,2),s=l[0],u=l[1],d=function(){var t=Object(C.a)(S.a.mark((function t(){var a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(Object(x.a)(Object(x.a)({},s),{},{loading:!0})),t.next=3,F.getPlaylistById(c);case 3:(a=t.sent).success?a.data.musics?u({data:Object(x.a)(Object(x.a)({},a.data),{},{musics:a.data.musics.reduce((function(e,t){return e.find((function(e){return e.id===t.id}))?e:[].concat(Object(o.a)(e),[t])}),[])}),loading:!1}):u({data:a.data,loading:!1}):e.history.replace("/");case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){t(s.data.musics.reduce((function(e,t){return e.find((function(e){return e.id===t.id}))?e:[].concat(Object(o.a)(e),[t])}),[]))};return Object(n.useEffect)((function(){c&&d()}),[]),r.a.createElement("main",{className:"container"},s.loading?r.a.createElement(m,{loading:s.loading}):s.data.musics?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-flex align-items-center justify-content-center flex-column"},r.a.createElement("div",{className:"circle-image"},r.a.createElement("img",{src:s.data.playlist.image,alt:s.data.playlist.name})),r.a.createElement("h1",null,s.data.playlist.name),r.a.createElement("small",{className:"playlist-artists mt-5"},s.data.artists.map((function(e,t){return e.name+(t!==s.data.artists.length-1?", ":"")}))),r.a.createElement("div",{className:"tags-wrapper"},s.data.categories.map((function(e,t){return r.a.createElement("span",{key:t,className:"tag"},e.name)})))),r.a.createElement("div",{className:"tracks-wrapper"},s.data.musics.map((function(e,t){return r.a.createElement(M,{setCurrentPlaylist:p,music:e,key:t})})))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"section-title"},"Playlists"),r.a.createElement(h,{playlists:s.data})))})));var A=Object(s.g)((function(e){var t=e.match.params.id,a=Object(n.useState)({data:{},loading:!0}),c=Object(L.a)(a,2),i=c[0],l=c[1],s=function(){var a=Object(C.a)(S.a.mark((function a(){var n;return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return l(Object(x.a)(Object(x.a)({},i),{},{loading:!0})),a.next=3,F.getPlaylistById(t);case 3:(n=a.sent).success?l(n.data):e.history.replace("/");case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(n.useEffect)((function(){t&&s()}),[]),r.a.createElement("main",{className:"container"},r.a.createElement(h,{playlists:i.data,loading:!1}))}));var D=function(e){var t=e.album;return r.a.createElement("div",{className:"music-wrapper"},r.a.createElement("div",{className:"music-wrapper__image"},r.a.createElement("img",{src:t.image,alt:t.title})),r.a.createElement("div",{className:"music-wrapper__body"},r.a.createElement("strong",null,t.name),r.a.createElement("small",null,t.artists.length>1?t.artists.map((function(e,a){return e.name+(a!==t.artists.length-1?", ":"")})):t.artists[0].name)))};var H=function(e){var t=e.albums;return r.a.createElement("div",{className:"musics-container"},r.a.createElement("div",{className:"musics-container__inner"},t.map((function(e,t){return r.a.createElement(D,{key:t,album:e})}))))};var G=[{routeName:"home",component:R,exact:!0,path:"/"},{routeName:"playlist",component:U,exact:!0,path:"/playlist/:id"},{routeName:"playlists",component:A,exact:!0,path:"/playlists/:id"},{routeName:"search",component:Object(u.b)((function(e){return{result:e.searchReducer.result,loading:e.searchReducer.loading}}),(function(e){return{fetchResult:function(t){return e(function(e){return function(){var t=Object(C.a)(S.a.mark((function t(a){var n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"FETCH_RESULT"}),t.next=3,F.getSearch(e).catch((function(e){return a({type:"FETCH_RESULT_FAILED"})}));case 3:(n=t.sent).success?a({type:"FETCH_RESULT_SUCCESS",payload:n.data}):a({type:"FETCH_RESULT_FAILED"});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(Object(s.g)((function(e){var t=e.match.params.query,a=e.fetchResult,c=e.result,i=e.loading;return Object(n.useEffect)((function(){a(t)}),[]),r.a.createElement("main",{className:"container"},i?r.a.createElement(m,{loading:!0}):c?r.a.createElement("div",{className:"search-columns"},Object.keys(c).map((function(e){return"clients"!==e&&c[e].length?r.a.createElement("section",{key:e},r.a.createElement("h2",{className:"section-title"},e.substring(0,1).toUpperCase()+e.substring(1,e.length)),{artists:r.a.createElement(O,{noSlide:!0,artists:c[e]}),musics:r.a.createElement(g,{musics:c[e]}),albums:r.a.createElement(H,{albums:c[e]}),playlists:r.a.createElement(h,{noSlide:!0,playlists:c[e]})}[e]):""}))):"")}))),exact:!0,path:"/search/:query"},{routeName:"region",component:R,exact:!0,path:"/region/:region"},{routeName:"artist",component:Object(u.b)(null,(function(e){return{setCurrentPlaylist:function(t){return e(p(t))}}}))(Object(s.g)((function(e){var t=e.setCurrentPlaylist,a=e.match.params.id,c=Object(n.useState)({data:{},loading:!0}),i=Object(L.a)(c,2),l=i[0],s=i[1],u=function(){var t=Object(C.a)(S.a.mark((function t(){var n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(Object(x.a)(Object(x.a)({},l),{},{loading:!0})),t.next=3,F.getArtist(a);case 3:(n=t.sent).success?s({data:n.data,loading:!1}):e.history.replace("/");case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){t([].concat(Object(o.a)(l.data.top_songs),Object(o.a)(l.data.last_songs)).reduce((function(e,t){return e.find((function(e){return e.id===t.id}))?e:[].concat(Object(o.a)(e),[t])}),[]))};return Object(n.useEffect)((function(){a&&u()}),[]),r.a.createElement("main",{className:"container artist-page"},l.loading?r.a.createElement(m,{loading:l.loading}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-flex align-items-center justify-content-center flex-column"},r.a.createElement("div",{className:"circle-image"},r.a.createElement("img",{src:l.data.artist.image,alt:l.data.artist.name})),r.a.createElement("h1",null,l.data.artist.name)),l.data.top_songs.length?r.a.createElement("section",null,r.a.createElement("h2",{className:"section-title"},"Top Songs"),r.a.createElement(g,{musics:l.data.top_songs})):"",l.data.last_songs.length?r.a.createElement("section",null,r.a.createElement("h2",{className:"section-title"},"Latest Songs"),l.data.last_songs.map((function(e,t){return r.a.createElement(M,{setCurrentPlaylist:d,music:e,key:t})}))):"",l.data.playlists.length?r.a.createElement("section",null,r.a.createElement("h2",{className:"section-title"},"Playlists"),r.a.createElement(h,{playlists:l.data.playlists})):"",l.data.albums.length?r.a.createElement("section",null,r.a.createElement("h2",{className:"section-title"},"Albums"),r.a.createElement(h,{playlists:l.data.albums})):"",l.data.related_artist.length?r.a.createElement("section",null,r.a.createElement("h2",{className:"section-title"},"Related Artists"),r.a.createElement(O,{artists:l.data.related_artist})):""))}))),exact:!0,path:"/artist/:id"}],z=a(47),V=a.n(z);var Y=Object(s.g)((function(e){var t=Object(s.f)(e.location.pathname,{path:"/search/:query"}),a=Object(n.useState)(t?t.params.query:""),c=Object(L.a)(a,2),i=c[0],u=c[1],o=Object(n.useRef)();return r.a.createElement("header",null,r.a.createElement("div",{className:"container d-flex align-items-center justify-content-start"},r.a.createElement(l.b,{to:"/",title:"Casset, Latest and Trend Musics",target:"_self"},r.a.createElement("img",{src:V.a,alt:"Casset"})),r.a.createElement("small",null,"Enjoy music without borders!"),r.a.createElement("div",{className:"search-wrapper"},r.a.createElement("input",{type:"text",placeholder:"Looking for something?",onChange:function(t){return function(t){u(t),o.current&&clearTimeout(o.current),o.current=setTimeout((function(){e.history.push("/search/".concat(t))}),500)}(t.target.value)},value:i}),r.a.createElement("i",{className:"fal fa-search"}))))})),q=a(48);var B=Object(u.b)((function(e){return{currentMusic:e.playerReducer.music,isPlaying:e.playerReducer.isPlaying,currentPos:e.playerReducer.currentPos,duration:e.playerReducer.duration,playlist:e.playerReducer.playlist,initialized:e.playerReducer.initialized}}),(function(e){return{togglePlay:function(){return e({type:"TOGGLE_PLAY"})},setPos:function(t){return e({type:"SET_POS",payload:t})},setDuration:function(t){return e({type:"SET_DURATION",payload:t})},setCurrentMusic:function(t){return e(d(t))},setInitialized:function(){return e(f(!0))}}}))((function(e){var t=e.currentMusic,a=e.initialized,c=e.isPlaying,i=e.currentPos,l=e.togglePlay,s=e.setPos,u=e.setDuration,o=e.duration,m=e.playlist,d=e.setCurrentMusic,p=e.setInitialized,f=Object(n.useRef)(new Audio),E=Object(n.useRef)();f.current.onended=function(){g()};var g=function(){var e,a=m.findIndex((function(e){return e.id===t.id}));a+1!==m.length?(e=m[a+1],d(e)):(e=m[0],d(e))},y=function(){f.current.src=t.link320||t.link128||t.link64,f.current.onloadedmetadata=function(){u(f.current.duration)},a&&(f.current.play().catch((function(){return f.current.play()})),c||l())};return Object(n.useEffect)((function(){(t.link320||t.link128||t.link64)&&y()}),[t]),Object(n.useEffect)((function(){c?(E.current=setInterval((function(){s(f.current.currentTime)}),500),f.current.play()):(clearInterval(E.current),E.current=null,f.current.pause())}),[c]),r.a.createElement("div",{className:"player-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"player-inner"},r.a.createElement("div",{className:"player-inner__left"},r.a.createElement("div",{className:"player-inner__left__cover"},t.id?r.a.createElement("img",{src:t.cover||"",alt:t.name||"-"}):"")),r.a.createElement("div",{className:"player-inner__center"},r.a.createElement("div",{className:"player-inner__center__details"},t.id?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("strong",null,t.name||"-"),r.a.createElement("small",null,t.artists.length?t.artists.length>1?t.artists.map((function(e,a){return e.name+(a!==t.artists.length-1?", ":"")})):t.artists[0].name:"")),r.a.createElement("div",null,r.a.createElement("b",null,parseInt(i/60),":",i%60<10?"0"+parseInt(i%60):parseInt(i%60)),r.a.createElement("small",null,"/",parseInt(o/60),":",o%60<10?"0"+parseInt(o%60):parseInt(o%60)))):r.a.createElement(r.a.Fragment,null,r.a.createElement("strong",null,"Start Playing Something..."),r.a.createElement("div",null,r.a.createElement("b",null,"-")))),r.a.createElement(q.a,{className:"player-inner__center__seekbar",thumbClassName:"player-inner__center__seekbar__filled__thumb",trackClassName:"player-inner__center__seekbar__filled",renderThumb:function(e){return r.a.createElement("div",e)},onChange:function(e){return s(t=e),void(f.current.currentTime=t);var t},min:0,value:i,max:o||100})),r.a.createElement("div",{className:"player-inner__right"},r.a.createElement("div",{className:"player-inner__right__actions"},r.a.createElement("i",{className:"fal fa-backward",onClick:function(){var e,a=m.findIndex((function(e){return e.id===t.id}));a-1!==-1?(e=m[a-1],d(e),y()):(e=m[m.length-1],d(e),y())}}),r.a.createElement("i",{className:"fal "+(c?"fa-pause":"fa-play"),onClick:function(){p(),l()}}),r.a.createElement("i",{className:"fal fa-forward",onClick:g}))))))})),W=a(21),J=a.n(W),Z={persian:{name:"persian",slug:"ir"},global:{name:"global",slug:"us"},init:function(){J.a.get("region")||J.a.set("region","ir")},set:function(e){return J.a.set("region",e)},get:function(){return J.a.get("region")?J.a.get("region"):(Z.init(),"ir")}},$=Z;var K=Object(s.g)((function(e){var t=Object(s.f)(e.location.pathname,{path:"/region/:region"});return r.a.createElement("aside",null,r.a.createElement("strong",null,"Regions"),r.a.createElement("ul",null,r.a.createElement("li",{className:t&&t.params.region!==$.global.name?"":"active",onClick:function(){return e.history.push("/region/".concat($.global.name))}},r.a.createElement("i",{className:"fal fa-globe-americas"}),"Global"),r.a.createElement("li",{className:t&&t.params.region===$.persian.name?"active":"",onClick:function(){return e.history.push("/region/".concat($.persian.name))}},r.a.createElement("i",{className:"fal fa-flag"}),"Persian")))})),Q=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(K,null),r.a.createElement("div",{className:"page"},r.a.createElement(Y,null),r.a.createElement(s.d,null,G.map((function(e,t){return r.a.createElement(s.b,{key:t,exact:!!e.exact,path:e.path,component:function(t,a){return r.a.createElement(e.component,{key:t.match.params.id||t.match.params.query||t.match.params.region})}})})),r.a.createElement(s.b,{component:function(){return r.a.createElement(s.a,{to:"/"})}})),r.a.createElement(B,null))))},X=(a(104),a(19)),ee=a(49),te=a(15),ae={global:{musicsFind:{data:[],loading:!1},vitrines:{data:[],loading:!1}},persian:{musicsFind:{data:[],loading:!1},vitrines:{data:[],loading:!1}}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_MUSICS_FIND":return Object(x.a)(Object(x.a)({},e),{},Object(te.a)({},t.region,Object(x.a)(Object(x.a)({},e[t.region]),{},{musicsFind:Object(x.a)(Object(x.a)({},e[t.region].musicsFind),{},{loading:!0})})));case"FETCH_MUSICS_FIND_SUCCESS":return Object(x.a)(Object(x.a)({},e),{},Object(te.a)({},t.region,Object(x.a)(Object(x.a)({},e[t.region]),{},{musicsFind:{data:t.payload,loading:!1}})));case"FETCH_MUSICS_FIND_FAILED":return Object(x.a)(Object(x.a)({},e),{},Object(te.a)({},t.region,Object(x.a)(Object(x.a)({},e[t.region]),{},{musicsFind:Object(x.a)(Object(x.a)({},e[t.region].musicsFind),{},{loading:!1})})));case"FETCH_VITRINES":return Object(x.a)(Object(x.a)({},e),{},Object(te.a)({},t.region,Object(x.a)(Object(x.a)({},e[t.region]),{},{vitrines:Object(x.a)(Object(x.a)({},e[t.region].vitrines),{},{loading:!0})})));case"FETCH_VITRINES_SUCCESS":return Object(x.a)(Object(x.a)({},e),{},Object(te.a)({},t.region,Object(x.a)(Object(x.a)({},e[t.region]),{},{vitrines:{data:t.payload,loading:!1}})));case"FETCH_VITRINES_FAILED":return Object(x.a)(Object(x.a)({},e),{},Object(te.a)({},t.region,Object(x.a)(Object(x.a)({},e[t.region]),{},{vitrines:Object(x.a)(Object(x.a)({},e[t.region].vitrines),{},{loading:!1})})));default:return e}},re={isPlaying:!1,music:{},playlist:[],currentPos:0,duration:0,initialized:!1},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_PLAY":return Object(x.a)(Object(x.a)({},e),{},{isPlaying:!e.isPlaying});case"SET_MUSIC":return Object(x.a)(Object(x.a)({},e),{},{music:t.payload,isPlaying:!0});case"SET_PLAYLIST":return Object(x.a)(Object(x.a)({},e),{},{playlist:t.payload});case"SET_POS":return Object(x.a)(Object(x.a)({},e),{},{currentPos:t.payload});case"SET_DURATION":return Object(x.a)(Object(x.a)({},e),{},{duration:t.payload});case"SET_INITIALIZED":return Object(x.a)(Object(x.a)({},e),{},{initialized:t.payload});default:return e}},ie={result:{},loading:!1},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_RESULT":return Object(x.a)(Object(x.a)({},e),{},{loading:!0});case"FETCH_RESULT_SUCCESS":return Object(x.a)(Object(x.a)({},e),{},{result:t.payload,loading:!1});case"FETCH_RESULT_FAILED":return Object(x.a)(Object(x.a)({},e),{},{result:null,loading:!1});default:return e}},se=Object(X.c)({homeReducer:ne,playerReducer:ce,searchReducer:le}),ue=Object(X.d)(se,Object(X.a)(ee.a));var oe=function(){return r.a.createElement(u.a,{store:ue},r.a.createElement(Q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},47:function(e,t,a){e.exports=a.p+"static/media/logo.8a4e1940.svg"},50:function(e,t,a){e.exports=a(105)},55:function(e,t,a){}},[[50,1,2]]]);
//# sourceMappingURL=main.e710aad5.chunk.js.map