/* ═══════════════════SAMPLE HTML═══════════════════
<html>
<head></head>
<body>

	<p class="demo">First p element with class="demo.</p>

	<p class="demo">Second p element also with class="demo".</p>

 <script type="text/javascript" src="js/app.js"></script>
</body>
</html>
 ═══════════════════SAMPLE HTML═══════════════════ */

//Select a tag and perform changes 4

var x = document.getElementsByClassName("demo");
x[1].innerHTML = "Hello World!";
//Changed 2nd paragraph text to "Hello World!".
