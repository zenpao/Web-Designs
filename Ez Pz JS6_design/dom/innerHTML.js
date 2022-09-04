/* ═══════════════════SAMPLE HTML═══════════════════
<html>
<head></head>
<body>

	<h6><em>Hello World!</em></h6>

 <script type="text/javascript" src="js/app.js"></script>
</body>
</html>
 ═══════════════════SAMPLE HTML═══════════════════ */

//Change text using HTML formatting

document.querySelector("h6").innerHTML;
//OUTPUT: "<em>Hello World!</em>"

document.querySelector("h6").innerHTML = "<strong>Try me!<strong>";
//Changed h6 text to "Try me!" in bold.


