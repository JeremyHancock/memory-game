(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/comedian.7f96182e.jpg"},function(e,a,t){e.exports=t.p+"static/media/hangman.fd734568.jpg"},function(e,a,t){e.exports=t.p+"static/media/manhattan-sphere.64b83774.jpg"},function(e,a,t){e.exports=t.p+"static/media/manhattan.bf4cf5d1.jpg"},function(e,a,t){e.exports=t.p+"static/media/minutemen.c1cac184.jpg"},function(e,a,t){e.exports=t.p+"static/media/niteowl.97aded37.jpg"},function(e,a,t){e.exports=t.p+"static/media/oz.bbf71591.jpg"},function(e,a,t){e.exports=t.p+"static/media/rorschach.f78617fb.png"},function(e,a,t){e.exports=t.p+"static/media/rorschach.842a5ad6.jpg"},function(e,a,t){e.exports=t.p+"static/media/silkspectre.65f363d7.jpg"},function(e,a,t){e.exports=t.p+"static/media/smiley.f7981863.png"},function(e,a,t){e.exports=t.p+"static/media/watchmen.e9020f61.jpg"},function(e,a,t){e.exports=t.p+"static/media/watchmen2.c03152b2.jpg"},function(e,a,t){e.exports=t.p+"static/media/comedian-dies.585dd5a2.jpg"},function(e,a,t){e.exports=t.p+"static/media/ozymandias-thumb.1ef8231e.jpg"},function(e,a,t){e.exports=t.p+"static/media/watchmen-movie.90fc8f90.jpg"},,,,,function(e,a,t){e.exports=t(49)},,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,,,function(e,a,t){"use strict";t.r(a);var n=t(1),i=t.n(n),c=t(8),r=t.n(c),o=t(9),m=t(10),s=t(30),l=t(11),d=t(31),h=t(51),u=t(52),f=t(53);t(37);var g=function(e){return i.a.createElement("div",{className:"card-body"},i.a.createElement("img",{className:"card-image",onClick:function(){return e.handleImageClick(e.id)},key:e.id,src:e.image,alt:e.alt}))};t(39);var p=function(){return i.a.createElement("div",{className:"footer"},i.a.createElement("h1",null,"Who watches the Watchmen?"))};t(41);var x=function(e){return i.a.createElement("div",{className:"header"},i.a.createElement("h1",null,e.HeaderText))},E=t(12),S=t.n(E),j=t(13),k=t.n(j),v=t(14),T=t.n(v),b=t(15),y=t.n(b),w=t(16),C=t.n(w),M=t(17),N=t.n(M),O=t(18),H=t.n(O),W=t(19),I=t.n(W),z=t(20),R=t.n(z),A=t(21),D=t.n(A),G=t(22),J=t.n(G),B=t(23),Y=t.n(B),q=t(24),F=t.n(q),K=t(25),L=t.n(K),P=t(26),Q=t.n(P),U=t(27),V=t.n(U),X=[{id:1,image:y.a,alt:"Dr. Manhattan"},{id:2,image:T.a,alt:"Dr. Manhattan"},{id:3,image:k.a,alt:"The Hangman"},{id:4,image:S.a,alt:"The Comedian"},{id:5,image:C.a,alt:"The Minutemen"},{id:6,image:N.a,alt:"Nite Owl"},{id:7,image:H.a,alt:"Ozymandias"},{id:8,image:I.a,alt:"Rorschach"},{id:9,image:D.a,alt:"Silk Spectre"},{id:10,image:J.a,alt:"The Watchmen"},{id:11,image:Y.a,alt:"The Watchmen"},{id:12,image:F.a,alt:"The Watchmen"},{id:13,image:R.a,alt:"Rorschach"},{id:14,image:L.a,alt:"The Comedian"},{id:15,image:Q.a,alt:"Ozymandias"},{id:16,image:V.a,alt:"Watchmen Movie"}];t(43);var Z=function(e){return i.a.createElement("div",{class:"score-box"},i.a.createElement("h4",null,"Score: ",e.Score),i.a.createElement("h4",null,"High Score: ",e.HighScore))};t(45);var $=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(s.a)(this,Object(l.a)(a).call(this))).increaseScore=function(){var a=e.state.score+1;e.setState({score:a,headerText:"WATCHMEN: Memory Game"}),a>=e.state.highScore&&e.setState({highScore:a})},e.Reset=function(){e.setState({clicked:[],score:0,headerText:"You already clicked that image. Try again."})},e.handleShuffle=function(){var a=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e}(X);e.setState({images:a})},e.handleImageClick=function(a){-1===e.state.clicked.indexOf(a)?(e.setState({clicked:e.state.clicked.concat(a)}),e.increaseScore()):e.Reset(),e.handleShuffle()},e.state={images:X,clicked:[],score:0,highScore:0,headerText:"WATCHMEN: Memory Game"},e}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(h.a,null,i.a.createElement(u.a,{className:"header-row"},i.a.createElement(x,{HeaderText:this.state.headerText}),i.a.createElement(Z,{Score:this.state.score,HighScore:this.state.highScore})),i.a.createElement(u.a,{className:"instructions"},"Click each image just once. The images will shuffle each time you click, so pay attention."),i.a.createElement(u.a,null,this.state.images.map(function(a){return i.a.createElement(f.a,{xs:"12",sm:"6",md:"4",lg:"3",className:"card-holder"},i.a.createElement(g,{key:a.id,image:a.image,id:a.id,alt:a.alt,handleImageClick:e.handleImageClick,handleShuffle:e.handleShuffle}))})),i.a.createElement(p,null))}}]),a}(n.Component);var _=function(){return i.a.createElement($,null)};r.a.render(i.a.createElement(_,null),document.getElementById("root"))}],[[32,2,1]]]);
//# sourceMappingURL=main.a2dbaf30.chunk.js.map