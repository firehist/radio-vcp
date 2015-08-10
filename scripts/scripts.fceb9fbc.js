"use strict";angular.module("radioVcpApp",["angularSoundManager","ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]).controller("appCtrl",["Radio",function(a){a.init()}]),angular.module("radioVcpApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("radioVcpApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("radioVcpApp").directive("logo",function(){return{templateUrl:"views/awesomeLogoDirective.html",restrict:"C",link:function(){}}}),angular.module("radioVcpApp").directive("header",function(){return{templateUrl:"views/headerDirective.html",restrict:"C"}}),angular.module("radioVcpApp").directive("ticket",function(){return{templateUrl:"views/ticketDirective.html",restrict:"C",controller:"ticketCtrl as ticket"}}).controller("ticketCtrl",["angularPlayer",function(){console.log("okok")}]),angular.module("radioVcpApp").controller("ticketPlayerCtrl",["$rootScope","Radio",function(a,b){var c=!1;this.togglePlay=function(){this.isPlaying()?(c=!1,b.pause()):(c=!0,b.play())},this.tryPlaying=function(){return c},this.isPlaying=function(){return b.isPlaying()}}]).directive("ticketPlayer",function(){return{templateUrl:"views/ticketPlayerDirective.html",restrict:"A",controller:"ticketPlayerCtrl as ticketPlayer"}}),angular.module("radioVcpApp").service("Radio",["$q","$rootScope","$timeout","$http","angularPlayer",function(a,b,c,d,e){var f=a.defer(),g=0,h=function(a){window.parseMusic=function(b){c(function(){a(b)})},d.jsonp(k.URL_INFOS)};window.angularPlayer=e,b.$on("angularPlayer:ready",function(){f.resolve()}),b.$on("currentTrack:position",function(a,b){g=b});var i=function(a){var b=a.split("[")[0].split("-");return{artist:b[0].trim()||"unknown",title:b[1].trim()||"unknown"}},j=function(a,b,c,d){this.id=a,this.title=b,this.artist=c||"unknown",this.duration=d||0};j.prototype.getId=function(){return this.id},j.prototype.getTitle=function(){return this.title},j.prototype.getArtist=function(){return this.artist},j.prototype.getDuration=function(){return this.duration};var k=function(){};return k.URL_BASE="http://radio.vendredicestpermis.com",k.URL_INFOS=k.URL_BASE+"/jsonp.xsl",k.prototype.infos=null,k.prototype.current=null,k.prototype.track=null,k.prototype.init=function(){var a=this;return h(function(b){a.infos=b;var c="/radio_VCP";a.current=_.set(b[c],"id",c);var d=i(a.current.title);a.track=new j(c,d.title,d.artist,0)}),setInterval(function(){h(function(b){a.infos=b;var d=a.track.getId(),e=a.infos[d];e.title!==a.track.getTitle()&&c(function(){a.current=_.set(e,"id",d);var b=i(a.current.title);a.track=new j(d,b.title,b.artist,0)},0)})},1500),this},k.prototype.getTrack=function(){return this.track},k.prototype.play=function(){return this.getTrack()&&this.playCurrent(),this},k.prototype.pause=function(){e.pause()},k.prototype.isPlaying=function(){return e.isPlayingStatus()&&g>0},k.prototype.isReady=function(){return f.promise},k.prototype.playCurrent=function(){return this.isReady().then(function(){e.addTrack({id:this.getTrack().getId(),title:this.getTrack().getTitle(),artist:this.getTrack().getArtist(),url:this.current.url}),e.play()}.bind(this)),this},new k}]),angular.module("radioVcpApp").directive("svgPlay",function(){return{template:'<svg class="svg-play" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="157.859px" height="157.871px" viewBox="0 0 157.859 157.871" enable-background="new 0 0 157.859 157.871" xml:space="preserve"><path fill="#FFFFFF" d="M79.046,0C35.448-0.066,0.063,35.225,0,78.818c-0.075,43.59,35.22,78.98,78.813,79.053c43.593,0.059,78.981-35.232,79.046-78.825C157.928,35.454,122.629,0.065,79.046,0z M50.308,126.006l14.155-47.599L50.308,30.775l82.475,47.615L50.308,126.006z"/></svg>',restrict:"E"}}),angular.module("radioVcpApp").controller("ticketInfoCtrl",["Radio",function(a){var b=this;b.getTrack=function(){return a.getTrack()}}]).directive("ticketInfo",function(){return{templateUrl:"views/ticketInfoDirective.html",restrict:"A",controller:"ticketInfoCtrl as ticketInfo"}}),angular.module("radioVcpApp").controller("ticketCoverCtrl",["Radio",function(){var a="images/cover.cac50ffc.jpg",b=this;b.getCoverStyle=function(){return"background-image: url('"+a+"')"}}]).directive("ticketCover",function(){return{templateUrl:"views/ticketCoverDirective.html",controller:"ticketCoverCtrl as tickerCover",restrict:"A"}}),angular.module("radioVcpApp").directive("svgPause",function(){return{template:'<svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="157.859px" height="157.871px" viewBox="0 0 157.859 157.871" enable-background="new 0 0 157.859 157.871" xml:space="preserve"><path fill="#DBDCDE" d="M79.046,0C35.448-0.066,0.063,35.225,0,78.818c-0.075,43.59,35.22,78.98,78.813,79.053c43.593,0.059,78.981-35.232,79.046-78.825C157.928,35.454,122.629,0.065,79.046,0z M72.539,121.953H48.631V38.773h23.908V121.953zM108.942,121.933H85.034V38.753h23.908V121.933z"/></svg>',restrict:"E"}}),angular.module("radioVcpApp").controller("ticketInfoProgressCtrl",["$rootScope","Radio",function(a){var b=this,c=0,d=0,e=0;a.$on("track:progress",function(a,b){d=b}),a.$on("currentTrack:position",function(a,b){c=b}),a.$on("currentTrack:duration",function(a,b){e=b}),b.getCurrentPosition=function(){return c},b.getCurrentPercentage=function(){return d},b.getCurrentDuration=function(){return e}}]).directive("ticketInfoProgress",function(){return{templateUrl:"views/ticketInfoProgressDirective.html",restrict:"A",controller:"ticketInfoProgressCtrl as ticketInfoProgress"}}),angular.module("radioVcpApp").filter("time",function(){return function(a){var b="",c=0,d=0;return a&&angular.isNumber(a)&&(a/=1e3,d=Math.floor(a/60),c=Math.round(a-60*d)),d=10>d?"0"+d:d,d>0&&(b=d+"' "),c=10>c?"0"+c:c,b+=c+'"'}}),angular.module("radioVcpApp").directive("svgCode",function(){return{template:'<svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="126.775px" height="12.144px" viewBox="0 0 126.775 12.144" enable-background="new 0 0 126.775 12.144" xml:space="preserve"><g>	<g>		<path fill="#3C3D42" d="M3.809,12.144H2.674V0h1.135V12.144z M1.135,12.144H0V0h1.135V12.144z"/>	</g>	<g>		<rect x="5.346" y="0" fill="#3C3D42" width="3.809" height="11.335"/>	</g>	<g>		<rect x="10.693" y="0" fill="#3C3D42" width="2.471" height="11.335"/>	</g>	<g>		<path fill="#3C3D42" d="M22.521,11.335h-1.137V0h1.137V11.335z M18.512,11.335h-1.137V0h1.137V11.335z"/>	</g>	<g>		<path fill="#3C3D42" d="M31.877,11.335h-2.473V0h2.473V11.335z M27.867,11.335h-2.473V0h2.473V11.335z"/>	</g>	<g>		<rect x="33.414" y="0" fill="#3C3D42" width="5.147" height="11.335"/>	</g>	<g>		<path fill="#3C3D42" d="M50.59,11.335h-1.137V0h1.137V11.335z M47.916,11.335h-1.135V0h1.135V11.335z M41.232,11.335h-1.135V0			h1.135V11.335z"/>	</g>	<g>		<rect x="52.127" y="0" fill="#3C3D42" width="5.144" height="11.335"/>	</g>	<g>		<path fill="#3C3D42" d="M65.293,12.144h-1.137V0h1.137V12.144z M62.619,12.144h-1.135V0h1.135V12.144z M59.945,11.335h-1.135V0			h1.135V11.335z"/>	</g>	<g>		<rect x="66.83" y="0" fill="#3C3D42" width="3.809" height="11.335"/>	</g>	<g>		<path fill="#3C3D42" d="M79.994,11.335h-1.135V0h1.135V11.335z M77.322,11.335h-1.137V0h1.137V11.335z M74.648,11.335h-1.135V0			h1.135V11.335z"/>	</g>	<g>		<path fill="#3C3D42" d="M93.361,11.335h-2.473V0h2.473V11.335z M88.014,11.335h-2.473V0h2.473V11.335z"/>	</g>	<g>		<path fill="#3C3D42" d="M102.717,11.335h-1.137V0h1.137V11.335z M96.033,11.335h-1.135V0h1.135V11.335z"/>	</g>	<g>		<path fill="#3C3D42" d="M110.736,11.335h-2.473V0h2.473V11.335z M106.727,11.335h-2.473V0h2.473V11.335z"/>	</g>	<g>		<rect x="113.609" y="0" fill="#3C3D42" width="1.137" height="11.335"/>	</g>	<g>		<rect x="116.283" y="0" fill="#3C3D42" width="3.809" height="11.335"/>	</g>	<g>		<path fill="#3C3D42" d="M126.775,12.144h-1.137V0h1.137V12.144z M124.102,12.144h-1.135V0h1.135V12.144z"/>	</g></g></svg>',restrict:"E"}});