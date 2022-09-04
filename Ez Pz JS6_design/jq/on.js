/* ═══════════════════SAMPLE HTML═══════════════════
<html>
<head></head>
<body>

	<button>Button 1</button>
	<button>Button 2</button>

 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
 <script type="text/javascript" src="js/app.js"></script>
</body>
</html>
 ═══════════════════SAMPLE HTML═══════════════════ */

//Add click Event listeners
$("button").click(function() {
	$("button").text("I was clicked!");
});

//Place Event listener to the whole document to detect keyboard press.
$(document).keypress(function(event) {
	console.log(event.key);	//OUTPUT: --Depending what keyboard key was pressed.--
});

//Place any Event listeners with a universal syntax.
$("button").on("mouseover", function() {
	$("button").text("I was hovered!");
});
