/* ═══════════════════SAMPLE HTML═══════════════════
<html>
<head></head>
<body>

	<input id="user" placeholder="Enter anything..">

	<button onclick="getValue()">Get</button>

 <script type="text/javascript" src="js/app.js"></script>
</body>
</html>
 ═══════════════════SAMPLE HTML═══════════════════ */

 //Get user input using button
function getValue() {
	var str = document.getElementById("user").value;
	console.log("You entered: " + str);
	alert("You entered: " + str);
}
