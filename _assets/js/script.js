//Console Stuff
console.log("%c   ", atob('Zm9udC1zaXplOiAzMDBweDsgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7IGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltYWdlcy5jdGZhc3NldHMubmV0L3VzZjF2d3R1cXl4bS82bWlhWXVEMmk0d2Vtb2txOFEwMlVvL2JhOTIyODE3NDA3YTY2NzM0OWFlNjRjOGUzMzRkM2I2L0RvYmJ5X1dCX0YyX0RvYmJ5Q2xpY2tpbmdGaW5nZXJzQ2FzdGluZ1NwZWxsX1N0aWxsXzA4MDYxNV9MYW5kLmpwZyk7'));
console.log(atob("JWNXZWxjb21lIHRvIHRoZSBjb25zb2xlIQpZb3UgZm91bmQgZWFzdGVyIGVnZyAjMSwgY2FuIHlvdSBmaW5kIGFsbCAyMD8="),
	    atob('Zm9udC13ZWlnaHQ6IGJvbGQ7IHNlbGYtYWxpZ246IGNlbnRlcjt0ZXh0LWFsaWduOiBjZW50ZXI7Zm9udC1mYW1pbHk6IG1vbm9zcGFjZTsgZm9udC1zaXplOiAyMHB4O2NvbG9yOiBkYXJrYmx1ZTsgYmFja2dyb3VuZDogd2hpdGU7IGJvcmRlcjogMXB4IGRhc2hlZCBjeWFuOw==')
);

document.documentElement.setAttribute('data-theme', localStorage.getItem('themeSwitch'));
// Functions
const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

$('code').click(function(){copyToClipboard($(this).text())});

// Easter Egg Stuff
document.addEventListener('selectionchange', function() { // Credit: https://dev.to/rose/playing-with-easter-eggs-ideas-for-making-your-website-more-fun-1p0p
  var selection = document.getSelection();
  var selectedText = selection ? selection.toString() : null;
  if (['easter', 'egg', 'cole', 'wilson'].includes(selectedText.toLowerCase())) {
    alert('You found easter egg #5!');
  }
});

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

var newScript = document.createElement("script");
newScript.src = atob("aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL3NpbmRyZXNvcmh1cy9kZXZ0b29scy1kZXRlY3QvaW5kZXgubWluLmpz");
document.getElementsByTagName('body')[0].appendChild(newScript);

window.addEventListener('devtoolschange', event => {
if (event.detail.isOpen && localStorage.getItem('me')!='1') {alert('You found easter egg #4!');window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";};
});


var agents = ['Merlin', 'Links', 'Genius', 'Peedy', 'Clippy', 'Links', 'Links', 'Links']
var agentname = agents[Math.floor(Math.random() * agents.length)];
var onscreen = false;
function clippygo() {
if (onscreen){return false;}
onscreen = true;
clippy.load(agentname, function(agent) {
	agent.show();
	agent.speak(`Hi there I'm ${agentname}!`);
	agent.speak(`Google 'Clippy' for some context.`);
	agent.speak('I am easter egg #6!');
	setInterval(function(){
		agent.animate()
	},3000);
});return false;}

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
document.onscroll = function() {
	viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 50;
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
var _0x4b89=['2tDUjbH','22426EntMPj','1jQqfrd','length','addEventListener','168338gDEkZR','PGltZyBpZD0neW9kYWhlYWQnIHNyYz0naHR0cHM6Ly9pLmRscG5nLmNvbS9zdGF0aWMvcG5nLzQ2NjYzNV90aHVtYi5wbmcnIGFsdD0nRWFzdGVyIEVnZyAjNCcvPjxzdHlsZT4KI3lvZGFoZWFkIHsKICAgICAgICBwb3NpdGlvbjogZml4ZWQ7CiAgICAgICAgdG9wOiAzMHZoOwogICAgICAgIGxlZnQ6IDQwdnc7CiAgICAgICAgd2lkdGg6IDIwMHB4OwogICAgICAgIGhlaWdodDogMjAwcHg7CiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlOwogICAgICAgIGFuaW1hdGlvbjogYW5pbWF0ZSAxMHMgbGluZWFyIGluZmluaXRlOwogICAgICAgIHBlcnNwZWN0aXZlOiA4MDBweDsKICAgIH0KQGtleWZyYW1lcyBhbmltYXRlIHsKICAgIDAlewogICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpOwogICAgfQogICAgMTAwJXsKICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKTsKICAgIH0KfTwvc3R5bGU+','left','right','body','keyCode','down','763933BWlnwX','123586mkMGwA','36054kdmdDC','563896jUnZrq','794875kHXoVR','keydown','5rhYlns'];var _0x4fd3=function(_0x20b470,_0x250806){_0x20b470=_0x20b470-0xde;var _0x4b8991=_0x4b89[_0x20b470];return _0x4b8991;};var _0x2298bc=_0x4fd3;(function(_0x52e9bf,_0x2e7661){var _0x1c8903=_0x4fd3;while(!![]){try{var _0x341863=-parseInt(_0x1c8903(0xe9))*parseInt(_0x1c8903(0xeb))+-parseInt(_0x1c8903(0xec))*parseInt(_0x1c8903(0xef))+-parseInt(_0x1c8903(0xe7))+parseInt(_0x1c8903(0xea))*parseInt(_0x1c8903(0xe5))+parseInt(_0x1c8903(0xe6))+parseInt(_0x1c8903(0xe3))+parseInt(_0x1c8903(0xe4));if(_0x341863===_0x2e7661)break;else _0x52e9bf['push'](_0x52e9bf['shift']());}catch(_0x14ac9d){_0x52e9bf['push'](_0x52e9bf['shift']());}}}(_0x4b89,0x6d6b4));var allowedKeys={0x25:'left',0x26:'up',0x27:_0x2298bc(0xdf),0x28:_0x2298bc(0xe2),0x41:'a',0x42:'b'},kcc=['up','up',_0x2298bc(0xe2),_0x2298bc(0xe2),_0x2298bc(0xde),_0x2298bc(0xdf),_0x2298bc(0xde),_0x2298bc(0xdf),'b','a'],kccpisdsdkjfhvdsfa=0x0;document[_0x2298bc(0xee)](_0x2298bc(0xe8),function(_0x28bd62){var _0xe08a88=_0x2298bc,_0x30f5a9=allowedKeys[_0x28bd62[_0xe08a88(0xe1)]],_0x594df5=kcc[kccpisdsdkjfhvdsfa];_0x30f5a9==_0x594df5?(kccpisdsdkjfhvdsfa++,kccpisdsdkjfhvdsfa==kcc[_0xe08a88(0xed)]&&($(_0xe08a88(0xe0))['append'](atob(_0xe08a88(0xf0))),alert(atob('WW91IGZvdW5kIEVhc3RlciBFZ2cgIzQh')),kccpisdsdkjfhvdsfa=0x0)):kccpisdsdkjfhvdsfa=0x0;});
