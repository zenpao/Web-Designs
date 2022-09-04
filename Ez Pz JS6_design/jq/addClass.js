/* ═══════════════════SAMPLE HTML═══════════════════
<html>
<head></head>
<body>

	<h1>Hello World!</h1>

	<button class="class-padding">Enter</button>

 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
 <script type="text/javascript" src="js/app.js"></script>
</body>
</html>
 ═══════════════════SAMPLE HTML═══════════════════ */

//Adding or removing CSS class of a child/tag
$("h1").addClass("change-color change-font");
//NOTE: the class must also be present in the CSS.

$("h1").removeClass("change-font");
//Remove a class in h1.
