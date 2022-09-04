$(document).ready(function() {

	//SIDEBAR
	$("#sidebar").mCustomScrollbar({
	theme: "minimal"
	});
	$('#sidebarCollapse').on('click', function () {
	$('#sidebar, #content').toggleClass('active');
	$('.collapse.in').toggleClass('in');
	$('a[aria-expanded=true]').attr('aria-expanded', 'false');
	});


	//DATETIME AUTO REFRESH EVERY 1s
	setInterval(function() {
		var date = new Date();
		//var datetime = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
		var datetime = date.toLocaleString([], { hour12: true});
		$("#datetime").text("" + datetime);
	}, 1000);


});
