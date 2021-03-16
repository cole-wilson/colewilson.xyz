console.log("%c   ", atob('Zm9udC1zaXplOiAzMDBweDsgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7IGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltYWdlcy5jdGZhc3NldHMubmV0L3VzZjF2d3R1cXl4bS82bWlhWXVEMmk0d2Vtb2txOFEwMlVvL2JhOTIyODE3NDA3YTY2NzM0OWFlNjRjOGUzMzRkM2I2L0RvYmJ5X1dCX0YyX0RvYmJ5Q2xpY2tpbmdGaW5nZXJzQ2FzdGluZ1NwZWxsX1N0aWxsXzA4MDYxNV9MYW5kLmpwZyk7'));
console.log(atob("JWNXZWxjb21lIHRvIHRoZSBjb25zb2xlIQpZb3UgZm91bmQgZWFzdGVyIGVnZyAjMSwgY2FuIHlvdSBmaW5kIGFsbCAyMD8="),
	    atob('Zm9udC13ZWlnaHQ6IGJvbGQ7IHNlbGYtYWxpZ246IGNlbnRlcjt0ZXh0LWFsaWduOiBjZW50ZXI7Zm9udC1mYW1pbHk6IG1vbm9zcGFjZTsgZm9udC1zaXplOiAyMHB4O2NvbG9yOiBkYXJrYmx1ZTsgYmFja2dyb3VuZDogd2hpdGU7IGJvcmRlcjogMXB4IGRhc2hlZCBjeWFuOw==')
);
//import https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
document.documentElement.setAttribute('data-theme', localStorage.getItem('themeSwitch'));

const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};



	$('header').prepend('<span id="openav">&equiv;</span>');
	var l = $('.n1').html().replace(/(\<.*?\>.*?\<\/a\>)/g, '$1'+'<br>').replace(/style=".*?"/g,'');
	var t = $('.n2').html().replace(/(\<.*?\>.*?\<\/a\>)/g, '$1'+'<br>').replace(/style=".*?"/g,'');
	var button = "<span id='closenav'>&times;</span><br>";
	var home = "<a href='/'>home</a><br>";
	$("#navsmall").html(button+l+home+t);
	// $('.n1, .n2').remove();
	// $('.n1, .n2').html('');


$("#closenav").click(function(){
	$('#navsmall').css({'display':'none'})
});
$("#openav").click(function(){
	$('#navsmall').css({'display':'block'})
});

$("article img").click(function(){
	window.open($(this).attr('src'));
});


document.querySelectorAll('.highlight').forEach(function(node) {
  node.innerHTML = "<img class='copycode' src='https://img.icons8.com/windows/30/999999/copy.png'>" + node.innerHTML
});


$(document).on("click",":header", function () {
   var clickedBtnID = $(this).attr('id'); // or var clickedBtnID = this.id
   window.location.hash = '#' + clickedBtnID;
});

$(document).on("click",".copycode", function () {
   copyToClipboard($(this).parent().text());
	 alert("Code is copied to clipboard.");
});

window.onhashchange = function(){
	var y = $(window).scrollTop();  //your current y position on the page
	$(window).scrollTop(y-50);
}

window.onload = function(){
	if (window.location.hash != ""){
		var y = $(window).scrollTop();  //your current y position on the page
		$(window).scrollTop(y-50);
	}
}

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

if (true) {//layout == ''
viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 50;
document.onscroll = function() {
	// alert();
	if (!window.matchMedia("(max-width: 600px)").matches) {
		if ($(window).scrollTop() > viewportHeight) {
			$('#about').css({'position':'fixed',"width":"18vw","top":"60px"})
			// if (($(document).height()-viewportHeight)-135 <= $(window).scrollTop()) {
			// 	var offset = 60-(($(window).scrollTop()) - ($(document).height()-viewportHeight-135));
			// 	// alert(offset);
			// 	$('#about').css({'top':parseInt(offset)+'px'})
			// }
			// else {
				$('#toptitle').html(" / "+$(".herotitle").text());
			// }
		}
		else {
			$('#about').css({'position':'static',"width":"auto"})
			$('#toptitle').html("");
		}
	}
}
}
else {
viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)/3;
document.onscroll = function() {
	if (!window.matchMedia("(max-width: 600px)").matches) {
	if ($(window).scrollTop() > viewportHeight) {
		$('#about').css({'position':'fixed',"width":"18vw"})
		$('#toptitle').html(" / "+$(".herotitle").text());
	}
	else {
		$('#about').css({'position':'static',"width":"auto"})
		$('#toptitle').html(" / "+$(".herotitle").text());
	}
	}
}
}
var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

if (height < viewportHeight+100) {
	$('footer').css({'position':'fixed',"bottom":"0"})
}

if (localStorage.getItem('themeSwitch') == 'dark') {
document.querySelectorAll('img').forEach(function(node) {
		node.src = node.src.replace('666666','ffffff');
	});
}
else {
	document.querySelectorAll('img').forEach(function(node) {
		node.src = node.src.replace('ffffff','666666');
	});
}
$("#darkmode").click(function() {
  if (localStorage.getItem('themeSwitch') == 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('themeSwitch', 'light');
		document.querySelectorAll('img').forEach(function(node) {
			node.src = node.src.replace('ffffff','666666');
		});
	}
	else {
    document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('themeSwitch', 'dark');
		document.querySelectorAll('img').forEach(function(node) {
			node.src = node.src.replace('666666','ffffff');
		});
	}
});
setInterval(function(){ 
	document.documentElement.setAttribute('data-theme', localStorage.getItem('themeSwitch'));
if (localStorage.getItem('themeSwitch') == 'dark') {
document.querySelectorAll('img').forEach(function(node) {
		node.src = node.src.replace('666666','ffffff');
	});
}
else {
	document.querySelectorAll('img').forEach(function(node) {
		node.src = node.src.replace('ffffff','666666');
	});
}
}, 10000);

// ?
var _0x1c6d=['32467KpvbFc','keydown','1qbhdro','27337yaQJpx','719ESSydz','append','448424ywAiGf','addEventListener','right','down','left','37gtQtHZ','1PTiAPZ','1005994eRYseN','keyCode','1750343xkhStF','WW91IGZvdW5kIEVhc3RlciBFZ2cgIzQh','903szDUpW','1119409UzHxUh'];var _0x26db=function(_0x27ef4b,_0x4cbede){_0x27ef4b=_0x27ef4b-0x1dd;var _0x1c6d9b=_0x1c6d[_0x27ef4b];return _0x1c6d9b;};var _0x51e270=_0x26db;(function(_0x45e703,_0x46a44c){var _0x426bd0=_0x26db;while(!![]){try{var _0x13996c=-parseInt(_0x426bd0(0x1ed))+parseInt(_0x426bd0(0x1e6))+parseInt(_0x426bd0(0x1e3))+-parseInt(_0x426bd0(0x1de))*parseInt(_0x426bd0(0x1e4))+parseInt(_0x426bd0(0x1e2))*-parseInt(_0x426bd0(0x1df))+parseInt(_0x426bd0(0x1eb))*parseInt(_0x426bd0(0x1e0))+parseInt(_0x426bd0(0x1ef))*parseInt(_0x426bd0(0x1ec));if(_0x13996c===_0x46a44c)break;else _0x45e703['push'](_0x45e703['shift']());}catch(_0x46495e){_0x45e703['push'](_0x45e703['shift']());}}}(_0x1c6d,0x9f5b3));var allowedKeys={0x25:_0x51e270(0x1ea),0x26:'up',0x27:'right',0x28:'down',0x41:'a',0x42:'b'},kcc=['up','up',_0x51e270(0x1e9),_0x51e270(0x1e9),'left',_0x51e270(0x1e8),_0x51e270(0x1ea),'right','b','a'],kcp=0x0;document[_0x51e270(0x1e7)](_0x51e270(0x1e1),function(_0xb5d725){var _0x547737=_0x51e270,_0x104d6d=allowedKeys[_0xb5d725[_0x547737(0x1ee)]],_0x58befa=kcc[kcp];_0x104d6d==_0x58befa?(kcp++,kcp==kcc['length']&&($('body')[_0x547737(0x1e5)]('PGltZyBpZD0neW9kYWhlYWQnIHNyYz0naHR0cHM6Ly9pLmRscG5nLmNvbS9zdGF0aWMvcG5nLzQ2NjYzNV90aHVtYi5wbmcnIGFsdD0nRWFzdGVyIEVnZyAjNCcvPjxzdHlsZT4KI3lvZGFoZWFkIHsKICAgICAgICBwb3NpdGlvbjogZml4ZWQ7CiAgICAgICAgdG9wOiAzMHZoOwogICAgICAgIGxlZnQ6IDQwdnc7CiAgICAgICAgd2lkdGg6IDIwMHB4OwogICAgICAgIGhlaWdodDogMjAwcHg7CiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlOwogICAgICAgIGFuaW1hdGlvbjogYW5pbWF0ZSAxMHMgbGluZWFyIGluZmluaXRlOwogICAgICAgIHBlcnNwZWN0aXZlOiA4MDBweDsKICAgIH0KQGtleWZyYW1lcyBhbmltYXRlIHsKICAgIDAlewogICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpOwogICAgfQogICAgMTAwJXsKICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTsKICAgIH0KfTwvc3R5bGU+'),alert(_0x547737(0x1dd)),kcp=0x0)):kcp=0x0;});
