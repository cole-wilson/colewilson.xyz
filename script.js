document.documentElement.setAttribute('data-theme', localStorage.getItem('themeSwitch'));
const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

if (window.matchMedia("(max-width: 600px)").matches) {
	$('header').prepend('<button id="openav">&equiv;</button>');
	var l = $('.n1').html().replace(/(\<.*?\>.*?\<\/a\>)/g, '$1'+'<br>').replace(/style=".*?"/g,'');
	var t = $('.n2').html().replace(/(\<.*?\>.*?\<\/a\>)/g, '$1'+'<br>').replace(/style=".*?"/g,'');
	var button = "<button id='closenav'>&times;</button><br>";
	var home = "<a href='/'>home</a><br>";
	$("#navsmall").html(button+l+home+t);
	$('.n1, .n2').remove();
}
$("#closenav").click(function(){
	$('#navsmall').css({'display':'none'})
});
$("#openav").click(function(){
	$('#navsmall').css({'display':'block'})
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

if (layout == 'post') {//layout == ''
viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 50;
document.onscroll = function() {
	if (!window.matchMedia("(max-width: 600px)").matches) {
	if ($(window).scrollTop() > viewportHeight) {
		$('#about').css({'position':'fixed',"width":"18vw"})
		$('#toptitle').html(" / "+$(".herotitle").text());
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

if (height < viewportHeight+1000) {
	$('footer').css({'position':'fixed',"bottom":"0"})
}


$("#darkmode").click(function() {
  if (localStorage.getItem('themeSwitch') == 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('themeSwitch', 'light');
	}
	else {
    document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('themeSwitch', 'dark');
	}
});
setInterval(function(){ 
	document.documentElement.setAttribute('data-theme', localStorage.getItem('themeSwitch'));
}, 3000);
