(this["webpackJsonpbc-clicky-game"]=this["webpackJsonpbc-clicky-game"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"src":"./images/black-panther.jpg"},{"id":2,"src":"./images/cat.jpg"},{"id":3,"src":"./images/cheetah-cub.jpg"},{"id":4,"src":"./images/cougar.jpg"},{"id":5,"src":"./images/jaguar.jpg"},{"id":6,"src":"./images/kitty.jpg"},{"id":7,"src":"./images/leopard.jpg"},{"id":8,"src":"./images/lion.jpg"},{"id":9,"src":"./images/lynx.jpg"},{"id":10,"src":"./images/ocelot.jpg"},{"id":11,"src":"./images/serval.jpg"},{"id":12,"src":"./images/tiger.jpg"}]')},,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),s=a.n(i),c=a(2),r=a.n(c),n=(a(14),a(3)),o=a(4),l=a(7),g=a(5),m=a(8),u=a(6),h=(a(15),function(e){return s.a.createElement("img",{width:128,height:128,src:e.src,onClick:function(){return e.imageClick(e.id)}})}),d=(a(16),function(e){function t(){var e,a;Object(n.a)(this,t);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(s)))).state={score:0,highscore:0,imagesClicked:[],images:u,status:"Click an image to get started!"},a.imageClicky=function(e){a.state.imagesClicked.includes(e)?(a.setState({score:0,imagesClicked:[],highscore:a.state.score,status:"You clicked the same image twice! You lose! NEW GAME!"}),a.shuffleImages(a.state.images)):(a.state.score>=11?a.setState({score:0,highscore:12,status:"Nice win! New Game!"}):a.setState({score:a.state.score+1,status:"Good pick..."}),a.state.imagesClicked.push(e),console.log("New Images Clicked"),console.log(a.state.imagesClicked),a.shuffleImages(a.state.images))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"shuffleImages",value:function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),i=e[t];e[t]=e[a],e[a]=i}this.setState({images:e})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container"},s.a.createElement("div",null,"Welcome to Clicky Game!",s.a.createElement("p",null,"Click on the images. Everytime you click an image all the images will shuffle around, waiting for you to click again. If you click the same image more than once before the round is over, you lose!"),"Score: ",this.state.score," ",s.a.createElement("br",null),"High Score: ",this.state.highscore,s.a.createElement("br",null),this.state.status),s.a.createElement("div",{className:"img-container"},this.state.images.map((function(t){return s.a.createElement(h,{id:t.id,src:t.src,key:t.id,imageClick:e.imageClicky})}))))}}]),t}(s.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.223a5196.chunk.js.map