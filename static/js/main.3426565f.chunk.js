(this.webpackJsonpupchallenge=this.webpackJsonpupchallenge||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(3),r=t.n(c),s=(t(9),t(1));function m(e){var a=e.lane,t=e.handleLane,n=e.isPlaying;return l.a.createElement("div",{id:"carro",className:"".concat(t(a),"\n            ").concat(n?"tremer":"")})}function i(e){var a=e.isPlaying,t=e.setPlaying,c=e.handleChange,r=Object(n.useState)(30),m=Object(s.a)(r,2),i=m[0],u=m[1],o=Object(n.useState)(!1),f=Object(s.a)(o,2),E=f[0],p=f[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"hud__time-left"},i),l.a.createElement("button",{className:"go".concat(a||E?"-hide":""),onClick:function(){E||a||setTimeout((function(){u(3),p(!0),setTimeout((function(){u(2),setTimeout((function(){u(1),setTimeout((function(){t(!0),c(),p(!1),u(30)}),1e3)}),1e3)}),1e3)}),1e3)}},"Go"))}function u(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(1),u=Object(s.a)(r,2),o=u[0],f=u[1];function E(){var e=document.getElementById("play-pause");t?(e.classList.add("fa-play"),e.classList.remove("fa-pause"),c(!t)):t||(e.classList.add("fa-pause"),e.classList.remove("fa-play"),c(!t))}function p(){var e=document.getElementById("play-pause");t&&(e.classList.remove("fa-play"),e.classList.add("fa-pause"),E())}function d(){window.setTimeout((function(){f(1),c(!1),p()}),3e3)}var y=o,g={laneLeft:function(){t&&f(y-=1)},laneRight:function(){t&&f(y+=1)}};return l.a.createElement("section",{className:"game",onKeyDown:function(e){var a=e.key;"ArrowLeft"===a&&t?(a=e.key,g.laneLeft()):"ArrowRight"===a&&t?(a=e.key,g.laneRight()):"Escape"===a&&(c(!t),E())}},l.a.createElement("div",{className:"game__canvas".concat(t?"--play":"")},l.a.createElement("div",{className:"hud"},l.a.createElement(i,{isPlaying:t,setPlaying:c,handleChange:p})),l.a.createElement("div",{className:"game__lane"},l.a.createElement(m,{lane:o,handleLane:function(e){switch(e){case 0:return"carro__l";case 1:return"carro";case 2:return"carro__r";case 3:return t&&c(!t),d(),"explosion__r";case-1:return t&&c(!t),d(),"explosion__l";default:return"carro"}},isPlaying:t}))),l.a.createElement("div",{className:"game__controls"},l.a.createElement("button",{className:"icon",onClick:g.laneLeft},l.a.createElement("i",{className:"fas fa-chevron-left"})),l.a.createElement("button",{className:"icon",onClick:E},l.a.createElement("span",null,l.a.createElement("i",{id:"play-pause",className:"fas fa-play"}))),l.a.createElement("button",{className:"icon",onClick:g.laneRight},l.a.createElement("i",{className:"fas fa-chevron-right"}))))}var o=function(e){var a=e.setPlay,t=(e.willPlay,Object(n.useState)(0)),c=Object(s.a)(t,2),r=(c[0],c[1]),m={startPlay:function(){a(!0)}};return l.a.createElement("section",{className:"menu"},l.a.createElement("div",{className:"menu__upper"},l.a.createElement("span",{className:"upnid"}),l.a.createElement("p",null,"Apresenta:")),l.a.createElement("div",{className:"menu__title"},l.a.createElement("h1",null,"Up",l.a.createElement("span",null,"Challenge"),"!")),l.a.createElement("form",{className:"menu__name",onSubmit:function(){var e=document.getElementById("player-name");r(e)}},l.a.createElement("label",{htmlFor:"name"},l.a.createElement("h2",null,"Name"),l.a.createElement("input",{id:"player-name",type:"text",minLength:"4",maxLength:"4",pattern:"[A-Za-z0-9]"})),l.a.createElement("button",{className:"start",onClick:m.startPlay},"Press Start")))};r.a.render(l.a.createElement((function(){var e=n.useState(!1),a=Object(s.a)(e,2),t=a[0],l=a[1];return n.createElement((function(){return t?n.createElement(n.Fragment,null,n.createElement(u,null)):n.createElement(o,{setPlay:l,willPlay:t})}),null)}),null),document.getElementById("root"))},4:function(e,a,t){e.exports=t(10)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.3426565f.chunk.js.map