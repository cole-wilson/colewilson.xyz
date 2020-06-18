const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

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


viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 50;
document.onscroll = function() {
	if ($(window).scrollTop() > viewportHeight) {
		$('#about').css({'position':'fixed',"width":"18vw"})
	}
	else {
		$('#about').css({'position':'static',"width":"auto"})
	}
}