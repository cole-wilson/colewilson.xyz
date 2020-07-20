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
