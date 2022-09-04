/* ═══════════════════SAMPLE HTML═══════════════════
<html>
<head></head>
<body>
	
	<h1>Hello World!</h1>

	<button>Button 1</button>
	<button>Button 2</button>

 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
 <script type="text/javascript" src="js/app.js"></script>
</body>
</html>
 ═══════════════════SAMPLE HTML═══════════════════ */

//Adding animations
$("button").click(function() {
	$("h1").fadeOut(); //alternative: hide, slideUp..
});

//Adding animations
$("button").click(function() {
	$("h1").fadeIn(); //alternative: show, slideDown..
});

//Toggling animations
$("button").click(function() {
	$("h1").fadetoggle(); //alternative: toggle, slideToggle..
});

//See other effects here: https://api.jquery.com/category/effects/
