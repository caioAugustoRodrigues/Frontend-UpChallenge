(this.webpackJsonpupchallenge=this.webpackJsonpupchallenge||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(3),l=t.n(s),r=(t(9),t(1));l.a.render(c.a.createElement((function(){var e=Object(n.useState)(!1),a=Object(r.a)(e,2),t=a[0],s=a[1],l=Object(n.useState)(1),o=Object(r.a)(l,2),i=o[0],m=o[1];function u(){var e=document.getElementById("play-pause");t?(e.classList.add("fa-play"),e.classList.remove("fa-pause"),s(!1)):(e.classList.add("fa-pause"),e.classList.remove("fa-play"),s(!0))}function f(){window.setTimeout((function(){m(1),u(),s(!1)}),3e3)}var p=i,d={laneLeft:function(){m(p-=1)},laneRight:function(){m(p+=1)}};return c.a.createElement("section",{className:"game"},c.a.createElement("div",{className:"game__canvas".concat(t?"--play":"")},c.a.createElement("div",{className:"game__lane"},c.a.createElement("div",{id:"carro",className:"".concat(function(e){switch(e){case 0:return"carro__l";case 1:return"carro";case 2:return"carro__r";case 3:return t&&s(!t),f(),"explosion__r";case-1:return t&&s(!t),f(),"explosion__l";default:return"carro"}}(i),"\n            ").concat(t?"tremer":"")}))),c.a.createElement("div",{className:"game__controls"},c.a.createElement("button",{className:"icon",onClick:d.laneLeft},c.a.createElement("i",{className:"fas fa-chevron-left"})),c.a.createElement("button",{className:"icon",onClick:u},c.a.createElement("span",null,c.a.createElement("i",{id:"play-pause",className:"fas fa-play"}))),c.a.createElement("button",{className:"icon",onClick:d.laneRight},c.a.createElement("i",{className:"fas fa-chevron-right"}))))}),null),document.getElementById("root"))},4:function(e,a,t){e.exports=t(10)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.c08029ce.chunk.js.map